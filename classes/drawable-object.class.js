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
        if (this instanceof Character || this instanceof FrontObject) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x_Rect_Top, this.y_Rect_Top, this.width_Rect_Top, this.height_Rect_Top);
            ctx.stroke();
        }
    }
}