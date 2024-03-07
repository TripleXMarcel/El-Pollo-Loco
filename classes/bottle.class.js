class Bottle extends MovableObject{
    y =380;
    height = 40;
    width = 40;
    y_Rect = 380;
    width_Rect = 10;
    height_Rect = 40;

    /**
     * Creates an instance of Bottle.
     * @param {string} url - The URL of the image for the bottle.
     * @param {number} x - The horizontal position of the bottle.
     */
    constructor(url, x) {
        super().loadImage(url);
        this.x = (719 * x) + Math.random() * 500;
        this.x_Rect = this.x+20;
    }
}