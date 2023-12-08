class Character extends MovableObject {
    x = 120;
    y = 200;
    height = 230;
    width = 100;
    speed = 10;
    speedY = 0;
    acceleration = 2.5;
    health = 100;
    coin = 12;
    salsa = 6;
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ]
    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ]
    world;
    walking_sound = new Audio('audio/going-on-a-forest-road-gravel-and-grass-6404.mp3');

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.animate();
        this.applyGravity();
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGrove() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
            if (!this.isAboveGrove()) {
                this.y = 200;
            }
        }, 1000 / 50);
    }

    isAboveGrove() {
        return this.y < 200;
    }

    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            this.walking_sound.volume = 0.1;
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.walking_sound.play();
            }
            if (this.world.keyboard.SPACE && !this.isAboveGrove()) {
                this.speedY = 27;
            }

            this.world.camera_x = -this.x + 120;


        }, 1000 / 60);
        setInterval(() => {
            if (this.isAboveGrove()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x || this.world.keyboard.LEFT && this.x > 0) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 50);

    }

    animationLeft() {



    }
    animationRight() {


    }



    jump() {

    }

}