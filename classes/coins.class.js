class Coin extends MovableObject {

    y = 200;
    width = 80;
    height = 80;

    IMAGES = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];

    constructor(x) {
        super().loadImage(this.IMAGES[0]);
        this.animate();
        this.loadImages(this.IMAGES);
        this.x = (719 * x) + Math.random() * 500;
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 200);
    }
}