class Statusbar extends DrawableObject {
    emptyStatusBar;
    healthStatusBar;
    coinStatusBar;
    salsaStatusBar;
    healthEndBossStatusBar;

    constructor(emptyStatusBar, healthStatusBar, coinStatusBar, salsaStatusBar, healthEndBossStatusBar) {
        super();
        this.emptyStatusBar = emptyStatusBar;
        this.healthStatusBar = healthStatusBar;
        this.coinStatusBar = coinStatusBar;
        this.salsaStatusBar = salsaStatusBar;
        this.healthEndBossStatusBar = healthEndBossStatusBar;
    }
}