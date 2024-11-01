class Endboss extends MovableObject {
    y = 50;
    x;
    height = 400;
    width = 400;
    interval;
    x_Rect;
    y_Rect = 120;
    height_Rect = 340;
    width_Rect = 340;
    distance;
    energy = 8;
    speed = 4;
    i = 0;
    maxVolume = 0.04
    music_on = false;
    bossRange = false;
    boss_sound = new Audio('audio/chicken-sounds-farm-background-sounds-ambient-sounds-143091.mp3');


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

    /**
    * Creates an instance of Endboss.
    */
    constructor() {
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_ATTACK);
        this.x = 8200;
        this.x_Rect = this.x + 30;
    }

    /**
    * Adjusts the volume of the boss sound based on game settings.
    */
    bossVolume() {
        if (sound === true && gamePause === false) {
            this.boss_sound.volume = (((chickenVolume / 100) * masterVolume) / 100);
        } else {
            this.boss_sound.volume = 0;
        }
    }

    /**
     * Animates the end boss behavior.
     */
    animate() {
        this.interval = setInterval(() => {
            this.bossVolume();
            if (this.bossRange === false) {
                this.bossInRange();
            } else if (gamePause === false && this.isHurt() && this.energy > 0) { this.bossHurt(); }
            else if (gamePause === false && this.bossHitRange() == true < 10 && this.energy > 0) { this.bossAttack(); }
            else if (gamePause === false && this.energy > 0) { this.bossMove(); }
            else if (this.energy <= 0) { this.bossDead(); }
        }, 100);
    }

    /**
     * Moves the end boss.
     */
    bossMove() {
        this.moveLeft();
        this.otherDirection = false;
        this.playAnimation(this.IMAGES_WALK);
    }

    /**
     * Makes the end boss perform an attack.
     */
    bossAttack() {
        this.moveLeft();
        this.otherDirection = false;
        this.playAnimation(this.IMAGES_ATTACK);
    }

    /**
     * Makes the end boss react to being hurt.
     */
    bossHurt() {
        this.playAnimation(this.IMAGES_HURT);
        endBossHealth = this.energy;
        this.speed += 2;
    }

    /**
     * Handles the end boss's death.
     */
    bossDead() {
        endBossHealth = this.energy;
        this.kill();
        clearInterval(this.interval);
    }

    /**
     * Checks if the player character is within range of the end boss.
     */
    bossInRange() {
        this.distance = this.x - world.character.x;
        if (this.distance < 500) {
            clearInterval(this.interval);
            gamePause = true;
            this.alertAnimation();
        }
    }

    /**
     * Checks if the player character is within the end boss's hit range.
     */
    bossHitRange() {
        this.distance = this.x - world.character.x;
        if (this.distance < 100) {
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * Mutes the end boss's sound.
     */
    muteSound() {
        return;
    }

    /**
     * Plays the end boss's range sound.
     */
    range() {
        return;
    }

    /**
     * Handles the end boss being hit by the player character.
     */
    enemieHit() {
        this.hit();
    }

    /**
     * Performs the alert animation when the player character enters the end boss's range.
     */
    async alertAnimation() {
        this.boss_sound.volume = 0.04;
        this.boss_sound.play();
        this.music_on = true;
        for (this.i = 0; this.i < this.IMAGES_ALERT.length; this.i++) {
            await new Promise(resolve => setTimeout(resolve, 400));
            const element = this.IMAGES_ALERT[this.i];
            this.loadImage(element);
        }
        world.statusbar.iconStatusBar.push(new IconStatusBar('img/7_statusbars/3_icons/icon_health_endboss.png', 65, 660, 32, 40));
        this.bossRange = true;
        gamePause = false;
        endBossHealth = this.energy;
        this.animate();
    }

    /**
     * Plays the end boss's kill animation.
     */
    killAnimation() {
        this.loadImage('img/4_enemie_boss_chicken/5_dead/G24.png');
        setTimeout(() => {
            this.loadImage('img/4_enemie_boss_chicken/5_dead/G26.png')
        }, 200);
    }

    /**
     * Plays the end boss's kill animation and handles its death.
     */
    kill() {
        this.boss_sound.pause();
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