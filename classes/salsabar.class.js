class SalsaBar extends Statusbar{
        GREEN_BAR = 'img/7_statusbars/4_bar_elements/statusbar_green.png';
        constructor() {
            super();
            this.loadImage(this.GREEN_BAR);
            this.x = 30;
            this.y = 30;
            this.height = 25;
            this.width = 0;
        }
    loadSalsa(salsa, i) {
        this.percentage = salsa / (i+salsa);
        this.width = 300*this.percentage; // Aufruf der Methode zur Breitenaktualisierung der HealthBar
    }
}