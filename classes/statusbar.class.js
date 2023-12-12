class Statusbar extends DrawableObject {
    emptyStatusBar;
    iconStatusBar;
    healthStatusBar;
    coinStatusBar;
    salsaStatusBar;
    healthEndBossStatusBar;
    percentage;

    constructor(emptyStatusBar, iconStatusBar, healthStatusBar, coinStatusBar, salsaStatusBar, healthEndBossStatusBar) {
        super();
        this.emptyStatusBar = emptyStatusBar;
        this.iconStatusBar = iconStatusBar;
        this.healthStatusBar = healthStatusBar;
        this.coinStatusBar = coinStatusBar;
        this.salsaStatusBar = salsaStatusBar;
        this.healthEndBossStatusBar = healthEndBossStatusBar;
    }
    loadEnergy(energy) {
        this.percentage = energy / 100;
        console.log(this.percentage);
    }

}