/**
 * Class representing a skeleton enemy.
 * @memberof MovableObject
 * @extends MovableObject
 */
class Skeleton extends MovableObject {
    y = 240;
    height = 180;
    width = 180;
    world;
    energy = 50;
    offset = {
        top: 90,
        left: 70,
        right: 60,
        bottom: 0,
    };
    IMAGES_WALKING = [
        'img/3_enemies/Skeleton/2_walk/Walk-1.png',
        'img/3_enemies/Skeleton/2_walk/Walk-2.png',
        'img/3_enemies/Skeleton/2_walk/Walk-3.png',
        'img/3_enemies/Skeleton/2_walk/Walk-4.png',
        'img/3_enemies/Skeleton/2_walk/Walk-5.png',
        'img/3_enemies/Skeleton/2_walk/Walk-6.png',
        'img/3_enemies/Skeleton/2_walk/Walk-7.png',
        'img/3_enemies/Skeleton/2_walk/Walk-8.png',
    ];
    IMAGES_ATTACK = [
        'img/3_enemies/Skeleton/6_Attack/Attack_2-1.png',
        'img/3_enemies/Skeleton/6_Attack/Attack_2-2.png',
        'img/3_enemies/Skeleton/6_Attack/Attack_2-3.png',
        'img/3_enemies/Skeleton/6_Attack/Attack_2-4.png',
    ];
    IMAGES_HURT = [
        'img/3_enemies/Skeleton/4_hurt/Hurt-1.png',
        'img/3_enemies/Skeleton/4_hurt/Hurt-2.png',
        'img/3_enemies/Skeleton/4_hurt/Hurt-3.png',
    ];
    IMAGES_DEAD = [
        'img/3_enemies/Skeleton/5_dead/Dead-1.png',
        'img/3_enemies/Skeleton/5_dead/Dead-2.png',
        'img/3_enemies/Skeleton/5_dead/Dead-3.png',
    ];


    /**
     * Creates an instance of Skeleton.
     */
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 1000 + Math.random() * 1500;
        this.speed = 0.15 + Math.random() * 0.25;
    }


    /**
     * Initiates the animation for the Skeleton object.
     */
    animate() {
        this.skeletonIsMoving();
        this.skeletonMovinAnimation();
    }


    /**
     * Moves the Skeleton object.
     */
    skeletonIsMoving() {
        let sixtyFPS = setInterval(() => {
            if (this.canMove())
                this.moveToCharacter(this);
            if (this.isDead())
                clearInterval(sixtyFPS);
        }, 1000 / 60);
    }


    /**
     * Animates the movement of the Skeleton object.
     */
    skeletonMovinAnimation() {
        let move = setInterval(() => {
            if (this.isHurt()) {
                this.playAnimations(this.IMAGES_HURT);
            } else if (this.isAttackingCharacter()) {
                this.playAnimations(this.IMAGES_ATTACK);
                this.world.hit_sound.play();
            } else this.playAnimations(this.IMAGES_WALKING);
            if (this.isDead())
                this.skeletonDeath(move);
        }, 100);
    }


    /**
     * Triggers the death animation for the Skeleton object.
     * @param {number} moveInterval - The interval for the movement animation.
     */
    skeletonDeath(moveInterval) {
        this.world.fallingBones.play();
        clearInterval(moveInterval);
        this.dead(this.IMAGES_DEAD);
    }


    /**
     * Checks if the Skeleton is attacking the character.
     * @returns {boolean} True if the Skeleton is attacking the character, false otherwise.
     */
    isAttackingCharacter() {
        return this.isColliding(this.world.character) && !this.world.character.isDead();
    }
}