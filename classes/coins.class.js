class Coin extends MovableObject {

    y = 200;
    width = 80;
    height = 80;
    y_Rect = 220;
    width_Rect = 40;
    height_Rect = 40;

    IMAGES = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];

    constructor(x) {
        super().loadImage(this.IMAGES[0]);
        this.animate();
        this.loadImages(this.IMAGES);
        this.x = (719 * x) + Math.random() * 500;
        this.x_Rect = this.x+20;
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 200);
    }
}