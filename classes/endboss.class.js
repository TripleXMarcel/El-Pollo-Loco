class Endboss extends MovableObject {
    y = 50;
    height = 400;
    width = 400;
    healthEndBoss = 100;
    interval;
    x_Rect;
    y_Rect = 50;
    height_Rect = 400;
    width_Rect = 400;


    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];
    IMAGES_WALK = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];
    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];
    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];
    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ]

    constructor() {
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_DEAD);

        this.x = 8200;
        this.x_Rect = this.x;
    }

    animate() {
        this.interval = setInterval(() => {
            if (gamePause === false && this.healthEndBoss > 0) {
                this.playAnimation(this.IMAGES_ALERT);
            } else if (this.healthEndBoss == 0) {
                this.playAnimation(this.IMAGES_DEAD);
            }

        }, 200);
    }

    muteSound() {
        return;
    }

    range() {
        return;
    }

    enemieHit() {
        if (this.healthEndBoss > 0) {
            this.healthEndBoss -= 1;
            console.log(this.healthEndBoss);
        } else {
            this.kill();
        }

    }

    kill() {
        this.healthEndBoss = 0;
        this.muteSound();

        this.y_Rect = -10000;
        setTimeout(() => {
            this.y = 9999;
        }, 800);
    }
}