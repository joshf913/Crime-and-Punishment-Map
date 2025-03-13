class LocationManager {
    constructor() {
        this.locations = new Map();
        this.currentLocations = [];
    }

    initialize() {
        // Load locations from story-locations.js
        storyLocations.timelineEvents.forEach(event => {
            event.locations.forEach(location => {
                this.locations.set(location.id, location);
            });
        });
    }

    getLocation(id) {
        return this.locations.get(id);
    }

    getAllLocations() {
        return Array.from(this.locations.values());
    }

    getLocationsByCharacter(character) {
        return Array.from(this.locations.values())
            .filter(location => location.character === character);
    }

    getLocationsByTimeframe(startTime, endTime) {
        return storyLocations.timelineEvents
            .filter((event, index) => index >= startTime && index <= endTime)
            .flatMap(event => event.locations);
    }

    searchLocations(searchTerm) {
        searchTerm = searchTerm.toLowerCase();
        return Array.from(this.locations.values()).filter(location => 
            location.title.toLowerCase().includes(searchTerm) ||
            location.description.toLowerCase().includes(searchTerm) ||
            location.passage.toLowerCase().includes(searchTerm)
        );
    }
}

// Export the LocationManager class
const locationManager = new LocationManager();