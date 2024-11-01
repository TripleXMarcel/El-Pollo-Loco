class Character extends MovableObject {
    x = 120;
    y = 200;
    height = 230;
    width = 100;
    y_Rect = 290;
    x_Rect = 140;
    height_Rect = 130;
    width_Rect = 50;
    speed = 10;
    speedY = 0;
    onCollisionCourse = false;
    idleLong = false;
    idleTimer = 0;
    interval;
    interval2;
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];
    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'
    ];
    IMAGES_IDLE_LONG = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png',
    ];
    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];
    IMAGES_JUMPING_UP = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png'
    ];
    IMAGES_JUMPING_DOWN = [
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];
    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];
    world;
    walking_sound = new Audio('audio/going-on-a-forest-road-gravel-and-grass-6404.mp3');
    hittingSound = new Audio('audio/hit.mp3');

    /**
     * Creates an instance of Character.
     */
    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING_UP);
        this.loadImages(this.IMAGES_JUMPING_DOWN);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_IDLE_LONG);
        this.applyGravity();
    }

    /**
     * Adjusts the volume of the character's walking sound.
     */
    volume() {
        if (sound === true) {
            this.walking_sound.volume = ((playerVolume / 100) * masterVolume) / 100;
            this.hittingSound.volume = ((playerVolume / 100) * masterVolume) / 100;
        } else {
            this.walking_sound.volume = 0;
            this.hittingSound.volume = 0;
        }
    }

    /**
     * Initiates the character's movement and animation.
     */
    animate() {
        this.interval = setInterval(() => {
            this.moveCharacter();
        }, 1000 / 60);
        this.interval2 = setInterval(() => {
            this.animationCharacter();
        }, 100);
    }

    /**
     * Moves the character based on keyboard input.
     */
    moveCharacter() {
        this.volume();
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x && gamePause === false && this.energy != 0) {
            this.moveRight();
            this.walking_sound.play();
        }
        else if (this.world.keyboard.LEFT && this.x > 0 && gamePause === false && this.energy != 0) {
            this.moveLeft();
            this.walking_sound.play();
        }
        else { this.walking_sound.pause(); }
        if (this.world.keyboard.SPACE && !this.isAboveGrove() && gamePause === false) {
            this.speedY = 25;
        }
        this.world.camera_x = -this.x + 120;
    }

    /**
     * Animates the character based on its state.
     */
    animationCharacter() {
        if (this.isDead() && gamePause === false) {
            this.playAnimation(this.IMAGES_DEAD);
            this.world.characterDead();
        } else if (this.isHurt() && gamePause === false) {
            this.characterHurt();
        } else if (this.isAboveGrove() && this.speedY > 0 && gamePause === false) {
            this.playAnimation(this.IMAGES_JUMPING_UP);
        } else if (this.isAboveGrove() && this.speedY < 0 && gamePause === false) {
            this.playAnimation(this.IMAGES_JUMPING_DOWN);
        } else if ((this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x || this.world.keyboard.LEFT && this.x > 0) && gamePause === false) {
            this.playAnimation(this.IMAGES_WALKING);
            this.idleTimer = 0;
        } else if (gamePause === false) {
            this.idle();
        }
    }

    /**
     * Switch between differant Idleanimations.
     */
    idle() {
        if (this.idleTimer < 30) {
            this.playAnimation(this.IMAGES_IDLE);
            this.idleTimer++;
        }
        else {
            this.playAnimation(this.IMAGES_IDLE_LONG);
        }

    }

    characterHurt() {
        this.hittingSound.play();
        this.playAnimation(this.IMAGES_HURT);
    }
}