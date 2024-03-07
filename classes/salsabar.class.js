class SalsaBar extends Statusbar {
    GREEN_BAR = 'img/7_statusbars/4_bar_elements/statusbar_green.png';

    /**
     * Creates an instance of SalsaBar.
     */
    constructor() {
        super();
        this.loadImage(this.GREEN_BAR);
        this.x = 30;
        this.y = 30;
        this.height = 25;
        this.width = 0;
    }

    /**
    * Updates the salsa bar based on the collected salsa amount.
    * @param {number} salsa - The amount of collected salsa.
    * @param {number} i - The total number of collectable salsa.
    */
    loadSalsa(salsa, i) {
        this.percentage = salsa / world.colectableSalsa;
        this.width = 300 * this.percentage;
    }
}