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
    interval;

    /**
     * Creates an instance of ThrowBottle.
     * @param {number} x - The x-coordinate of the bottle's initial position.
     * @param {number} y - The y-coordinate of the bottle's initial position.
     */
    constructor(x, y) {
        super();
        this.loadImages(this.IMAGES_BOTTLESPLASH);
        this.loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png')
        this.loadImages(this.IMAGES_THROWINGBOTTLE);
        this.x = x;
        this.y = y;
        this.y_Rect = y;
        this.x_Rect = x;
        this.height = 60;
        this.width = 50;
        this.width_Rect = 50;
        this.height_Rect = 60;
        this.throw();
    }

    /**
     * Throws the bottle, initiating the throwing animation and gravity effect.
     */
    throw() {
        this.speedY = 30;
        this.applyGravity();
        this.interval = setInterval(() => {
            this.x += 10;
            this.x_Rect += 10;
            this.playAnimation(this.IMAGES_THROWINGBOTTLE);
            if (this.y >= 370) {
                this.splashBottle();
            }
        }, 10);
    }

    /**
     * Plays the bottle splash animation upon collision with the ground.
     */
    async splashBottle() {
        clearInterval(this.interval);
        clearInterval(this.intervalGravity);
        this.y_Rect = 9999;
        for (this.i = 0; this.i < this.IMAGES_BOTTLESPLASH.length; this.i++) {
            await new Promise(resolve => setTimeout(resolve, 100));
            const element = this.IMAGES_BOTTLESPLASH[this.i];
            this.loadImage(element);
        };
        this.y = 9999;
    }
}