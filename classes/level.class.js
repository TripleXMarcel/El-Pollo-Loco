class Level {
    enemies;
    clouds;
    backgroundObjects;
    coins;
    bottle;
    level_end_x = 719 * 13;

    /**
     * Creates an instance of Level.
     * @param {Array<Enemy>} enemies - The enemies in the level.
     * @param {Array<Cloud>} clouds - The clouds in the level.
     * @param {Array<BackgroundObject>} backgroundObjects - The background objects in the level.
     * @param {Array<Coin>} coins - The coins in the level.
     * @param {Array<Bottle>} bottle - The bottles in the level.
     */
    constructor(enemies, clouds, backgroundObjects, coins, bottle) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottle = bottle;
    }
}