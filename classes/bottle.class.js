class Bottle extends MovableObject{
    y =380;
    height = 40;
    width = 40;
    y_Rect = 380;
    width_Rect = 10;
    height_Rect = 40;

    constructor(url, x) {
        super().loadImage(url);
        this.x = (719 * x) + Math.random() * 500;
        this.x_Rect = this.x+20;
    }
}