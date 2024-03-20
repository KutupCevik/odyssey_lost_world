/**
 * Class representing a plant enemy.
 * @memberof MovableObject
 * @extends MovableObject
 */
class Plent extends MovableObject {
    y = 260;
    height = 160;
    width = 160;
    world;
    energy = 10;
    offset = {
        top: 95,
        left: 45,
        right: 60,
        bottom: 0,
    };
    IMAGES_WALKING = [
        'img/3_enemies/Plent/2_walk/Walk-1.png',
        'img/3_enemies/Plent/2_walk/Walk-2.png',
        'img/3_enemies/Plent/2_walk/Walk-3.png',
        'img/3_enemies/Plent/2_walk/Walk-4.png',
        'img/3_enemies/Plent/2_walk/Walk-5.png',
        'img/3_enemies/Plent/2_walk/Walk-6.png',
        'img/3_enemies/Plent/2_walk/Walk-7.png',
        'img/3_enemies/Plent/2_walk/Walk-8.png',
        'img/3_enemies/Plent/2_walk/Walk-9.png',
    ];
    IMAGES_ATTACK = [
        'img/3_enemies/Plent/6_Attack/Attack_1-1.png',
        'img/3_enemies/Plent/6_Attack/Attack_1-2.png',
        'img/3_enemies/Plent/6_Attack/Attack_1-3.png',
        'img/3_enemies/Plent/6_Attack/Attack_1-4.png',
    ];
    IMAGES_DEAD = [
        'img/3_enemies/Plent/5_dead/Dead-1.png',
    ];

    /**
     * Creates an instance of Plent.
     */
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 300 + Math.random() * 2000;
        this.speed = 0.15 + Math.random() * 0.25;
    }

    /**
     * Initiates the animation for the Plent object.
     */
    animate() {
        this.plentIsMoving();
        this.plentMovinAnimation();
    }

    /**
     * Moves the Plent object.
     */
    plentIsMoving() {
        let sixtyFPS = setInterval(() => {
            if (this.isAttackingCharacter())
                this.isAttacking = true;
            if (this.canMove())
                this.moveToCharacter(this);
            if (this.isDead())
                clearInterval(sixtyFPS);
        }, 1000 / 60);
    }

    /**
     * Animates the movement of the Plent object.
     */
    plentMovinAnimation() {
        let move = setInterval(() => {
            if (this.isAttacking) {
                this.playAnimations(this.IMAGES_ATTACK);
                if (this.playingSound) {
                    this.world.hit_sound_plent.play();
                    this.playingSound = true
                }
            } else if (this.canMove) {
                this.playAnimations(this.IMAGES_WALKING);
            }
            if (this.isDead()) {
                clearInterval(move);
                this.dead(this.IMAGES_DEAD);
            }
        }, 100);
    }

    /**
     * Checks if the Plent is attacking the character.
     * @returns {boolean} True if the Plent is attacking the character, false otherwise.
     */
    isAttackingCharacter() {
        return this.isColliding(this.world.character) && !this.world.character.isDead();
    }
}