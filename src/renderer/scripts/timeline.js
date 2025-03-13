class Timeline {
    constructor(markerManager) {
        this.markerManager = markerManager;
        this.slider = document.getElementById('timelineSlider');
        this.label = document.getElementById('timelineLabel');
        this.timelineEvents = [
            { value: -20, label: "All Markers" }, // Adjusted to align with the step
            { value: 0, label: "Story Beginning" },
            { value: 20, label: "Murder Planning" },
            { value: 40, label: "The Crime" },
            { value: 60, label: "Investigation" },
            { value: 80, label: "Confession" },
            { value: 100, label: "Epilogue" }
        ];

        this.setupEvents();

        // Default to "All Markers"
        this.slider.value = -20;
        this.markerManager.updateVisibleMarkers(null); // Show all markers
        this.updateLabel(-20); // Show "All Markers" label
    }

    setupEvents() {
        this.slider.addEventListener('input', () => {
            const value = parseInt(this.slider.value);
            if (!isNaN(value)) {
                this.updateLabel(value);
                this.markerManager.updateVisibleMarkers(value === -20 ? null : value); // Null for "All Markers"
            }
        });
    }

    updateLabel(value) {
        const event = this.timelineEvents.find(e => e.value === value);
        this.label.textContent = event ? event.label : '';
    }
}
