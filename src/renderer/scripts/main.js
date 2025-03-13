document.addEventListener('DOMContentLoaded', () => {
    // Initialize managers
    const mapInstance = new MapManager();
    window.mapInstance = mapInstance; // Make MapManager instance globally accessible
    window.markerManager = new MarkerManager(mapInstance.map); // Make MarkerManager globally accessible
    const timeline = new Timeline(window.markerManager);
    const audioManager = new AudioManager();
    

    // Setup character filter
    const characterFilter = document.getElementById('characterFilter');
    characterFilter.addEventListener('change', (event) => {
        // Set the currently selected character in MarkerManager
        const selectedCharacter = event.target.value;
        console.log('Selected character:', selectedCharacter); // Debugging purpose

        // Update MarkerManager's currentCharacterFilter
        markerManager.currentCharacterFilter = selectedCharacter;

        // Update visible markers dynamically
        markerManager.updateVisibleMarkers();
    });

    // Show all markers initially
    window.markerManager.showAllMarkers();
});
