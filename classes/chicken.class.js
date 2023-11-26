class Chicken extends MovableObject {
    y = 380;
    height = 40;
    width = 40;
    speed = 0.4;
    IAMGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ]
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.animate();
        this.loadImages(this.IAMGES_WALKING);
        this.x = 200 + Math.random() * 500;
    }
    



    animate() {
        setInterval(() => {
            
            let i = this.currentImage % this.IAMGES_WALKING.length;
            let path = this.IAMGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
        this.speed = this.speed + Math.random() * 0.8;
        this.moveLeft();
    }

    
}