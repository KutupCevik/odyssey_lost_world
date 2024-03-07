class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
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
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
        }, 25);
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

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                console.log(enemy);
                this.character.hit(20);
                this.statusBar.setPercentage(this.character.energy);
            }
            this.throwableObjects.forEach(arrow => {
                if (enemy.isColliding(arrow)) {
                    enemy.hit(20);
                    this.removeThrowObjects(arrow);
                }
            });
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
        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
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