class Endboss extends MovableObject {
    y = -30;
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

    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_FIRE_ATTACK);
    }


    animate() {
        let i = 0;
        let sixtyFPS = setInterval(() => {
            if (!this.isHurt() && !this.isColliding(this.world.character) && this.firstContact) {
                this.moveLeft();
            }
            if (this.isDead()) {
                clearInterval(sixtyFPS);
            }
        }, 1000 / 60);
        let idle = setInterval(() => {
            if (world.character.x > 2400) {
                this.firstContact = true;
                this.world.dragonGrowl.play();
            }
            if (world.character.x > 1400 && world.character.x < 1420) {
                this.world.dragonRoar.play();
            }
            if (this.isHurt()) {
                this.playAnimations(this.IMAGES_HURT);
                this.offset = {
                    top: 380,
                    left: 130,
                    right: 130,
                    bottom: 170,
                };
                this.applyRecoil(10);
            } else if (this.x - this.world.character.x < 70 && this.x - this.world.character.x > -10) {
                this.playAnimations(this.IMAGES_ATTACK);
                this.applyRecoil(10);
                this.offset = {
                    top: 250,
                    left: 230,
                    right: 290,
                    bottom: 170,
                };
            } else if (this.firstContact) {
                this.playAnimations(this.IMAGES_WALKING);
                this.offset = {
                    top: 380,
                    left: 130,
                    right: 130,
                    bottom: 170,
                };
            } else {
                this.playAnimations(this.IMAGES_IDLE);
                this.offset = {
                    top: 380,
                    left: 130,
                    right: 130,
                    bottom: 170,
                };
            }
            if (this.x < - 620) {
                this.energy = 0;
                this.world.healthBarBoss.setPercentage(enemy.energy, this.healthBarImgsBoss);
            }
            if (this.isDead()) {
                clearInterval(idle);
                this.dead(this.IMAGES_DEAD);
                stopSound();
                this.world.winn.play();
                setTimeout(() => {
                    clearAllIntervals();
                    stopSound();
                    winScreen();
                }, 1000);
            }
        }, 200);
    }
}