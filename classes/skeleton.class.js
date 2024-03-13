class Skeleton extends MovableObject {
    y = 265;
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
    hit_sound = new Audio('audio/knife.mp3');
    fallingBones = new Audio('audio/bone-crack.mp3');
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

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 1000 + Math.random() * 1500;
        this.speed = 0.15 + Math.random() * 0.25;
    }

    animate() {
        let sixtyFPS = setInterval(() => {
            if (!this.isHurt() && !this.isColliding(this.world.character)) {
                this.moveLeft();
            }
            if (this.isDead()) {
                clearInterval(sixtyFPS);
            }
        }, 1000 / 60);

        let move = setInterval(() => {
            if (this.isHurt()) {
                this.playAnimations(this.IMAGES_HURT);
            } else
                if (this.isColliding(this.world.character) && !this.world.character.isDead()) {
                    this.playAnimations(this.IMAGES_ATTACK);
                    this.hit_sound.play();
                }
                else {
                    this.playAnimations(this.IMAGES_WALKING);
                }

            if (this.isDead()) {
                this.fallingBones.play();
                clearInterval(move);
                this.dead(this.IMAGES_DEAD);
            }
        }, 100);
    }
}