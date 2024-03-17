/**
 * Class representing a character object.
 * @memberof MovableObject
 * @extends MovableObject
 */
class Character extends MovableObject {
    x = 0;
    y = 220;
    world;
    speed = 5.2;
    offset = {
        top: 90,
        left: 60,
        right: 75,
        bottom: 0,
    };
    energy = 100;
    IMAGES_IDLE = [
        'img/2_character/Archer/1_idle/Idle-1.png',
        'img/2_character/Archer/1_idle/Idle-2.png',
        'img/2_character/Archer/1_idle/Idle-3.png',
        'img/2_character/Archer/1_idle/Idle-4.png',
        'img/2_character/Archer/1_idle/Idle-5.png',
        'img/2_character/Archer/1_idle/Idle-6.png',
    ];
    IMAGES_IDLE_2 = [
        'img/2_character/Archer/1_idle/Idle_2-2.png',
        'img/2_character/Archer/1_idle/Idle_2-3.png',
        'img/2_character/Archer/1_idle/Idle_2-4.png',
        'img/2_character/Archer/1_idle/Idle_2-1.png',
        'img/2_character/Archer/1_idle/Idle_2-1.png',
    ];
    IMAGES_WALKING = [
        'img/2_character/Archer/2_walk/Walk-1.png',
        'img/2_character/Archer/2_walk/Walk-2.png',
        'img/2_character/Archer/2_walk/Walk-3.png',
        'img/2_character/Archer/2_walk/Walk-4.png',
        'img/2_character/Archer/2_walk/Walk-5.png',
        'img/2_character/Archer/2_walk/Walk-6.png',
        'img/2_character/Archer/2_walk/Walk-7.png',
        'img/2_character/Archer/2_walk/Walk-8.png',
    ];
    IMAGES_JUMP = [
        'img/2_character/Archer/3_jump/Jump-1.png',
        'img/2_character/Archer/3_jump/Jump-2.png',
        'img/2_character/Archer/3_jump/Jump-3.png',
        'img/2_character/Archer/3_jump/Jump-4.png',
        'img/2_character/Archer/3_jump/Jump-5.png',
        'img/2_character/Archer/3_jump/Jump-6.png',
        'img/2_character/Archer/3_jump/Jump-7.png',
        'img/2_character/Archer/3_jump/Jump-8.png',
        'img/2_character/Archer/3_jump/Jump-9.png',
    ];
    IMAGES_ATTACK = [
        'img/2_character/Archer/6_Attack/Shot-1.png',
        'img/2_character/Archer/6_Attack/Shot-2.png',
        'img/2_character/Archer/6_Attack/Shot-3.png',
        'img/2_character/Archer/6_Attack/Shot-4.png',
        'img/2_character/Archer/6_Attack/Shot-5.png',
        'img/2_character/Archer/6_Attack/Shot-6.png',
        'img/2_character/Archer/6_Attack/Shot-7.png',
        'img/2_character/Archer/6_Attack/Shot-8.png',
        'img/2_character/Archer/6_Attack/Shot-9.png',
        'img/2_character/Archer/6_Attack/Shot-10.png',
        'img/2_character/Archer/6_Attack/Shot-11.png',
        'img/2_character/Archer/6_Attack/Shot-12.png',
        'img/2_character/Archer/6_Attack/Shot-13.png',
        'img/2_character/Archer/6_Attack/Shot-14.png',
    ];
    IMAGES_HURT = [
        'img/2_character/Archer/4_hurt/Hurt-1.png',
        'img/2_character/Archer/4_hurt/Hurt-2.png',
        'img/2_character/Archer/4_hurt/Hurt-3.png',
    ];
    IMAGES_DEAD = [
        'img/2_character/Archer/5_dead/Dead-1.png',
        'img/2_character/Archer/5_dead/Dead-2.png',
        'img/2_character/Archer/5_dead/Dead-3.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_IDLE_2);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.applyGravity();
        this.animate();
    }

    /**
     * Animates the character by handling its movement and animation states.
     */
    animate() {
        this.characterIsMoving();
        this.characterMovingAnimation();
    }

    /**
     * Handles the character's movement based on keyboard input.
     */
    characterIsMoving() {
        let sixtyFPS = setInterval(() => {
            this.characterMoveRight();
            this.characterMoveLeft();
            this.characterJump();
            this.world.camera_x = -this.x + 30;
            this.characterDead(sixtyFPS);
        }, 1000 / 60);
    }

    /**
     * Performs animation based on character's movement states.
     */
    characterMovingAnimation() {
        let idle = setInterval(() => {
            this.characterIdleAnimation();
            this.characterJumpOrWalkAnimation();
            this.characterHurtAnimation();
            this.characterAttack();
            this.characterDeadAnimationAndGameOver(idle);
        }, 100);
    }

    /**
     * Moves the character to the right if possible.
     */
    characterMoveRight() {
        if (this.canMoveRight()) {
            this.moveRight();
            if (!this.isAboveGround()) {
                this.changePlaybackRate(this.world.walking_sound, 1.5);
                this.world.walking_sound.play();
            }
        }
    }

    /**
     * Moves the character to the left if possible.
     */
    characterMoveLeft() {
        if (this.canMoveLeft()) {
            this.moveLeft();
            if (!this.isAboveGround()) {
                this.world.walking_sound.play();
            }
        }
    }

    /**
     * Moves the character to the right.
     */
    moveRight() {
        super.moveRight();
        this.otherDirection = false;
    }

    /**
     * Moves the character to the left.
     */
    moveLeft() {
        super.moveLeft();
        this.otherDirection = true;
    }

    /**
     * Makes the character jump if conditions are met.
     */
    characterJump() {
        if (this.canJump()) {
            this.jump(15);
            this.world.jump_sound.play();
        }
    }

    /**
     * Checks if the character is dead and stops animation loop.
     */
    characterDead(sixtyFPS) {
        if (this.isDead()) {
            clearInterval(sixtyFPS);
            this.world.walking_sound.pause();
        }
    }

    /**
     * Animates the character's idle state.
     */
    characterIdleAnimation() {
        if (this.world.keyboard.RIGHT == false && this.world.keyboard.LEFT == false) {
            this.playAnimations(this.IMAGES_IDLE);
            this.world.walking_sound.pause();
        }
    }

    /**
     * Animates the character's jump or walk state.
     */
    characterJumpOrWalkAnimation() {
        if (this.isAboveGround()) {
            this.characterJumpAnimation();
            this.world.walking_sound.pause();
        } else {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimations(this.IMAGES_WALKING);
            }
        }
    }

    /**
     * Animates the character's jump state.
     */
    characterJumpAnimation() {
        this.playAnimations(this.IMAGES_JUMP);
        this.world.walking_sound.pause();
    }

    /**
     * Animates the character's hurt state.
     */
    characterHurtAnimation() {
        if (this.isHurt()) {
            this.playAnimations(this.IMAGES_HURT);
        }
    }

    /**
     * Initiates attack animation if conditions are met.
     */
    characterAttack() {
        if (this.world.keyboard.F && !this.isDead() && (this.world.arrows > 0)) {
            this.playAnimations(this.IMAGES_ATTACK);
        }
    }

    /**
     * Initiates dead animation and handles game over if character is dead.
     */
    characterDeadAnimationAndGameOver(idle) {
        if (this.isDead()) {
            clearInterval(idle);
            this.dead(this.IMAGES_DEAD);
            stopSound();
            this.world.loose.play();
            setTimeout(() => {
                clearAllIntervals();
                stopSound();
                looseScreen();
            }, 1000);
        }
    }

    /**
     * Checks if character can move to the right.
     */
    canMoveRight() {
        return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x && this.speedX == 0;
    }

    /**
     * Checks if character can move to the left.
     */
    canMoveLeft() {
        return this.world.keyboard.LEFT && this.x > -680;
    }

    /**
     * Checks if character can jump.
     */
    canJump() {
        return this.world.keyboard.UP && !this.isAboveGround()
    }
}