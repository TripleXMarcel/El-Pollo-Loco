class HealthBar extends DrawableObject {
    GREEN_BAR = 'img/7_statusbars/4_bar_elements/statusbar_green.png';
    constructor() {
        super();
        this.loadImage(this.GREEN_BAR);
        this.x = 30;
        this.y = 70;
        this.height = 25;
        this.width = 300;
    }
loadEnergy(energy) {
    this.percentage = energy / 100;
    this.width = 300*this.percentage;
}
}