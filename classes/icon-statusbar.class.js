class IconStatusBar extends Statusbar {


    constructor(path, y, x, heigth, width) {
        super().loadImage(path);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = heigth;
    }
}