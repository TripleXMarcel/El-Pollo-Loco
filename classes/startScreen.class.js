class StartScreen {
    ctx;
    img;
    width = 720;
    height = 480;
    x = 0;
    y = 0;

    /**
     * Creates an instance of StartScreen.
     * @param {HTMLCanvasElement} canvas - The canvas element on which the start screen is displayed.
     */
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.loadImage('img/9_intro_outro_screens/start/startscreen_1.png');
        this.draw();
    }

    /**
     * Loads the image for the start screen.
     * @param {string} path - The file path of the image.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Draws the start screen on the canvas.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }
}