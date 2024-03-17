/**
 * Class representing an end boss object.
 * @memberof MovableObject
 * @extends MovableObject
 */
class Endboss extends MovableObject {
    y = -50;
    x = 2800;
    height = 650;
    width = 650;
    speed = 1;
    world;
    firstContact = false;
    energy = 100;
    offset = {
        top: 380,
        left: 130,
        right: 130,
        bottom: 170,
    };
    IMAGES_IDLE = [
        'img/4_enemie_boss/dragon/Idle1.png',
        'img/4_enemie_boss/dragon/Idle2.png',
        'img/4_enemie_boss/dragon/Idle3.png',
        'img/4_enemie_boss/dragon/Idle4.png',
    ];
    IMAGES_WALKING = [
        'img/4_enemie_boss/dragon/1_walk/Walk1.png',
        'img/4_enemie_boss/dragon/1_walk/Walk2.png',
        'img/4_enemie_boss/dragon/1_walk/Walk3.png',
        'img/4_enemie_boss/dragon/1_walk/Walk4.png',
        'img/4_enemie_boss/dragon/1_walk/Walk5.png',
    ];
    IMAGES_HURT = [
        'img/4_enemie_boss/dragon/4_hurt/Hurt1.png',
        'img/4_enemie_boss/dragon/4_hurt/Hurt2.png',
    ];
    IMAGES_DEAD = [
        'img/4_enemie_boss/dragon/5_dead/Death1.png',
        'img/4_enemie_boss/dragon/5_dead/Death2.png',
        'img/4_enemie_boss/dragon/5_dead/Death3.png',
        'img/4_enemie_boss/dragon/5_dead/Death4.png',
    ];
    IMAGES_ATTACK = [
        'img/4_enemie_boss/dragon/3_attack/Attack1.png',
        'img/4_enemie_boss/dragon/3_attack/Attack2.png',
    ];
    IMAGES_FIRE_ATTACK = [
        'img/4_enemie_boss/dragon/3_attack/Fire_Attack1.png',
        'img/4_enemie_boss/dragon/3_attack/Fire_Attack2.png',
        'img/4_enemie_boss/dragon/3_attack/Fire_Attack3.png',
        'img/4_enemie_boss/dragon/3_attack/Fire_Attack4.png',
        'img/4_enemie_boss/dragon/3_attack/Fire_Attack5.png',
        'img/4_enemie_boss/dragon/3_attack/Fire_Attack6.png',
    ];

    /**
     * Constructor for the Endboss class.
     */
    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_FIRE_ATTACK);
    }

    /**
     * Initiates animations for the end boss.
     */
    animate() {
        this.bossIsMoving();
        this.bossMovinAnimation();
    }

    /**
     * Initiates movement animation for the end boss.
     */
    bossIsMoving() {
        let sixtyFPS = setInterval(() => {
            if (this.canMove())
                this.moveToCharacter(this);
            if (this.isDead())
                clearInterval(sixtyFPS);
        }, 1000 / 60);
    }

    /**
     * Initiates various animations for the end boss.
     */
    bossMovinAnimation() {
        let idle = setInterval(() => {
            this.bossGrowlInDistance();
            this.bossRoar();
            if (this.isHurt()) {
                this.hurtAnimation();
            } else if (this.isCloseToCharacter()) {
                this.attackAnimation();
            } else if (this.firstContact) {
                this.walkAnimation();
            } else
                this.idleAnimation();
            if (this.isOffScreen())
                this.bossOffsetDead();
            if (this.isDead())
                this.bossDeath(idle);
        }, 200);
    }

    /**
     * Triggers a growl sound effect if the character approaches the boss.
     */
    bossGrowlInDistance() {
        if (world.character.x > 2400) {
            this.firstContact = true;
            this.world.dragonGrowl.play();
        }
    }

    /**
     * Triggers a roar sound effect if conditions are met.
     */
    bossRoar() {
        if (this.canRoar()) {
            this.world.dragonRoar.play();
        }
    }

    /**
     * Initiates hurt animation for the boss.
     */
    hurtAnimation() {
        this.playAnimations(this.IMAGES_HURT);
        this.offset = {
            top: 380,
            left: 130,
            right: 130,
            bottom: 170,
        };
        this.applyRecoil(10);
    }

    /**
     * Initiates attack animation for the boss.
     */
    attackAnimation() {
        this.playAnimations(this.IMAGES_ATTACK);
        this.applyRecoil(10);
        this.offset = {
            top: 250,
            left: 230,
            right: 290,
            bottom: 170,
        };
    }

    /**
     * Initiates walk animation for the boss.
     */
    walkAnimation() {
        this.playAnimations(this.IMAGES_WALKING);
        this.offset = {
            top: 380,
            left: 130,
            right: 130,
            bottom: 170,
        };
    }

    /**
     * Initiates idle animation for the boss.
     */
    idleAnimation() {
        this.playAnimations(this.IMAGES_IDLE);
        this.offset = {
            top: 380,
            left: 130,
            right: 130,
            bottom: 170,
        };
    }

    /**
     * Handles boss offset when it is dead.
     */
    bossOffsetDead() {
        this.energy = 0;
        this.world.healthBarBoss.setPercentage(enemy.energy, this.healthBarImgsBoss);
    }

    /**
     * Handles boss death animation and game over.
     */
    bossDeath(idleInterval) {
        clearInterval(idleInterval);
        this.dead(this.IMAGES_DEAD);
        stopSound();
        this.world.winn.play();
        setTimeout(() => {
            clearAllIntervals();
            stopSound();
            winScreen();
        }, 1000);
    }

    /**
     * Checks if the character is close to the boss.
     * @returns {boolean} - True if the character is close to the boss, otherwise false.
     */
    isCloseToCharacter() {
        return this.x - this.world.character.x < 70 && this.x - this.world.character.x > -10;
    }

    /**
     * Checks if the boss can move to the left.
     * @returns {boolean} - True if the boss can move to the left, otherwise false.
     */
    canMove() {
        return !this.isHurt() && !this.isColliding(this.world.character) && this.firstContact;
    }

    /**
     * Checks if the boss can roar.
     * @returns {boolean} - True if the boss can roar, otherwise false.
     */
    canRoar() {
        return world.character.x > 1400 && world.character.x < 1420;
    }

    /**
     * Checks if the boss is off the screen.
     * @returns {boolean} - True if the boss is off the screen, otherwise false.
     */
    isOffScreen() {
        return this.x < -620;
    }
}