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
    maxVolume=0.04;
    volume=0;
    interval;
    interval2;
    enemieRange;
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



    animate() {
        this.interval = setInterval(() => {
            if (this.energy === 1) {
                this.volume = (((chickenVolume / 100 / this.enemieRange)) * (masterVolume));
                this.chicken_sound.volume = Math.min(this.volume, this.maxVolume);
                console.log(this.chicken_sound.volume);
                this.chicken_sound.play();
                this.playAnimation(this.IMAGES_WALK);
            }

        }, 100);
        this.speed = this.speed + Math.random() * 0.8;
        this.interval2 = setInterval(() => {
            if (this.energy === 1) {
                this.moveLeft();
                this.otherDirection = false;
            }
        }, 1000 / 60);
    }

    range(characterX) {
        this.enemieRange = characterX - this.x + 1;
        if (this.enemieRange < 0) {
            this.enemieRange = this.enemieRange * -1;
        }
    }

    muteSound(){
        this.chicken_sound.pause();
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