class Statusbar extends MovableObject {
    x;
    y;
    height;
    width;
    constructor(url, x, y, height, width) {
        super().loadImage(url);
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
}