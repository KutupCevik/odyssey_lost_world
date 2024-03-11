class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    healthBarImgs = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png',
    ];
    arrowBarImgs = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png',
    ];
    coinBarImgs = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png',
    ];
    healthBar = new StatusBar(this.healthBarImgs, 0, 100);
    arrowBar = new StatusBar(this.arrowBarImgs, 50, 0);
    coinBar = new StatusBar(this.coinBarImgs, 100, 0);
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
        }, 10);
        setInterval(() => {
            this.checkThrowObjects();
        }, 550);
    }

    checkThrowObjects() {
        if (this.keyboard.F && !this.character.isDead()) {
            let arrow = new ThrowableObject(this.character.x + 50, this.character.y + 110);
            this.throwableObjects.push(arrow)
        }
    }


    // return  this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
    // this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
    // this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
    // this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;


    // this.character.isAboveGround()
    // && this.character.speedY < 0 
    // (this.character.y + this.character.height - this.character.offset.bottom >= enemy.y + enemy.offset.top - 15 &&
    // this.character.y + this.character.height - this.character.offset.bottom <= enemy.y + enemy.offset.top + 15)
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !enemy.isDead() && !this.character.isHurt()) {
                if (this.character.y + this.character.height - this.character.offset.bottom >= enemy.y + enemy.offset.top - 12 &&
                    this.character.y + this.character.height - this.character.offset.bottom <= enemy.y + enemy.offset.top + 12 &&
                    !(this.character.x + this.character.width - this.character.offset.right >= enemy.x + enemy.offset.left - 5 &&
                        this.character.x + this.character.width - this.character.offset.right <= enemy.x + enemy.offset.left + 5) &&
                    !(this.character.x + this.character.offset.left > enemy.x + enemy.width - enemy.offset.right - 5 &&
                        this.character.x + this.character.offset.left < enemy.x + enemy.width - enemy.offset.right + 5)) {
                    if (!enemy.isHurt(300)) {
                        enemy.hit(20);
                    }
                    this.character.jump(10);
                } else {
                    this.character.applyRecoil();
                    this.character.hit(10);
                    this.healthBar.setPercentage(this.character.energy, this.healthBarImgs);
                }
            }
            this.throwableObjects.forEach(arrow => {
                if (enemy.isColliding(arrow) && !enemy.isDead()) {
                    enemy.hit(20);
                    this.removeThrowObjects(arrow);
                }
            });
        });
        this.level.lyingObjects.forEach((object) => {

        })
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
        this.ctx.translate(this.camera_x, 0);


        this.ctx.translate(-this.camera_x, 0);
        requestAnimationFrame(() => {
            this.draw();
        })
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
        mO.drawFrame(this.ctx);
        mO.drawCollisonFrame(this.ctx);

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