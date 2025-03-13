class MapManager {
    constructor() {
        // Define center point coordinates (0, 0)
        this.homePosition = [-27, -31];
        this.homeZoom = 2;

        this.map = L.map('map', {
            zoomControl: false,
            zoomSnap: 0.5,
            zoomDelta: 0.5,
            minZoom: 2,
            maxZoom: 6,
        }).setView(this.homePosition, this.homeZoom);  // Set initial view to center at zoom 0
        
        this.petersburgLayer = L.tileLayer('../assets/tiles/petersburg/{z}/{x}/{y}.png', {
            minZoom: 0,
            maxZoom: 7,
            maxNativeZoom: 7,
            tms: true,
            noWrap: true
        });

        this.siberiaLayer = L.tileLayer('../assets/tiles/siberia/{z}/{x}/{y}.png', {
            minZoom: 0,
            maxZoom: 6,
            maxNativeZoom: 6,
            tms: true,
            noWrap: true
        });
        
        this.omskLayer = L.tileLayer('../assets/tiles/omsk/{z}/{x}/{y}.png', {
            minZoom: 0,
            maxZoom: 6,

            tms: true,
            noWrap: true
        });
        
        this.petersburgLayer.addTo(this.map);
        
        // Add layer control
        const baseMaps = {
            "St. Petersburg": this.petersburgLayer,
            "Siberia": this.siberiaLayer,
            "Omsk": this.omskLayer
        };
        
        const layerControlOptions = { position: 'topleft' };
        L.control.layers(baseMaps, null, layerControlOptions).addTo(this.map);

        // Add the zoomHome control with custom options
        const zoomHomeOptions = {
            position: 'topleft',
            zoomHomeIcon: 'fa fa-home',
            zoomHomeTitle: 'Return to large view',
            homeCoordinates: this.homePosition,
            homeZoom: this.homeZoom
          };
        const zoomHome = L.Control.zoomHome(zoomHomeOptions);
        zoomHome.addTo(this.map);

        this.map.on('baselayerchange', (e) => {
            // Convert layer control name to map name
            let mapName;
            if (e.name === "St. Petersburg") mapName = "petersburg";
            else if (e.name === "Omsk") mapName = "omsk";
            else if (e.name === "Siberia") mapName = "siberia";
            
            // Only update the markers without recursively calling switchMap
            if (mapName && window.markerManager) {
              console.log('Switching markers to:', mapName);
              window.markerManager.switchMap(mapName);
            }
          });

        const legendControl = new LegendControl({ position: 'topleft' });
        legendControl.addTo(this.map);    

        // Init the context menu
        this.contextMenu = new MapContextMenu(this, window.markerManager);

        this.setupKeyboardControls();
    }



switchMap(mapName) {
    console.log('MapManager.switchMap called with:', mapName);
    
    // Prevent recursion - don't proceed if this map is already active
    const isAlreadyActive = 
      (mapName === 'petersburg' && this.map.hasLayer(this.petersburgLayer)) ||
      (mapName === 'omsk' && this.map.hasLayer(this.omskLayer)) ||
      (mapName === 'siberia' && this.map.hasLayer(this.siberiaLayer));
    
    if (isAlreadyActive) return this;
    
    // Remove all current layers first
    if (this.petersburgLayer) this.map.removeLayer(this.petersburgLayer);
    if (this.omskLayer) this.map.removeLayer(this.omskLayer);
    if (this.siberiaLayer) this.map.removeLayer(this.siberiaLayer);
    
    // Add the requested layer
    switch(mapName.toLowerCase()) {
      case 'petersburg':
        this.petersburgLayer.addTo(this.map);
        break;
      case 'omsk':
        this.omskLayer.addTo(this.map);
        break;
      case 'siberia':
        this.siberiaLayer.addTo(this.map);
        break;
      default:
        console.warn('Unknown map name:', mapName);
        this.petersburgLayer.addTo(this.map); // Default to Petersburg
    }
    
    // Reset view
    this.map.setView(this.homePosition, this.homeZoom);
    
    // Notify MarkerManager if needed, but DON'T fire the baselayerchange event
    if (window.markerManager && typeof window.markerManager.switchMap === 'function') {
      window.markerManager.switchMap(mapName);
    }
    
    return this; // Allow method chaining
  }

    setupKeyboardControls() {
        document.addEventListener('keydown', (e) => {
            const offset = 100;
            const center = this.map.getCenter();
            
            switch(e.key.toLowerCase()) {
                case 'w':
                    this.map.panBy([0, -offset]);
                    break;
                case 's':
                    this.map.panBy([0, offset]);
                    break;
                case 'a':
                    this.map.panBy([-offset, 0]);
                    break;
                case 'd':
                    this.map.panBy([offset, 0]);
                    break;
                case 'h': // Add keyboard shortcut for home
                    this.map.setView(this.homePosition, this.homeZoom);
                    break;
            }
        });
    }
}