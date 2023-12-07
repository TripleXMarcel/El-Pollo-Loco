class HealthBar extends Statusbar{
    x;
    y;
    height;
    width;
    //health= this.world.character.health;
    constructor(url, x, y, height, width) {
        super().loadImage(url);
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
}