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

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
        this.level.enemies.forEach(enemy => {
            enemy.world = this;
            enemy.animate();
        });
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkCollisionsWithObject();
        }, 10);
        setInterval(() => {
            this.checkThrowObjects();
        }, 550);
    }

    checkThrowObjects() {
        if (this.keyboard.F && !this.character.isDead() && this.arrows > 0) {
            let arrow = new ThrowableObject(['img/2_character/Archer/Arrow.png'], this.character.x + 50, this.character.y + 110, this.character.otherDirection);
            this.throwableObjects.push(arrow)
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !enemy.isDead() && !this.character.isHurt()) {
                if (this.character.isCollidingFromAbove(enemy)) {
                    if (!enemy.isHurt(300)) {
                        enemy.hit(20);
                        this.jump_hit.play();
                        if (enemy instanceof Endboss) {
                            this.healthBarBoss.setPercentage(enemy.energy, this.healthBarImgsBoss);
                        }
                    }
                    this.character.jump(12);
                } else {
                    this.character.applyRecoil();
                    this.character.hit(20);
                    this.healthBar.setPercentage(this.character.energy, this.healthBarImgs);
                    if (enemy instanceof Plent) {
                        this.punch.play();
                    }
                    if (enemy instanceof Skeleton) {
                        this.knife.play();
                    }
                    if (enemy instanceof Endboss) {
                        this.dragonPunch.play();
                    }
                }
            }
            this.throwableObjects.forEach(arrow => {
                if (enemy.isColliding(arrow) && !enemy.isDead() && (this.arrows > 0)) {
                    enemy.hit(20);
                    this.removeThrowObjects(arrow);
                    this.arrows--
                    if (enemy instanceof Endboss) {
                        this.healthBarBoss.setPercentage(enemy.energy, this.healthBarImgsBoss);
                    }
                }
            });
        });
    }

    checkCollisionsWithObject() {
        this.level.lyingObjects.forEach((object, i) => {
            if (this.character.isColliding(object) && object instanceof Apple && !(this.character.energy == 100)) {
                this.level.lyingObjects.splice(i, 1);
                this.character.energy += 20;
                this.healthBar.setPercentage(this.character.energy, this.healthBarImgs);
            };
            if (this.character.isColliding(object) && object instanceof Coin) {
                this.level.lyingObjects.splice(i, 1);
                this.coins++
                this.coin.play();
                // setTimeout(() => {
                //     this.coin.pause();
                // }, 1000);
            };
            if (this.character.isColliding(object) && object instanceof Arrow) {
                this.level.lyingObjects.splice(i, 1);
                this.arrows++
            };
        });
    }

    removeThrowObjects(arrow) {
        const i = this.throwableObjects.indexOf(arrow);
        if (i !== -1) {
            this.throwableObjects.splice(i, 1);
        }
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

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.healthBar);
        this.addToMap(this.arrowBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.healthBarBoss);
        this.drawCoins(this.ctx);
        this.drawArrows(this.ctx);
        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);
        requestAnimationFrame(() => {
            this.draw();
        })
    }

    drawCoins(ctx) {
        ctx.font = "30px Arial";
        ctx.strokeStyle = "orange";
        ctx.fillStyle = "White";
        ctx.fillText(this.coins, 85, 95);
    }

    drawArrows(ctx) {
        ctx.font = "30px Arial";
        ctx.strokeStyle = "orange";
        ctx.fillStyle = "White";
        ctx.fillText(this.arrows, 190, 95);
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mO) {
        if (mO.otherDirection) {
            this.flipImage(mO);
        }
        mO.draw(this.ctx);
        // mO.drawFrame(this.ctx);
        // mO.drawCollisonFrame(this.ctx);

        if (mO.otherDirection) {
            this.flipImageBack(mO);
        }
    }

    flipImage(mO) {
        this.ctx.save();
        this.ctx.translate(mO.width, 0);
        this.ctx.scale(-1, 1);
        mO.x = mO.x * -1;
    }

    flipImageBack(mO) {
        mO.x = mO.x * -1;
        this.ctx.restore();
    }
}