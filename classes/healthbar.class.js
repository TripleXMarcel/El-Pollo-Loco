class HealthBar extends Statusbar {
    GREEN_BAR = 'img/7_statusbars/4_bar_elements/statusbar_green.png';
    constructor() {
        super().loadImage(this.GREEN_BAR);
        this.x = 30;
        this.y = 70;
        this.height = 25;
        this.width = 300;
        this.changeWidth();
    }
    changeWidth() {
        setInterval(() => {
            this.width = 300 * this.percentage();
        }, 1000)
    }
    

}