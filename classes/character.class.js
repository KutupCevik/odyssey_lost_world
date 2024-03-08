class Character extends MovableObject {
    x = 0;
    y = 230;
    world;
    speed = 5.2;
    walking_sound = new Audio('audio/footsteps.mp3');
    offset = {
        top: 85,
        left: 60,
        right: 70,
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
    // switchImages = false;

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

    animate() {
        let sixtyFPS = setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.changePlaybackRate(this.walking_sound, 1.5);
                this.changeVolume(this.walking_sound, 0.5);
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > -680) {
                this.moveLeft();
                this.otherDirection = true;
                this.changePlaybackRate(this.walking_sound, 1.5);
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 30;
            if (this.isDead()) {
                clearInterval(sixtyFPS);
                this.walking_sound.pause();
            }
        }, 1000 / 60);

        let idle = setInterval(() => {
            if (this.world.keyboard.RIGHT == false && this.world.keyboard.LEFT == false) {
                this.playAnimations(this.IMAGES_IDLE);
            }
            if (this.isAboveGround()) {
                this.playAnimations(this.IMAGES_JUMP);
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimations(this.IMAGES_WALKING);
                }
                if (this.world.keyboard.UP && !this.isAboveGround()) {
                    this.jump(30);
                }
            }
            if (this.isHurt()) {
                this.playAnimations(this.IMAGES_HURT);
            }
            if (this.world.keyboard.F && !this.isDead()) {
                this.playAnimations(this.IMAGES_ATTACK);
            }
            if (this.isDead()) {
                clearInterval(idle);
                this.dead(this.IMAGES_DEAD);
                setTimeout(() => {
                this.clearAllIntervals();
                }, 1000);
            }
        }, 100);
    }
    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }
}