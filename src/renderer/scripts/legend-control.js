class LegendControl extends L.Control {
    constructor(options) {
        super(options);
        this.activeFilters = {};

        Object.keys(MARKER_TYPES)
            .filter(type => type !== 'DEFAULT')
            .forEach(type => {
                this.activeFilters[type] = true;
            });
        }
    
        onAdd(map) {
            this.map = map;
            const div = L.DomUtil.create('div', 'map-key'); // Create the legend container
            div.innerHTML = '<h4>Location Types</h4>'; // Add legend title
        
            // Create legend items for each marker type, excluding the DEFAULT marker type
            Object.entries(MARKER_TYPES)
                .filter(([type]) => type !== 'DEFAULT') // Skip the DEFAULT marker type
                .forEach(([type, config]) => {
                    const item = L.DomUtil.create('div', 'legend-item', div);
        
                    // Create toggle checkbox
                    const toggleDiv = L.DomUtil.create('div', 'legend-toggle', item);
                    const checkbox = L.DomUtil.create('input', 'legend-checkbox', toggleDiv);
                    checkbox.type = 'checkbox';
                    checkbox.checked = true;
                    checkbox.id = `toggle-${type.toLowerCase()}`;
        
                    // Create marker icon sample
                    const markerDiv = L.DomUtil.create('div', 'legend-marker', item);
                    const icon = L.DomUtil.create('img', 'legend-icon', markerDiv);
                    icon.src = config.icon.iconUrl;
                    icon.style.width = '12px'; // Smaller icon width for legend
                    icon.style.height = '20px'; // Smaller icon height for legend
        
                    // Add description text
                    const textDiv = L.DomUtil.create('div', 'legend-text', item);
                    textDiv.textContent = this.formatTypeName(type);
        
                    // Add event listener for the checkbox
                    L.DomEvent.on(checkbox, 'change', (e) => {
                        e.stopPropagation(); // Prevent map interactions
                        this.activeFilters[type] = checkbox.checked;
        
                        // Log filter change for debugging
                        console.log(`Filter toggled for type: ${type}, active: ${checkbox.checked}`);
        
                        // Update legend item visual state
                        if (checkbox.checked) {
                            item.classList.remove('disabled');
                        } else {
                            item.classList.add('disabled');
                        }
        
                        // Update marker visibility in the map
                        this.updateMarkerVisibility();
                    });
        
                    // Make the entire legend item clickable for better UX
                    L.DomEvent.on(item, 'click', (e) => {
                        if (e.target !== checkbox) { // If it's not the checkbox itself
                            checkbox.checked = !checkbox.checked;
                            const changeEvent = new Event('change'); // Trigger the change event
                            checkbox.dispatchEvent(changeEvent);
                        }
                    });
        
                    // Prevent the legend from interfering with map interactions
                    L.DomEvent.disableClickPropagation(item);
                });
        
            // Add a special note for two-tone markers
            const multiTypeNote = L.DomUtil.create('div', 'legend-item', div);
            multiTypeNote.innerHTML = '<strong>Two-Tone Markers:</strong> Represent locations with multiple categories.';
        
            // Prevent the legend container from propagating map events
            L.DomEvent.disableClickPropagation(div);
            L.DomEvent.disableScrollPropagation(div);
        
            return div;
        }
        
    
    
    formatTypeName(type) {
        return type
            .toLowerCase()
            .replace(/_/g, ' ') // Replace underscores with spaces
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    
    updateMarkerVisibility() {
        console.log('Updating marker visibility with active filters:', this.activeFilters);

        if (window.markerManager) {
            window.markerManager.filterByTypes(this.activeFilters);
        } else {
            console.warn('MarkerManager not found!');
        }
    }
}