class ThrowBottle extends MovableObject {
    onCollisionCourse = false;
    IMAGES_THROWINGBOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    IMAGES_BOTTLESPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    constructor(x, y) {
        super();
        //this.loadImages(this.IMAGES_BOTTLESPLASH);
        this.loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png')
        //this.loadImages(this.IMAGES_THROWINGBOTTLE);
        this.x = x;
        this.y = y;
        this.y_Rect = y;
        this.x_Rect = x;
        this.height = 60;
        this.width = 50;
        this.width_Rect = this.width;
        this.height_Rect = this.height;
        this.throw();
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
            this.x_Rect +=10;
        }, 10);
    }
}