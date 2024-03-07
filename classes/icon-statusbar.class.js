class IconStatusBar extends Statusbar {

    /**
     * Creates an instance of IconStatusBar.
     * @param {string} path - The path to the image of the icon.
     * @param {number} y - The y-coordinate of the icon status bar.
     * @param {number} x - The x-coordinate of the icon status bar.
     * @param {number} height - The height of the icon status bar.
     * @param {number} width - The width of the icon status bar.
     */
    constructor(path, y, x, heigth, width) {
        super().loadImage(path);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = heigth;
    }
}