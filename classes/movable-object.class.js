class MovableObject extends DrawableObject {
    
    
    speed = 0.1;
    otherDirection = false;
    energy = 100;
    lastHit = 0;

    

   
    moveRight() {
        this.x += this.speed;
        this.x_Rect += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
        this.x_Rect -= this.speed;
        this.otherDirection = true;

    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    isColliding(mo) {
        return this.x_Rect + this.width_Rect > mo.x_Rect &&
            this.y_Rect + this.height_Rect > mo.y_Rect &&
            this.x_Rect < mo.x_Rect &&
            this.y_Rect < mo.y_Rect + mo.height_Rect;

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
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        return timepassed < 500;
    }
    isDead() {
        return this.energy == 0;
    }
}