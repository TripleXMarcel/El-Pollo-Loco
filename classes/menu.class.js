class Menu {
    menu = menu1;

    /**
     * Creates an instance of Menu.
     * @param {HTMLCanvasElement} canvas - The canvas element to render the menu on.
     */
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
    }

    /**
     * Loads an image.
     * @param {string} path - The path to the image.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Draws the menu on the canvas.
     */
    draw() {
        this.addObjectsToMap(this.menu.backgroundObjects);
        this.addObjectsToMap(this.menu.clouds);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * Adds objects to the map for rendering.
     * @param {Array} objects - The objects to add to the map.
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        });
    }

    /**
     * Adds an object to the map for rendering.
     * @param {DrawableObject} mo - The object to add to the map.
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }
}
