class CoinBar extends Statusbar {
    GREEN_BAR = 'img/7_statusbars/4_bar_elements/statusbar_green.png';

    /**
     * Creates an instance of CoinBar.
     */
    constructor() {
        super();
        this.loadImage(this.GREEN_BAR);
        this.x = 30;
        this.y = 110;
        this.height = 25;
        this.width = 0;
    }

    /**
     * Updates the width of the coin bar based on the number of collected coins.
     * @param {number} coins - The number of collected coins.
     * @param {number} i - The total number of collectible coins.
     */
    loadCoins(coins, i) {
        this.percentage = coins / world.colectableCoins;
        this.width = 300 * this.percentage;
    }
}