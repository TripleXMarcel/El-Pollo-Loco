class Cloud extends MovableObject {
    y= 20;
    width = 500;
    height = 200;
    

    constructor(url, x) {
        super().loadImage(url);

        this.x = (719 * x) + Math.random() * 500;
        this.animate();
    }

    animate(){
        this.moveLeft();
    }
}