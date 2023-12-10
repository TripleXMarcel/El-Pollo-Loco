class Cloud extends MovableObject {
    y= 20;
    width = 500;
    height = 200;
    speed = 0.2;
    

    constructor(url, x) {
        super().loadImage(url);
        this.x = (719 * x) + Math.random() * 500;
        this.animate();
    }

    animate(){
        this.speed = this.speed + Math.random() * 0.2;
        setInterval(() => {
            this.moveLeft();
            this.otherDirection = false;
        }, 1000 / 60);
    }
}