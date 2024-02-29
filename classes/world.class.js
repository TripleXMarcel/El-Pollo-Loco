class World {
    character = new Character();
    statusbar = new Statusbar(
        [
            new EmptyStatusBar(30, 30),
            new EmptyStatusBar(70, 30),
            new EmptyStatusBar(110, 30)
        ],
        [
            new IconStatusBar('img/7_statusbars/3_icons/icon_salsa_bottle.png', 10, 19, 50, 18),
            new IconStatusBar('img/7_statusbars/3_icons/icon_health.png', 65, 10, 32, 40),
            new IconStatusBar('img/7_statusbars/3_icons/icon_coin.png', 105, 10, 32, 40)
        ]
    );
    healthBar = new HealthBar();
    coinBar = new CoinBar();
    salsaBar = new SalsaBar();
    gameOverScreen = new GameOverScreen();
    throwableObjects = [];
    levels = [level1, level2];
    camera_x = 0;
    intervalIds;
    interval;
    level = level1;
    canvas;
    ctx;
    gameOn;
    dead;
    constructor(canvas) {
        this.gameOn = true;
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.unpause();
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.level.game = true;
        this.dead = false;
    }

    setWorld() {
        this.character.world = this;
    }

    pause() {
        this.intervalIds = [this.level.clouds, this.level.enemies, this.character];
        for (var i = 0; i < this.intervalIds.length; i++) {
            if (this.intervalIds[i].length) {
                for (let j = 0; j < this.intervalIds[i].length; j++) {
                    clearInterval(this.intervalIds[i][j].interval);
                    clearInterval(this.intervalIds[i][j].interval2);
                    clearInterval(this.intervalIds[i][j].interval3);
                }
            } else {
                clearInterval(this.intervalIds[i].interval);
                clearInterval(this.intervalIds[i].interval2);
                clearInterval(this.intervalIds[i].interval3)
            }
            clearInterval(this.interval);
        }
        this.muteEnemie();
    }

    unpause() {
        this.intervalIds = [this.level.clouds, this.level.enemies, this.character];
        for (var i = 0; i < this.intervalIds.length; i++) {
            if (this.intervalIds[i].length) {
                for (let j = 0; j < this.intervalIds[i].length; j++) {
                    this.intervalIds[i][j].animate();
                }
            } else {
                this.intervalIds[i].animate();
            }
        }
        this.checkCollisions();
    }

    characterDead() {
        setTimeout(() => {
            this.pause();
            this.dead = true;
            this.gameOver();
        }, 500);
        setTimeout(() => {
            closeGame();
        }, 5000);
    }

    gameOver() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.gameOverScreen);
        let self = this;
        requestAnimationFrame(function () {
            self.gameOver();
        });
        
    }

    closeGame() {
        this.gameOn = false;
        this.pause();
    }

    draw() {
        if (!this.gameOn) {
            return;
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottle);
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);
        this.addObjectsToMap(this.statusbar.emptyStatusBar);
        this.addToMap(this.healthBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.salsaBar);
        this.addObjectsToMap(this.statusbar.iconStatusBar);



        //this.addObjectsToMap(this.statusbar.healthEndBossStatusBar);
        this.ctx.translate(this.camera_x, 0);
        if (!this.dead) {
            this.addToMap(this.character);
        }

        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    checkCollisions() {
        this.interval = setInterval(() => {
            this.collidingEnemy();
            this.collidingCollectable();
            this.soundEnemie();
            this.throw();
        }, 1000 / 60)

    }

    throw(){
        if (this.keyboard.THROW) {
            let bottle = new ThrowBottle(this.character.x, this.character.y);
            this.throwableObjects.push(bottle);
            this.keyboard.THROW=false;
        }
    }

    soundEnemie() {
        for (let i = 0; i < this.level.enemies.length; i++) {
            this.level.enemies[i].range(this.character.x)
        }
    }

    muteEnemie() {
        for (let i = 0; i < this.level.enemies.length; i++) {
            this.level.enemies[i].muteSound()
        }
    }

    collidingEnemy() {
        this.level.enemies.forEach((enemy, i) => {
            if (this.character.isCollidingTop(enemy)) {
                enemy.kill(i, this.level);
                this.character.speedY = 25;
            } else
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.healthBar.loadEnergy(this.character.energy);
                }
        });
    }

    collidingCollectable() {
        this.level.coins.forEach((coin, i) => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoin(i, this.level);
                this.coinBar.loadCoins(this.character.coin, this.level.coins.length);
            }
        });
        this.level.bottle.forEach((salsa, i) => {
            if (this.character.isColliding(salsa)) {
                this.character.collectSalsa(i, this.level);
                this.salsaBar.loadSalsa(this.character.salsa, this.level.bottle.length);
            }
        });
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
        //mo.drawFrame(this.ctx);
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