class Chicken extends MovableObject {
    y = 380;
    height = 40;
    width = 40;
    x_Rect;
    y_Rect = 380;
    height_Rect = 40;
    width_Rect = 40;
    speed = 0.4;
    energy = 1;
    maxVolume = 0.04;
    volume = 0;
    interval;
    interval2;
    enemieRange;
    intervalspeed1 = 100;
    intervalspeed2 = 1000 / 60;
    intervalspeed3 = 1000;
    IMAGES_WALK = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    IMAGE_DEAD = 'img/3_enemies_chicken/chicken_normal/2_dead/dead.png';
    chicken_sound = new Audio('/audio/chicken-sounds-farm-background-sounds-ambient-sounds-143091.mp3');

    constructor(x) {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALK);
        this.x = (719 * x) + Math.random() * 500;
        this.x_Rect = this.x;
    }

    chickenVolume() {
        if (sound === true) {
            this.volume = (((chickenVolume / 100 / this.enemieRange)) * (masterVolume));
            this.chicken_sound.volume = Math.min(this.volume, this.maxVolume);
        } else {
            this.chicken_sound.volume = 0;
        }
    }


    animate() {
        this.interval = setInterval(() => {
            this.chickenWalkAnimation();
        }, this.intervalspeed1);
        this.speed = this.speed + Math.random() * 0.8;
        this.interval2 = setInterval(() => {
            this.chickenMove();
        }, this.intervalspeed2);
        this.interval3 = setInterval(() => {
            this.chickenSoundVolume();
        }, this.intervalspeed3);
        this.interval4 = setInterval(() => {
            this.chickenSound();
        }, this.intervalspeed4);
    }

    chickenWalkAnimation() {
        if (this.energy === 1 && gamePause === false) {
            this.playAnimation(this.IMAGES_WALK);
        }
    }

    chickenMove() {
        if (this.energy === 1 && gamePause === false) {
            this.moveLeft();
            this.otherDirection = false;
        }
    }

    chickenSound() {
        if (this.energy === 1 && gamePause === true) {
            this.chickenVolume();
            this.chicken_sound.pause();
        }
    }

    chickenSoundVolume() {
        if (this.energy === 1 && gamePause === false) {
            if (this.enemieRange < 1000) {
                this.chickenVolume();
                this.chicken_sound.play();
            }
        }
    }

    range(characterX) {
        this.enemieRange = characterX - this.x + 1;
        if (this.enemieRange < 0) {
            this.enemieRange = this.enemieRange * -1;
        }
    }

    muteSound() {
        this.chicken_sound.pause();
    }

    enemieHit() {
        this.kill();
    }

    kill() {
        this.energy = 0;
        this.muteSound();
        this.loadImage(this.IMAGE_DEAD);
        this.y_Rect = -100;
        setTimeout(() => {
            this.y = 9999;
        }, 1000);
    }
}