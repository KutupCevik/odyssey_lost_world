/**
 * Class representing a movable object.
 * @memberof DrawableObject
 * @extends DrawableObject
 */
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

    /**
     * Applies gravity to the object, causing it to fall when not on the ground.
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            } else
                this.y = 220;
        }, 1000 / 50);
    }

    /**
     * Checks if the object is above the ground.
     * @returns {boolean} True if the object is above the ground, false otherwise.
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else
            return this.y < 220;
    }

    /**
     * Checks if the object is colliding with another object.
     * @param {MovableObject} mo - The other object to check collision with.
     * @returns {boolean} True if the object is colliding with the other object, false otherwise.
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    /**
     * Checks if the object is colliding with another object from above.
     * @param {MovableObject} enemy - The other object to check collision with.
     * @returns {boolean} True if the object is colliding with the other object from above, false otherwise.
     */
    isCollidingFromAbove(enemy) {
        return this.y + this.height - this.offset.bottom >= enemy.y + enemy.offset.top - 12 &&
            this.y + this.height - this.offset.bottom <= enemy.y + enemy.offset.top + 12 &&
            !(this.x + this.width - this.offset.right >= enemy.x + enemy.offset.left - 5 &&
                this.x + this.width - this.offset.right <= enemy.x + enemy.offset.left + 5) &&
            !(this.x + this.offset.left > enemy.x + enemy.width - enemy.offset.right - 5 &&
                this.x + this.offset.left < enemy.x + enemy.width - enemy.offset.right + 5)
    }

    /**
     * Deals damage to the object.
     * @param {number} damage - The amount of damage to deal.
     */
    hit(damage) {
        this.energy -= damage;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Checks if the object is hurt within a certain time period.
     * @param {number} time - The time period to consider for hurt state.
     * @returns {boolean} True if the object is hurt, false otherwise.
     */
    isHurt(time = 500) {
        let timepassed = new Date().getTime() - this.lastHit; // ms
        timepassed = timepassed / time; // s
        return timepassed < 1;
    }

    /**
     * Checks if the object is dead.
     * @returns {boolean} True if the object is dead, false otherwise.
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * Initiates death animation for the object.
     * @param {Array} deadImgs - Array of image paths for death animation.
     */
    dead(deadImgs) {
        this.currentImage = 0;
        let deadInterval = setInterval(() => {
            this.playAnimations(deadImgs);
            if (this.currentImage >= deadImgs.length) {
                clearInterval(deadInterval);
            }
        }, 100);
    }

    /**
     * Moves the object to the right.
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * Moves the object to the left.
     */
    moveLeft() {
        this.x -= this.speed;
    }

/**
 * Moves the enemy towards the player.
 */
    moveToCharacter0() {
        let previousX = this.x + (this.width / 2);
        this.x += (this.world.character.x - this.x > 0 ? this.speed : -this.speed);
        this.otherDirection = this.x - previousX > 0 ? true : false;
    }

    moveToCharacter() {
        this.previousX = this.x;
        this.otherDirection = (this.x + this.width / 2 - (this.world.character.x + this.world.character.width / 2)) > 0 ? false : true;
        this.x += (this.world.character.x + this.world.character.width / 2 - (this.x + this.width / 2)) > 0 ? this.speed : -this.speed;
    }

    /**
     * Checks if the object can move left.
     * @returns {boolean} True if the object can move left, false otherwise.
     */
    canMove() {
        return !this.isHurt() && !this.isColliding(this.world.character);
    }

    /**
     * Causes the object to jump.
     * @param {number} jumpHeight - The height of the jump.
     */
    jump(jumpHeight) {
        this.speedY = jumpHeight;
    }

    /**
     * Applies recoil to the object.
     * @param {number} speed - The speed of the recoil.
     */
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

    /**
     * Changes the playback rate of a sound.
     * @param {object} sound - The sound object to change playback rate for.
     * @param {number} rate - The playback rate to set.
     */
    changePlaybackRate(sound, rate) {
        sound.playbackRate = rate;
    }

    /**
     * Changes the volume of a sound.
     * @param {object} sound - The sound object to change volume for.
     * @param {number} rate - The volume to set.
     */
    changeVolume(sound, rate) {
        sound.volume = rate;
    }
}