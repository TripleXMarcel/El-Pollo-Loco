class HealthEndBossBar extends DrawableObject {
    GREEN_BAR = 'img/7_statusbars/4_bar_elements/statusbar_green.png';

    /**
     * Creates an instance of HealthEndBossBar.
     */
    constructor() {
        super();
        this.loadImage(this.GREEN_BAR);
        this.x = 680;
        this.y = 70;
        this.height = 25;
        this.width = 0;
        this.loadEnergy();
        this.otherDirection = true;
    }

    /**
     * Loads the energy of the end boss.
     */
    loadEnergy() {
        setInterval(() => {
            if (endBossHealth === null) {
                this.width = 0;
            } else {
                this.percentage = (endBossHealth / 5) * -100;
                this.width = 1.5 * this.percentage;
            }
        }, 100);
    }
}