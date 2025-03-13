// Updated MarkerFactory for Two-Tone Markers
class MarkerFactory {
    constructor() {
        this.iconCache = new Map();
    }

    async createTwoToneIcon(primaryType, secondaryType) {
        const cacheKey = `${primaryType.id}_${secondaryType.id}`;
        if (this.iconCache.has(cacheKey)) {
            console.log(`Using cached two-tone icon for: ${cacheKey}`);
            return this.iconCache.get(cacheKey);
        }

        console.log(`Generating new two-tone icon for: ${cacheKey}`);

        const canvasWidth = 25; // Standard width
        const canvasHeight = 41; // Standard height
        const canvas = document.createElement('canvas');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        const ctx = canvas.getContext('2d');

        const primaryImg = await this.loadImage(primaryType.icon.iconUrl);
        const secondaryImg = await this.loadImage(secondaryType.icon.iconUrl);

        console.log("Drawing primary image:", primaryType.icon.iconUrl);
        ctx.drawImage(primaryImg, 0, 0, primaryImg.width / 2, primaryImg.height, 0, 0, canvas.width / 2, canvas.height);

        console.log("Drawing secondary image:", secondaryType.icon.iconUrl);
        ctx.drawImage(secondaryImg, secondaryImg.width / 2, 0, secondaryImg.width / 2, secondaryImg.height, canvas.width / 2, 0, canvas.width / 2, canvas.height);

        const iconUrl = canvas.toDataURL();
        console.log("Generated two-tone icon URL:", iconUrl);

        const icon = L.icon({
            iconUrl: iconUrl,
            iconSize: [canvasWidth, canvasHeight],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
        });

        this.iconCache.set(cacheKey, icon);
        return icon;
    }
    

    createIcon(markerType) {
        if (!this.iconCache.has(markerType.id)) {
            this.iconCache.set(markerType.id, L.icon(markerType.icon));
        }
        return this.iconCache.get(markerType.id);
    }

    createMarker(location, options = {}) {
        const types = location.type?.toUpperCase().split(',') || ['DEFAULT']; // Handle multiple types
        let markerPromise;

        if (types.length > 1) {
            const primaryType = MARKER_TYPES[types[0]];
            const secondaryType = MARKER_TYPES[types[1]];
            markerPromise = this.createTwoToneIcon(primaryType, secondaryType);
        } else {
            const markerType = MARKER_TYPES[types[0]] || MARKER_TYPES.DEFAULT;
            markerPromise = Promise.resolve(this.createIcon(markerType));
        }

        return markerPromise.then(icon => 
            L.marker(location.coordinates, {
                icon,
                ...options
            })
        );
    }

    loadImage(url) {
        console.log("Loading image from URL:", url);
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => {
                console.error("Failed to load image:", url);
                reject(`Failed to load image: ${url}`);
            };
            img.src = url;
        });
    }
}

