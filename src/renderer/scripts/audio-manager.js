class AudioManager {
    constructor() {
        this.audio = new Audio();
        this.isPlaying = false;
        this.currentAudioFile = null;
        this.setupControls();
    }

    setupControls() {
        const playButton = document.getElementById('playAudio');
        playButton.addEventListener('click', () => this.toggleAudio());
    }

    loadAudio(audioFile) {
        if (this.currentAudioFile !== audioFile) {
            this.audio.src = `assets/audio/${audioFile}`;
            this.currentAudioFile = audioFile;
            this.isPlaying = false;
        }
    }

    toggleAudio() {
        if (!this.currentAudioFile) return;

        if (this.isPlaying) {
            this.audio.pause();
            this.isPlaying = false;
        } else {
            this.audio.play();
            this.isPlaying = true;
        }
    }

    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.isPlaying = false;
    }
}