class Cloud extends MovableObject {
    y = 20;
    width = 500;
    height = 200;
    speed = 0.2;
    interval;

    /**
     * Creates an instance of Cloud.
     * @param {string} url - The URL of the image for the cloud.
     * @param {number} x - The initial horizontal position of the cloud.
     */
    constructor(url, x) {
        super().loadImage(url);
        this.x = (719 * x) + Math.random() * 500;
    }

    /**
     * Animates the movement of the cloud.
     */
    animate() {
        this.speed = this.speed + Math.random() * 0.2;
        this.interval = setInterval(() => {
            if (gamePause === false) {
                if (this.x > -1000) {
                    this.moveLeft();
                    this.otherDirection = false;
                }
                else {
                    this.x = (719 * 20) + Math.random() * 500;
                }
            }
        }, 1000 / 60);
    }
}