class Character extends MovableObject {
    x = 120;
    y = 200;
    height = 230;
    width = 100;
    speed=10;
    IAMGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ]
    currentImage = 0;
    world;

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IAMGES_WALKING);
        this.animate();
    }

    animate() {
        if (this.world.keyboard.LEFT) {
            let i = this.currentImage % this.IAMGES_WALKING.length;
            let path = this.IAMGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }
        if (this.world.keyboard.RIGHT) {
            this.x += this.speed;
            let i = this.currentImage % this.IAMGES_WALKING.length;
            let path = this.IAMGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }
            
        
    }

    animationLeft() {
        
        
        
    }
    animationRight() {

        
    }



    jump() {

    }

}