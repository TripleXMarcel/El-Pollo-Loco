class Level{
    enemies;
    clouds;
    backgroundObjects;
    coins;
    bottle;
    level_end_x = 719*13;

    constructor(enemies, clouds, backgroundObjects, coins, bottle, frontObjects){
        this.enemies=enemies;
        this.clouds=clouds;
        this.backgroundObjects=backgroundObjects;
        this.coins=coins;
        this.bottle=bottle;
        this.frontObjects=frontObjects;
    }
}