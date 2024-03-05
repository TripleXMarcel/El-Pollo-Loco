class Endboss extends MovableObject {
    y = 50;
    height = 400;
    width = 400;
    interval;
    x_Rect;
    y_Rect = 50;
    height_Rect = 400;
    width_Rect = 400;
    distance;
    i = 0;
    bossRange = false;

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


    constructor() {
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_ATTACK);
        this.x = 8200;
        this.x_Rect = this.x;
    }

    animate() {
        this.interval = setInterval(() => {
            if (this.bossRange === false) {
                this.bossInRange();
                clearInterval(this.interval);
            } else if (gamePause === false && this.energy > 0) {
                this.moveLeft();
                this.otherDirection = false;
                //this.playAnimation(this.IMAGES_WALK);
            } else if (gamePause === false && this.isHurt() && this.energy > 0) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.energy <= 0) {
                this.kill();
                clearInterval(this.interval);
            }
        }, 200);
    }

    bossInRange() {
        this.distance = this.x - world.character.x;
        console.log(this.distance);
        if (this.distance < 500) {
            this.alertAnimation();
        } else {
            this.animate();
        }
    }

    muteSound() {
        return;
    }

    range() {
        return;
    }

    enemieHit() {
        this.hit();
    }

    async alertAnimation() {
        for (this.i = 0; this.i < this.IMAGES_ALERT.length; this.i++) {
            await new Promise(resolve => setTimeout(resolve, 400));
            const element = this.IMAGES_ALERT[this.i];
            this.loadImage(element);
        }
        this.bossRange = true;
        this.animate();
    }

    killAnimation() {
        this.loadImage('img/4_enemie_boss_chicken/5_dead/G24.png');

        setTimeout(() => {
            this.loadImage('img/4_enemie_boss_chicken/5_dead/G26.png')
        }, 200);
    }

    kill() {
        this.i = 0;
        this.killAnimation();
        this.energy = 0;
        this.muteSound();
        this.y_Rect = -10000;
        setTimeout(() => {
            world.endBossDead();
        }, 2000)
    }
}