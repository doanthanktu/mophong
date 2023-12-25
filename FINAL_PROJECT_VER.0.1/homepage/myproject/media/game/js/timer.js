export class TimeCounter {
    constructor(scene) {
        this.scene = scene;
        this.isCounting = false;
        this.elapsedTime = 0;
        this.startTime = 0;
    }

    startCounting() {
        this.isCounting = true;
        this.startTime = this.scene.time.now;
        this.scene.events.on('update', this.updateTimer, this);
    }

    stopCounting() {
        this.isCounting = false;
        this.scene.events.off('update', this.updateTimer, this);
    }

    updateTimer() {
        if (this.isCounting) {
            this.elapsedTime = this.scene.time.now - this.startTime;
            // console.log('Elapsed time:', this.elapsedTime);
        }
    }

    getTimeInSeconds() {
        return Math.floor(this.elapsedTime / 1000); // Chuyển đổi thời gian thành giây
    }

    convertTimeToString() {
        const minutes = Math.floor(this.elapsedTime / 60000);
        const seconds = ((this.elapsedTime % 60000) / 1000).toFixed(0);
        return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`; // Định dạng phút:giây
    }
}

