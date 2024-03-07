class MovableObject extends DrawableObject {
    speed = 0.1;
    otherDirection = false;
    energy = 100;
    coin = 0;
    salsa = 0;
    lastHit = 0;
    dead = false;
    acceleration = 2.5;
    intervalGravity;

    /**
    * Applies gravity to the movable object.
    */
    applyGravity() {
        this.intervalGravity = setInterval(() => {
            if ((this.isAboveGrove() || this.speedY > 0) && gamePause === false) {
                this.y -= this.speedY;
                this.y_Rect -= this.speedY;
                this.speedY -= this.acceleration;
            }
            if (this.speedY <= 0 && this.isAboveGrove() && gamePause === false) {
                this.onCollisionCourse = true;
            }
            if (!this.isAboveGrove() && gamePause === false) {
                this.y = 200;
                this.y_Rect = 290;
                this.onCollisionCourse = false;
            }
        }, 1000 / 60);
    }

    /**
     * Checks if the movable object is above the ground.
     * @returns {boolean} True if the object is above the ground, otherwise false.
     */
    isAboveGrove() {
        if (this instanceof ThrowBottle === true) {
            return true;
        } else {
            return this.y < 200;
        }

    }

    /**
     * Moves the movable object to the right.
     */
    moveRight() {
        this.x += this.speed;
        this.x_Rect += this.speed;
        this.x_HitBox += this.speed;
        this.otherDirection = false;
    }

    /**
     * Moves the movable object to the left.
     */
    moveLeft() {
        this.x -= this.speed;
        this.x_Rect -= this.speed;
        this.x_HitBox -= this.speed;
        this.otherDirection = true;

    }

    /**
     * Plays an animation for the movable object.
     * @param {string[]} images - An array of image paths for the animation.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Checks if the movable object is colliding with another object from the top.
     * @param {DrawableObject} obj - The object to check collision with.
     * @returns {boolean} True if colliding from the top, otherwise false.
     */
    isCollidingTop(obj) {
        return (this.x_Rect + this.width_Rect) >= obj.x_Rect && this.x_Rect <= (obj.x_Rect + obj.width_Rect) &&
            (this.y_Rect + this.height_Rect) >= obj.y_Rect &&
            (this.y_Rect) <= (obj.y_Rect + obj.height_Rect) && this.onCollisionCourse;
    }

    /**
     * Checks if the movable object is colliding with another object.
     * @param {DrawableObject} obj - The object to check collision with.
     * @returns {boolean} True if colliding, otherwise false.
     */
    isColliding(obj) {
        return (this.x_Rect + this.width_Rect) >= obj.x_Rect && this.x_Rect <= (obj.x_Rect + obj.width_Rect) &&
            (this.y_Rect + this.height_Rect) >= obj.y_Rect &&
            (this.y_Rect) <= (obj.y_Rect + obj.height_Rect) && !this.onCollisionCourse;
    }

    /**
     * Decreases the energy of the movable object when hit.
     */
    hit() {
        this.energy -= 1;
        if (this.energy < 0) {
            this.energy = 0;
        }
        else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Collects a coin from the level.
     * @param {number} i - The index of the coin to collect.
     * @param {object} level - The level object containing coins.
     */
    collectCoin(i, level) {
        level.coins.splice(i, 1);
        this.coin++;
    }

    /**
     * Collects salsa from the level.
     * @param {number} j - The index of the salsa bottle to collect.
     * @param {object} level - The level object containing salsa bottles.
     */
    collectSalsa(j, level) {
        level.bottle.splice(j, 1);
        this.salsa++;
    }

    /**
     * Checks if the movable object was hurt recently.
     * @returns {boolean} True if hurt recently, otherwise false.
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        return timepassed < 500;
    }

    /**
     * Checks if the movable object is dead.
     * @returns {boolean} True if dead, otherwise false.
     */
    isDead() {
        return this.energy == 0;
    }
}