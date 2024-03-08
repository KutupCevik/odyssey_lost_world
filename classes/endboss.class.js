class Endboss extends MovableObject {
    y = -30;
    x = 1400;
    height = 650;
    width = 650;
    world;
    firstContact = false;
    offset = {
        top: 330,
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
        'img/4_enemie_boss/dragon/3_attack/Attack3.png',
        'img/4_enemie_boss/dragon/3_attack/Attack4.png',
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
        let idle = setInterval(() => {
            
            // if (i < 10) {
            //     this.playAnimations(this.IMAGES_IDLE);
            // } else {
            //     this.playAnimations(this.IMAGES_IDLE);
            // }
            // i++;
            // if (world.character.x > 1400 && !firstContact) {
            //     i = 0;
            //     firstContact = true;
            // }
            if (this.isHurt()) {
                this.playAnimations(this.IMAGES_HURT);
            } else {
                this.playAnimations(this.IMAGES_IDLE);
            }
            if (this.isDead()) {
                clearInterval(idle);
                this.dead(this.IMAGES_DEAD);
            }
        }, 200);
    }
}