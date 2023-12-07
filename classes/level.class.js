class Level{
    enemies;
    clouds;
    backgroundObjects;
    coins;
    bottle;
    statusbar;
    level_end_x = 719*13;

    constructor(enemies, clouds, backgroundObjects, coins, bottle, statusbar){
        this.enemies=enemies;
        this.clouds=clouds;
        this.backgroundObjects=backgroundObjects;
        this.coins=coins;
        this.bottle=bottle;
        this.statusbar=statusbar;
    }
}