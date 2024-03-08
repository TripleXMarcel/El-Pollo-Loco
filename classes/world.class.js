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
    healthEndBossBar = new HealthEndBossBar();
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
    colectableCoins;
    colectableSalsa;
    endSound = new Audio('audio/endmusic.mp3');



    /**
     * Creates an instance of World.
     * @param {HTMLCanvasElement} canvas - The canvas element.
     */
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

    /**
     * Sets up the world by initializing various properties and starting the game loop.
     */
    setWorld() {
        this.character.world = this;
        this.colectableCoins = this.level.bottle.length;
        this.colectableSalsa = this.level.bottle.length;
    }

    /**
     * Pauses the game by stopping all game intervals.
     */
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

    /**
     * Resumes the game by restarting all game intervals.
     */
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

    /**
     * Handles character death by pausing the game and displaying the game over screen.
     */
    characterDead() {
        this.volumeSound();
        setTimeout(() => {
            sound = false;
            this.endSound.play();
            this.pause();
            this.dead = true;
            this.endScreen();
        }, 500);
        setTimeout(() => {
            closeGame();
        }, 10000);
    }

    /**
    * Adjusts the volume of the end sound based on game settings.
    */
    volumeSound() {
        if (sound === true) {
            this.endSound.volume = ((musicVolume / 500) * masterVolume) / 100;
        } else {
            this.endSound.volume = 0;
        }
    }

    /**
     * Handles end boss death by closing the game.
     */
    endBossDead() {
        closeGame();
    }

    /**
     * Renders the end screen, either game over or victory screen.
     */
    endScreen() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.level.backgroundObjects);
        if (this.dead === true) {
            this.addToMap(this.gameOverScreen);
        }
        let self = this;
        requestAnimationFrame(function () {
            self.endScreen();
        });

    }

    /**
     * Closes the game by stopping all game activity.
     */
    closeGame() {
        this.gameOn = false;
        this.pause();
    }

    /**
     * Draws the game world, including objects and status bars.
     */
    draw() {
        if (!this.gameOn) { return; }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.drawObjectElements()
        this.ctx.translate(-this.camera_x, 0);
        this.drawBarElements();
        this.ctx.translate(this.camera_x, 0);
        if (!this.dead) {
            this.addToMap(this.character);
        }
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () { self.draw(); });
    }

    /**
     * Draws all object elements in the game world.
     */

    drawObjectElements() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottle);
        this.addObjectsToMap(this.throwableObjects);
    }

    /**
     * Draws all status bar elements in the game world.
     */
    drawBarElements() {
        this.addObjectsToMap(this.statusbar.emptyStatusBar);
        this.addToMap(this.healthBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.salsaBar);
        this.addToMap(this.healthEndBossBar);
        this.addObjectsToMap(this.statusbar.iconStatusBar);

    }

    /**
     * Checks for collisions between game objects.
     */
    checkCollisions() {
        this.interval = setInterval(() => {
            this.collidingEnemy();
            this.collidingCollectable();
            this.soundEnemie();
            this.throw();
            this.collidingThrowableObject();
        }, 10)

    }

    /**
     * Throws a bottle if the character has salsa available.
     */
    throw() {
        if (this.keyboard.THROW && this.character.salsa != 0) {
            let bottle = new ThrowBottle(this.character.x, this.character.y);
            this.throwableObjects.push(bottle);
            this.keyboard.THROW = false;
            this.character.salsa -= 0.5;
            this.salsaBar.loadSalsa(this.character.salsa, this.level.bottle.length);
        }
    }

    /**
    * Plays enemy sounds based on character proximity.
    */
    soundEnemie() {
        for (let i = 0; i < this.level.enemies.length; i++) {
            this.level.enemies[i].range(this.character.x)
        }
    }

    /**
     * Mutes all enemy sounds.
     */
    muteEnemie() {
        for (let i = 0; i < this.level.enemies.length; i++) {
            this.level.enemies[i].muteSound();
        }
    }

    /**
     * Handles collisions between the character and enemies.
     */
    collidingEnemy() {
        this.level.enemies.forEach((enemy, i) => {
            if (this.character.isCollidingTop(enemy)) {
                enemy.kill();
                this.character.speedY = 25;
            } else
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.healthBar.loadEnergy(this.character.energy);
                }
        });
    }

    /**
     * Handles collisions between throwable objects and enemies.
     */
    collidingThrowableObject() {
        this.level.enemies.forEach(enemy => {
            for (let j = 0; j < this.throwableObjects.length; j++) {
                const element = this.throwableObjects[j];
                if (element.isCollidingTop(enemy)) {
                    enemy.enemieHit();
                    element.splashBottle();
                }
            }
        });
    }

    /**
     * Handles collisions between the character and collectable objects.
     */
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

    /**
     * Adds multiple objects to the game world.
     * @param {Array<GameObject>} objects - The objects to add.
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        });
    }

    /**
     * Adds an object to the game world.
     * @param {GameObject} mo - The object to add.
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

    /**
     * Flips the image horizontally for the given game object.
     * @param {GameObject} mo - The game object to flip.
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
        mo.x_Rect = (mo.x_Rect - mo.width_Rect + 10) * -1;
    }

    /**
     * Restores the image to its original orientation after flipping.
     * @param {GameObject} mo - The game object to restore.
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        mo.x_Rect = (mo.x_Rect - mo.width_Rect + 10) * -1;
        this.ctx.restore();
    }
}