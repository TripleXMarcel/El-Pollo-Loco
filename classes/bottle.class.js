class Bottle extends MovableObject{
    y =380;
    height = 40;
    width = 40;

    constructor(url, x) {
        super().loadImage(url);
        this.x = (719 * x) + Math.random() * 500;
    }
}