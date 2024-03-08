/**
 * Creates a MenuOverlay instance with the given cloud and background objects.
 * @param {Array} clouds - An array of Cloud objects.
 * @param {Array} backgroundObjects - An array of BackgroundObject objects.
 * @returns {MenuOverlay} A new MenuOverlay instance.
 */
const menu1 = new MenuOverlay(
    createCloudObjectsMenu(),
    createBackgroundObjectsMenu()
)

/**
 * Creates an array of Cloud objects.
 * @returns {Array} An array of Cloud objects.
 */
function createCloudObjectsMenu() {
    return [new Cloud('img/5_background/layers/4_clouds/1.png', 0),
    new Cloud('img/5_background/layers/4_clouds/2.png', 0),
    new Cloud('img/5_background/layers/4_clouds/1.png', 1),
    new Cloud('img/5_background/layers/4_clouds/2.png', 1),
    new Cloud('img/5_background/layers/4_clouds/1.png', 2)
    ];
}

/**
 * Creates an array of BackgroundObject objects.
 * @returns {Array} An array of BackgroundObject objects.
 */
function createBackgroundObjectsMenu() {
    return [new BackgroundObject('img/5_background/layers/air.png', -719),
    new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
    new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
    new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),
    new BackgroundObject('img/5_background/layers/air.png', 0),
    new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
    new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
    new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
    new BackgroundObject('img/5_background/layers/air.png', 719),
    new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
    new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
    new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719)
    ];
}