class MovableObject extends DrawableObject {


    speed = 0.1;
    otherDirection = false;
    energy = 100;
    coin = 0;
    salsa = 0;
    lastHit = 0;
    dead=false;




    moveRight() {
        this.x += this.speed;
        this.x_Rect += this.speed;
        this.x_HitBox += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
        this.x_Rect -= this.speed;
        this.x_HitBox -= this.speed;
        this.otherDirection = true;

    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    isCollidingTop(obj) {
        return (this.x_Rect + this.width_Rect) >= obj.x_Rect && this.x_Rect <= (obj.x_Rect + obj.width_Rect) &&
            (this.y_Rect + this.height_Rect) >= obj.y_Rect &&
            (this.y_Rect) <= (obj.y_Rect + obj.height_Rect) && this.onCollisionCourse;
    }
    isColliding(obj) {
        return (this.x_Rect + this.width_Rect) >= obj.x_Rect && this.x_Rect <= (obj.x_Rect + obj.width_Rect) &&
            (this.y_Rect + this.height_Rect) >= obj.y_Rect &&
            (this.y_Rect) <= (obj.y_Rect + obj.height_Rect) && !this.onCollisionCourse;
    }
    hit() {
        this.energy -= 1;
        if (this.energy < 0) {
            this.energy = 0;
        }
        else {
            this.lastHit = new Date().getTime();
        }
    }
    kill(level) {
        level.enemies.splice(i, 1);
    }
    collectCoin(i, level) {
        level.coins.splice(i, 1);
        this.coin++;
    }
    collectSalsa(j, level) {
        level.bottle.splice(j, 1);
        this.salsa++;
    }
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        return timepassed < 500;
    }
    isDead() {
        return this.energy == 0;
    }
}