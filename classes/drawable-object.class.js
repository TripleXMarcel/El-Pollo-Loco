class DrawableObject {
    imageCache = [];
    img;
    currentImage = 0;
    x = 120;
    y = 280;
    height = 200;
    width = 200;
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

    


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    drawFrame(ctx) {
        if (this instanceof ThrowBottle || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x_Rect, this.y_Rect, this.width_Rect, this.height_Rect);
            ctx.stroke();
        }
    }
}