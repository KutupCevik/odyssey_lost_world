/**
 * Class representing the game world.
 */
class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    coins = 0;
    arrows = 0;
    coin = new Audio('audio/coin.mp3');
    punch = new Audio('audio/punch.mp3');
    dragonPunch = new Audio('audio/dragon-punch.mp3');
    knife = new Audio('audio/knife.mp3');
    jump_hit = new Audio('audio/jump-hit.wav');
    backgroundMusic = new Audio('audio/background-music.mp3');
    walking_sound = new Audio('audio/footsteps.mp3');
    jump_sound = new Audio('audio/jump.mp3');
    hit_sound = new Audio('audio/knife.mp3');
    fallingBones = new Audio('audio/bone-crack.mp3');
    hit_sound_plent = new Audio('audio/punch.mp3');
    dragonRoar = new Audio('audio/dragon-roar.mp3');
    dragonGrowl = new Audio('audio/dragon-growl.mp3');
    winn = new Audio('audio/winning-sound.mp3');
    loose = new Audio('audio/loose.mp3');
    healthBarImgs = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png',
    ];
    healthBarImgsBoss = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png',
    ];
    arrowBarImgs = [
        'img/6_objects/Arrow-2.png',
    ];
    coinBarImgs = [
        'img/6_objects/gold coin/coin3.png',
    ];
    healthBar = new StatusBar(this.healthBarImgs, 200, 60, 10, 0, 100);
    arrowBar = new StatusBar(this.arrowBarImgs, 50, 50, 130, 60, 0);
    coinBar = new StatusBar(this.coinBarImgs, 40, 40, 20, 65, 0);
    healthBarBoss = new StatusBar(this.healthBarImgsBoss, 200, 60, 500, 0, 100);
    throwableObjects = [];

    /**
     * Creates an instance of World.
     * @param {HTMLCanvasElement} canvas - The canvas element where the game is drawn.
     * @param {Keyboard} keyboard - The keyboard input object.
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.setVolume();
        this.playSound();
    }

    /**
     * Sets up the world by assigning necessary properties to game objects.
     */
    setWorld() {
        this.character.world = this;
        this.level.enemies.forEach(enemy => {
            enemy.world = this;
            enemy.animate();
        });
    }

    /**
     * Sets volume levels for audio elements.
     */
    setVolume() {
        this.coin.volume = 0.05;
        this.punch.volume = 0.02;
        this.dragonPunch.volume = 0.05;
        this.knife.volume = 0.02;
        this.jump_hit.volume = 0.03;
        this.backgroundMusic.volume = 0.005;
        this.walking_sound.volume = 0.02;
        this.jump_sound.volume = 0.05;
        this.hit_sound.volume = 0.05;
        this.fallingBones.volume = 0.02;
        this.hit_sound_plent.volume = 0.02;
        this.dragonRoar.volume = 0.05;
        this.dragonGrowl.volume = 0.05;
        this.winn.volume = 0.05;
        this.loose.volume = 0.05;
    }

    /**
     * Plays background music.
     */
    playSound() {
        this.backgroundMusic.play();
    }

    /**
     * Runs the game loop.
     */
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkCollisionsWithObject();
        }, 10);
        setInterval(() => {
            this.checkThrowObjects();
        }, 550);
    }

    /**
     * Checks if throwable objects can be thrown and throws them if possible.
     */
    checkThrowObjects() {
        if (this.canShoot()) {
            let arrow = new ThrowableObject(['img/2_character/Archer/Arrow.png'], this.character.x + 50, this.character.y + 110, this.character.otherDirection);
            this.throwableObjects.push(arrow)
            this.arrows--;
        }
    }

    /**
     * Checks collisions between characters and enemies.
     */
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.canHit(enemy)) {
                if (this.character.isCollidingFromAbove(enemy)) {
                    this.hitEnemyFromAbove(enemy);
                } else {
                    this.enemyHitCharacter(enemy)
                }
            }
            this.throwableObjects.forEach(arrow => {
                if (enemy.isColliding(arrow) && !enemy.isDead()) {
                    this.characterHitEnemyWithArrow(enemy, arrow);
                }
            });
        });
    }

    /**
     * Handles when the character hits an enemy from above.
     * @param {MovableObject} enemy - The enemy object that was hit.
     */
    hitEnemyFromAbove(enemy) {
        if (!enemy.isHurt(300)) {
            enemy.hit(20);
            this.jump_hit.play();
            if (enemy instanceof Endboss) {
                this.healthBarBoss.setPercentage(enemy.energy, this.healthBarImgsBoss);
            }
        }
        this.character.jump(12);
    }

    /**
     * Handles when an enemy hits the character.
     * @param {MovableObject} enemy - The enemy object that hit the character.
     */
    enemyHitCharacter(enemy) {
        this.character.applyRecoil();
        this.character.hit(20);
        this.healthBar.setPercentage(this.character.energy, this.healthBarImgs);
        if (enemy instanceof Plent)
            this.punch.play();
        if (enemy instanceof Skeleton)
            this.knife.play();
        if (enemy instanceof Endboss)
            this.dragonPunch.play();
    }

    /**
     * Handles when the character hits an enemy with an arrow.
     * @param {MovableObject} enemy - The enemy object that was hit.
     * @param {ThrowableObject} arrow - The arrow object that hit the enemy.
     */
    characterHitEnemyWithArrow(enemy, arrow) {
        enemy.hit(20);
        this.removeThrowObjects(arrow);
        if (enemy instanceof Endboss)
            this.healthBarBoss.setPercentage(enemy.energy, this.healthBarImgsBoss);
    }

    /**
     * Checks collisions between the character and objects in the world.
     */
    checkCollisionsWithObject() {
        this.level.lyingObjects.forEach((object, i) => {
            if (this.canEatApple(object)) {
                this.level.lyingObjects.splice(i, 1);
                this.character.energy += 20;
                this.healthBar.setPercentage(this.character.energy, this.healthBarImgs);
            };
            if (this.canCollectCoin(object)) {
                this.level.lyingObjects.splice(i, 1);
                this.coins++
                this.coin.play();
            };
            if (this.canCollectArrow(object)) {
                this.level.lyingObjects.splice(i, 1);
                this.arrows++
            };
        });
    }

    /**
     * Removes a throwable object from the world.
     * @param {ThrowableObject} arrow - The arrow object to be removed.
     */
    removeThrowObjects(arrow) {
        const i = this.throwableObjects.indexOf(arrow);
        if (i !== -1)
            this.throwableObjects.splice(i, 1);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.lyingObjects);
        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.character);
        // Solid objects
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.healthBar);
        this.addToMap(this.arrowBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.healthBarBoss);
        this.drawCoins(this.ctx);
        this.drawArrows(this.ctx);
        this.ctx.translate(this.camera_x, 0);
        // Solid objects end
        this.ctx.translate(-this.camera_x, 0);
        requestAnimationFrame(() => {
            this.draw();
        })
    }

    /**
     * Draws the HUD element showing the number of collected coins.
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    drawCoins(ctx) {
        ctx.font = "30px Arial";
        ctx.strokeStyle = "orange";
        ctx.fillStyle = "White";
        ctx.fillText(this.coins, 85, 95);
    }

    /**
     * Draws the HUD element showing the number of available arrows.
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    drawArrows(ctx) {
        ctx.font = "30px Arial";
        ctx.strokeStyle = "orange";
        ctx.fillStyle = "White";
        ctx.fillText(this.arrows, 190, 95);
    }

    /**
     * Adds objects to the map for rendering.
     * @param {Array} objects - The array of objects to be added to the map.
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * Adds an object to the map for rendering.
     * @param {MovableObject} mO - The movable object to be added to the map.
     */
    addToMap(mO) {
        if (mO.otherDirection)
            this.flipImage(mO);
        mO.draw(this.ctx);
        if (mO.otherDirection)
            this.flipImageBack(mO);
        // mO.drawFrame(this.ctx);
        // mO.drawCollisionFrame(this.ctx);

    }

    /**
     * Flips an image horizontally for rendering.
     * @param {MovableObject} mO - The movable object whose image will be flipped.
     */
    flipImage(mO) {
        this.ctx.save();
        this.ctx.translate(mO.width, 0);
        this.ctx.scale(-1, 1);
        mO.x = mO.x * -1;
    }

    /**
     * Restores the original orientation of an image after flipping.
     * @param {MovableObject} mO - The movable object whose image will be restored.
     */
    flipImageBack(mO) {
        mO.x = mO.x * -1;
        this.ctx.restore();
    }

    /**
     * Checks if the character can shoot a throwable object.
     * @returns {boolean} - True if the character can shoot, otherwise false.
     */
    canShoot() {
        return this.keyboard.F && !this.character.isDead() && this.arrows > 0
    }

    /**
     * Checks if the character can hit an enemy.
     * @param {MovableObject} enemy - The enemy object to check collision with.
     * @returns {boolean} - True if the character can hit the enemy, otherwise false.
     */
    canHit(enemy) {
        return this.character.isColliding(enemy) && !enemy.isDead() && !this.character.isHurt()
    }

    /**
     * Checks if the character can eat an apple.
     * @param {MovableObject} object - The object to check collision with.
     * @returns {boolean} - True if the character can eat the apple, otherwise false.
     */
    canEatApple(object) {
        return this.character.isColliding(object) && object instanceof Apple && !(this.character.energy == 100)
    }

    /**
     * Checks if the character can collect a coin.
     * @param {MovableObject} object - The object to check collision with.
     * @returns {boolean} - True if the character can collect the coin, otherwise false.
     */
    canCollectCoin(object) {
        return this.character.isColliding(object) && object instanceof Coin
    }

    /**
     * Checks if the character can collect an arrow.
     * @param {MovableObject} object - The object to check collision with.
     * @returns {boolean} - True if the character can collect the arrow, otherwise false.
     */
    canCollectArrow(object) {
        return this.character.isColliding(object) && object instanceof Arrow
    }
}