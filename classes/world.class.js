class World {
    character = new Character();
    statusbar = new Statusbar(
        [
            new EmptyStatusBar(0),
            new EmptyStatusBar(40),
            new EmptyStatusBar(80)
        ],
        [
            new HealthBar()
        ],
        [
            new CoinBar()
        ],
        [
            new SalsaBar()
        ],
        [
            new HealthEndBossBar()
        ]
    );

    camera_x = 0;

    level = level1;
    canvas;
    ctx;
    keyboadasdwrd;
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottle);
        this.ctx.translate(-this.camera_x, 0);
        this.addObjectsToMap(this.statusbar.emptyStatusBar);
        this.addObjectsToMap(this.statusbar.healthStatusBar);
        //this.addObjectsToMap(this.statusbar.coinStatusBar);
        //this.addObjectsToMap(this.statusbar.salsaStatusBar);
        //this.addObjectsToMap(this.statusbar.healthEndBossStatusBar);
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {

                    this.character.hit();
                    console.log('Collidiert', this.character.energy);
                }
            });
        }, 1000 / 25)
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        });
    }



    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.drawFrame(this.ctx);
        mo.draw(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
        mo.x_Rect = (mo.x_Rect - mo.width_Rect + 10) * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        mo.x_Rect = (mo.x_Rect - mo.width_Rect + 10) * -1;
        this.ctx.restore();
    }
}