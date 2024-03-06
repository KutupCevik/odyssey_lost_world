class MovableObject extends DrawableObject {
    speed = 0.15;
    paralax = 0;
    otherDirection = false;
    speedY = 0;
    acceleration = 3;
    lastHit = 0;
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
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
        return this.y < 230;
        }
    }

    isColliding(mo) {
        return  this.x + this.width - this.offset.right > mo.x + mo.offset.left && 
                this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
                this.x + this.offset.left < mo.x + mo.width - mo.offset.right && 
                this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // ms
        timepassed = timepassed / 1000; // s
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
        // this.walking_sound.pause();
    }

    playAnimations(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 30;
    }
}