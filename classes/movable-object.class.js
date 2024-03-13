class MovableObject extends DrawableObject {
    speed = 0.15;
    paralax = 0;
    otherDirection = false;
    speedY = 0;
    speedX = 0;
    acceleration = 1;
    lastHit = 0;
    energy = 100;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            } else {
                this.y = 245;
            }
        }, 1000 / 50);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 230;
        }
    }

    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    isCollidingFromAbove(enemy) {
        return this.y + this.height - this.offset.bottom >= enemy.y + enemy.offset.top - 12 &&
            this.y + this.height - this.offset.bottom <= enemy.y + enemy.offset.top + 12 &&
            !(this.x + this.width - this.offset.right >= enemy.x + enemy.offset.left - 5 &&
                this.x + this.width - this.offset.right <= enemy.x + enemy.offset.left + 5) &&
            !(this.x + this.offset.left > enemy.x + enemy.width - enemy.offset.right - 5 &&
                this.x + this.offset.left < enemy.x + enemy.width - enemy.offset.right + 5)
    }

    hit(damage) {
        this.energy -= damage;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt(time = 500) {
        let timepassed = new Date().getTime() - this.lastHit; // ms
        timepassed = timepassed / time; // s
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    dead(deadImgs) {
        this.currentImage = 0;
        let deadInterval = setInterval(() => {
            this.playAnimations(deadImgs);
            if (this.currentImage >= deadImgs.length) {
                clearInterval(deadInterval);
            }
        }, 100);
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump(jumpHeight) {
        this.speedY = jumpHeight;
    }

    applyRecoil(speed = 15) {
        this.speedX = speed;
        if (this.energy > 20) {
            this.jump(6);
        }
        let recoil = setInterval(() => {
            if (this.speedX > 0 && this.x > -680) {
                this.x -= this.speedX;
                this.speedX -= this.acceleration;
            } else {
                this.speedX = 0;
                clearInterval(recoil);
            }
        }, 1000 / 50);
    }

    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }

    changePlaybackRate(sound, rate) {
        sound.playbackRate = rate;
    }

    changeVolume(sound, rate) {
        sound.volume = rate;
    }
}