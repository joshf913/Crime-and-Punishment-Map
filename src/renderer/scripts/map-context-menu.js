class MapContextMenu {
    constructor(mapManager, markerManager) {
        this.mapManager = mapManager;
        this.markerManager = markerManager;
        this.initializeContextMenu();
    }

    initializeContextMenu() {
        this.mapManager.map.on('contextmenu', (e) => {
            const lat = e.latlng.lat.toFixed(6);
            const lng = e.latlng.lng.toFixed(6);
            
            const popup = L.popup()
                .setLatLng(e.latlng)
                .setContent(this.createContextMenuContent(lat, lng))
                .openOn(this.mapManager.map);
        });
    }

    createContextMenuContent(lat, lng) {
        return `
            <div class="context-menu-container">
                <h4>Location Coordinates</h4>
                <div class="coordinates">
                    <p><strong>Latitude:</strong> ${lat}</p>
                    <p><strong>Longitude:</strong> ${lng}</p>
                </div>
                <div class="context-menu-buttons">
                    <button onclick="window.copyToClipboard('${lat}, ${lng}')" class="context-menu-button">
                        Copy Coordinates
                    </button>
                </div>
            </div>
        `;
    }
}

// Global utility function for copying coordinates
window.copyToClipboard = function(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            // Create and show a temporary notification
            const notification = document.createElement('div');
            notification.className = 'copy-notification';
            notification.textContent = 'Coordinates copied!';
            document.body.appendChild(notification);
            
            // Remove notification after 2 seconds
            setTimeout(() => {
                notification.remove();
            }, 2000);
        })
        .catch(err => console.error('Failed to copy coordinates:', err));
};