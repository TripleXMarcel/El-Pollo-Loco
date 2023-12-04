class Chicken extends MovableObject {
    y = 380;
    height = 40;
    width = 40;
    speed = 0.4;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    chicken_sound = new Audio('/audio/chicken-sounds-farm-background-sounds-ambient-sounds-143091.mp3');
    
    constructor(x) {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.animate();
        this.loadImages(this.IMAGES_WALKING);
        this.x = (719 * x) + Math.random() * 200;
    }
    



    animate() {
        setInterval(() => {
            this.chicken_sound.volume = 0.0003;
            this.chicken_sound.play();
            this.playAnimation(this.IMAGES_WALKING);
        }, 100);
        this.speed = this.speed + Math.random() * 0.8;
        this.moveLeft();
    }

    
}