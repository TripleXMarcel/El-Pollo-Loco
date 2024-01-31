let level2;
function loadLevel2(){
    return new Level(
        [new Endboss()
    
        ],
        [
            new Cloud('img/5_background/layers/4_clouds/1.png', 0),
            new Cloud('img/5_background/layers/4_clouds/2.png', 0),
            new Cloud('img/5_background/layers/4_clouds/1.png', 1),
            new Cloud('img/5_background/layers/4_clouds/2.png', 1),
            new Cloud('img/5_background/layers/4_clouds/1.png', 2),
            new Cloud('img/5_background/layers/4_clouds/2.png', 2),
            new Cloud('img/5_background/layers/4_clouds/1.png', 3),
            new Cloud('img/5_background/layers/4_clouds/2.png', 3),
            new Cloud('img/5_background/layers/4_clouds/1.png', 4),
            new Cloud('img/5_background/layers/4_clouds/2.png', 4),
            new Cloud('img/5_background/layers/4_clouds/1.png', 5),
            new Cloud('img/5_background/layers/4_clouds/2.png', 5),
            new Cloud('img/5_background/layers/4_clouds/1.png', 6),
            new Cloud('img/5_background/layers/4_clouds/2.png', 6),
            new Cloud('img/5_background/layers/4_clouds/1.png', 7),
            new Cloud('img/5_background/layers/4_clouds/2.png', 7),
            new Cloud('img/5_background/layers/4_clouds/1.png', 8),
            new Cloud('img/5_background/layers/4_clouds/2.png', 8),
            new Cloud('img/5_background/layers/4_clouds/1.png', 9),
            new Cloud('img/5_background/layers/4_clouds/2.png', 9),
            new Cloud('img/5_background/layers/4_clouds/1.png', 10),
            new Cloud('img/5_background/layers/4_clouds/2.png', 10),
            new Cloud('img/5_background/layers/4_clouds/1.png', 11),
            new Cloud('img/5_background/layers/4_clouds/2.png', 11),
            new Cloud('img/5_background/layers/4_clouds/1.png', 12),
            new Cloud('img/5_background/layers/4_clouds/2.png', 12),
            new Cloud('img/5_background/layers/4_clouds/1.png', 13),
            new Cloud('img/5_background/layers/4_clouds/2.png', 13),
            new Cloud('img/5_background/layers/4_clouds/1.png', 14),
            new Cloud('img/5_background/layers/4_clouds/2.png', 14),
            new Cloud('img/5_background/layers/4_clouds/1.png', 15),
            new Cloud('img/5_background/layers/4_clouds/2.png', 15),
            new Cloud('img/5_background/layers/4_clouds/1.png', 16),
            new Cloud('img/5_background/layers/4_clouds/2.png', 16),
            new Cloud('img/5_background/layers/4_clouds/1.png', 17),
            new Cloud('img/5_background/layers/4_clouds/2.png', 17),
            new Cloud('img/5_background/layers/4_clouds/1.png', 18),
            new Cloud('img/5_background/layers/4_clouds/2.png', 18),
            new Cloud('img/5_background/layers/4_clouds/1.png', 19),
            new Cloud('img/5_background/layers/4_clouds/2.png', 19),
            new Cloud('img/5_background/layers/4_clouds/1.png', 20),
            new Cloud('img/5_background/layers/4_clouds/2.png', 20)
    
        ],
        [
            new BackgroundObject('img/5_background/layers/air.png', -719),
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
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 7),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 7),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 7),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 7),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 8),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 8),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 8),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 8),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 9),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 9),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 9),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 9),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 10),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 10),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 10),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 10),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 11),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 11),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 11),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 11),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 12),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 12),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 12),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 12),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 13),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 13),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 13),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 13)
        ], [
        new Coin(1),
        new Coin(2),
        new Coin(3),
        new Coin(4),
        new Coin(5),
        new Coin(6),
        new Coin(7),
        new Coin(8),
        new Coin(9),
        new Coin(10)
    ], [
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 0),
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 1),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 2),
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 3),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 4),
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 5),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 6),
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 7),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 8),
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 9),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 10),
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 11),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 12)
        
    ]);
}



