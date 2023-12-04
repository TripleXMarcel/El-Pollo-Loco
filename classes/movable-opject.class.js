class MovableObject {
    imageCache = [];
    img;
    currentImage = 0;
    speed = 0.1;
    otherDirection = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });


    }

    moveRight() {
        x++;
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);

    }
    playAnimation(images){
        let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = images[i];
                this.img = this.imageCache[path];
                this.currentImage++;
    }
}