class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {
            petersburg: new Map(),
            omsk: new Map(),
            siberia: new Map()
        };
        this.activeMarkers = new Set();
        this.currentCharacterFilter = 'all';
        this.currentMap = 'petersburg';
        this.markerFactory = new MarkerFactory();
        
        this.setupInfoPanelListeners();
        this.loadLocations();
    }

    async createMarkers() {
        console.log('Creating markers with locations:', this.locations); // Log loaded locations

        for (const location of this.locations) {
            if (!this.markers.hasOwnProperty(location.map)) {
                console.warn(`Invalid map type "${location.map}" for location: ${location.id}`);
                continue;
            }

            // Debug marker creation
            console.log('Creating marker for location:', location);

            // Create the marker (supports multi-type markers now)
            const marker = await this.markerFactory.createMarker(location);
            marker.bindPopup(this.createPopupContent(location));

            marker.on('click', (e) => {
                L.DomEvent.stopPropagation(e);
                marker.openPopup();
                this.showLocationInfo(location);
            });

            this.markers[location.map].set(location.id, {
                marker,
                data: location
            });

            if (location.map === this.currentMap) {
                console.log('Adding marker to current map:', location.id);
                marker.addTo(this.map);
                this.activeMarkers.add(location.id);
            }
        }
    }
    

    setupInfoPanelListeners() {
        const infoPanel = document.getElementById('infoPanel');
        
        const hideInfoPanel = () => {
            console.log('Hiding panel');
            infoPanel.classList.add('hidden');
        };
    
        const showInfoPanel = () => {
            console.log('Showing panel');
            infoPanel.classList.remove('hidden');
        };
    
        // Map click listener
        this.map.on('click', () => {
            hideInfoPanel();
        });
    
        // Popup close listener
        this.map.on('popupclose', () => {
            hideInfoPanel();
        });
    
        // Stop propagation for panel clicks
        infoPanel.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    
        // Close button
        const closeButton = document.createElement('button');
        closeButton.innerHTML = 'x';
        closeButton.className = 'close-button';
        closeButton.onclick = (e) => {
            e.stopPropagation();
            hideInfoPanel();
        };
        infoPanel.insertBefore(closeButton, infoPanel.firstChild);
    }
    
    
    

    loadLocations() {
        console.log('Loading locations:', storyLocations); // Debug log
        this.locations = storyLocations.locations;
        console.log('Loaded locations:', this.locations); // Debug log
        this.createMarkers();
    }

    createPopupContent(location) {
        return `
            <div class="popup-content">
                <h3 class="popup-title">${location.name}</h3>
                <p class="popup-description">${location.description.short}</p>
            </div>
        `;    
    }

    switchMap(mapName) {
        if (!this.markers.hasOwnProperty(mapName)) {
            console.error(`Invalid map name: ${mapName}`);
            return;
        }
    
        console.log(`Switching to map: ${mapName}`);
    
        // First, remove ALL markers from the map
        Object.values(this.markers).forEach(markerMap => {
            markerMap.forEach(({ marker }) => {
                marker.remove();
            });
        });
    
        // Then, only add the markers for the current map
        this.markers[mapName].forEach(({ marker }, id) => {
            marker.addTo(this.map);
            this.activeMarkers.add(id);
        });
    
        this.currentMap = mapName;
    }

    updateVisibleMarkers() {
        this.activeMarkers.clear();
        
        console.log('Updating visible markers...');
        console.log('Current character filter:', this.currentCharacterFilter);
        console.log('Current timeline range:', this.currentTimelineRange);
    
        for (const location of storyLocations.locations) {
            const markerId = location.id;
            const markerData = this.markers[this.currentMap].get(markerId);

            if (!markerData) continue;
    
            // Debug: Log character data
            console.log(`Location: ${location.id}, Characters:`, location.characters);
    
            // Ensure characters exist and check case-insensitive match
            const hasCharacter = location.characters &&
                location.characters.some(char => char.toLowerCase() === this.currentCharacterFilter.toLowerCase());
            const characterMatch = this.currentCharacterFilter === 'all' || hasCharacter;
    
            // Timeline filtering logic
            const timelineMatch = !location.date || 
                (location.date >= this.currentTimelineRange[0] && location.date <= this.currentTimelineRange[1]);
    
            if (characterMatch && timelineMatch) {
                if (!this.map.hasLayer(markerData.marker)) {
                    markerData.marker.addTo(this.map);
                    console.log(`Added marker for location: ${location.id}`);
                }
                this.activeMarkers.add(markerId);
            } else {
                if (this.map.hasLayer(markerData.marker)) {
                    markerData.marker.remove();
                    console.log(`Removed marker for location: ${location.id}`);
                }
                this.activeMarkers.delete(markerId);
            }
        }
    }
    
    

    findMarkerById(markerId) {
        // Helper method to find a marker across all maps
        for (const mapMarkers of Object.values(this.markers)) {
            if (mapMarkers.has(markerId)) {
                return mapMarkers.get(markerId);
            }
        }
        return null;
    }

    showAllMarkers() {
        console.log('Showing all markers for the current map');
    
        this.markers[this.currentMap].forEach(({ marker }, id) => {
            marker.setOpacity(1);
            marker.options.interactive = true;
            this.activeMarkers.add(id);
        });
    }
    

    showLocationInfo(location) {
        console.log('showLocationInfo called with:', location);
        
        const infoPanel = document.getElementById('infoPanel');
        const locationTitle = document.getElementById('locationTitle');
        const shortDesc = document.getElementById('shortDesc');
        const longDesc = document.getElementById('longDesc');
        const bookExcerpt = document.getElementById('bookExcerpt');
        const modernPhoto = document.getElementById('modernPhoto');
        
        // Get all horizontal rules (separators)
        const separators = infoPanel.querySelectorAll('hr');
        
        // Update info panel content
        locationTitle.textContent = location.name;
        shortDesc.textContent = location.description.short;
        
        // Handle long description
        if (location.description.long) {
            longDesc.textContent = location.description.long;
            longDesc.classList.remove('hidden');
            separators[0].classList.remove('hidden'); // Show first separator
        } else {
            longDesc.textContent = '';
            longDesc.classList.add('hidden');
            separators[0].classList.add('hidden'); // Hide first separator
        }
        
        // Handle book excerpt
        if (location.bookExcerpt) {
            bookExcerpt.textContent = location.bookExcerpt;
            bookExcerpt.classList.remove('hidden');
            separators[1].classList.remove('hidden'); // Show second separator
        } else {
            bookExcerpt.textContent = '';
            bookExcerpt.classList.add('hidden');
            separators[1].classList.add('hidden'); // Hide second separator
        }
        
        // Handle audio button visibility
        const playAudioButton = document.getElementById('playAudio');
        if (location.audio) {
            playAudioButton.classList.remove('hidden');
            separators[2].classList.remove('hidden'); // Show third separator
        } else {
            playAudioButton.classList.add('hidden');
            separators[2].classList.add('hidden'); // Hide third separator
        }
        
        // Check for specific marker that should have the map-switching button
        // Replace "siberia-link" with the actual ID of your marker
        if (location.id === "omsk_link") {
            // Check if the map link button already exists
            let mapLinkButton = document.getElementById('mapLinkButton');
            
            // If it doesn't exist, create it
            if (!mapLinkButton) {
                mapLinkButton = document.createElement('button');
                mapLinkButton.id = 'mapLinkButton';
                mapLinkButton.className = 'btn btn-secondary';
                mapLinkButton.textContent = 'View Omsk Map';
                
                // Updated click event to use the mapManager's switchMap method
                mapLinkButton.addEventListener('click', () => {
                    // Check if mapManager exists and call the switchMap method
                    if (window.mapInstance) {
                        window.mapInstance.switchMap('omsk');
                    } else {
                        console.error('mapManager not found!');
                    }
                    
                    // Optionally close the info panel after switching
                    infoPanel.classList.add('hidden');
                });
                
                // Insert button before the modern photo separator
                infoPanel.insertBefore(mapLinkButton, separators[3]);
                
                // Add a separator after the button if it doesn't exist
                let buttonSeparator = document.getElementById('buttonSeparator');
                if (!buttonSeparator) {
                    buttonSeparator = document.createElement('hr');
                    buttonSeparator.id = 'buttonSeparator';
                    infoPanel.insertBefore(buttonSeparator, separators[3]);
                }
            } else {
                // If the button already exists, make sure it's visible
                mapLinkButton.classList.remove('hidden');
                document.getElementById('buttonSeparator').classList.remove('hidden');
            }
        } else {
            // For all other markers, hide the map link button if it exists
            const mapLinkButton = document.getElementById('mapLinkButton');
            if (mapLinkButton) {
                mapLinkButton.classList.add('hidden');
                document.getElementById('buttonSeparator')?.classList.add('hidden');
            }
        }
        
        // Handle modern photo if available
        if (location.modernPhoto) {
            modernPhoto.src = location.modernPhoto;
            modernPhoto.classList.remove('hidden');
            separators[3].classList.remove('hidden'); // Show fourth separator
        } else {
            modernPhoto.classList.add('hidden');
            separators[3].classList.add('hidden'); // Hide fourth separator
        }
        
        // Show the info panel
        infoPanel.classList.remove('hidden');
    }


    async filterByTypes(activeFilters) {
        console.log('filterByTypes called with:', activeFilters, 'currentCharacter:', this.currentCharacterFilter);
        
        // Store active filters
        this.activeTypeFilters = activeFilters;
        
        for (const [markerId, { marker, data: location }] of this.markers[this.currentMap].entries()) {
            const markerTypes = location.type.split(',');
            const activeTypes = markerTypes.filter(type => activeFilters[type.trim().toUpperCase()] === true);
            
            // Debug the character match
            const hasCharacter = location.characters && location.characters.includes(this.currentCharacterFilter);
            console.log(`Marker ${markerId} - Type/character check: types=${markerTypes}, activeTypes=${activeTypes}, hasCharacter=${hasCharacter}`);
            
            // Character match logic identical to updateVisibleMarkers
            const characterMatch = this.currentCharacterFilter === 'all' || hasCharacter;
            
            if (activeTypes.length > 0 && characterMatch) {
                const newIcon = await this.getDynamicIcon(activeTypes);
                if (newIcon) {
                    marker.setIcon(newIcon);
                }
                
                if (!this.map.hasLayer(marker)) {
                    console.log(`Adding marker ${markerId} back to map (type filter)`);
                    marker.addTo(this.map);
                }
                this.activeMarkers.add(markerId);
            } else {
                if (this.map.hasLayer(marker)) {
                    console.log(`Removing marker ${markerId} from map (type filter)`);
                    marker.remove();
                }
                this.activeMarkers.delete(markerId);
            }
        }
    }
    
    
    
    
    getDynamicIcon(activeTypes) {
        console.log("Getting dynamic icon for active types:", activeTypes);

        const standardIconSize = [25, 41]; // Standard dimensions for all markers

        if (activeTypes.length === 1) {
            const type = activeTypes[0].trim().toUpperCase();
            const markerType = MARKER_TYPES[type];
            console.log("Returning single-type icon for type:", type);
            return L.icon({
                ...markerType.icon,
                iconSize: standardIconSize,
            });
        }

        if (activeTypes.length === 2) {
            const primaryType = MARKER_TYPES[activeTypes[0].trim().toUpperCase()];
            const secondaryType = MARKER_TYPES[activeTypes[1].trim().toUpperCase()];
            console.log("Generating two-tone icon for types:", primaryType.id, secondaryType.id);
            return this.markerFactory.createTwoToneIcon(primaryType, secondaryType);
        }

        console.warn("No valid active types found, falling back to default icon.");
        return L.icon(MARKER_TYPES.DEFAULT.icon);
    }
}