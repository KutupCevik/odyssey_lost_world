class Skeleton extends MovableObject {
    y = 265;
    height = 180;
    width = 180;
    offset = {
        top: 85,
        left: 60,
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
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        let sixtyFPS = setInterval(() => {
            this.moveLeft();
            if (this.isDead()) {
                clearInterval(sixtyFPS);
            }
        }, 1000 / 60);
        
        let move = setInterval(() => {
            if (this.isHurt()) {
                this.playAnimations(this.IMAGES_HURT);
            } else {
                this.playAnimations(this.IMAGES_WALKING);
            }
            if (this.isDead()) {
                clearInterval(move);
                this.dead(this.IMAGES_DEAD);
            }
        }, 100);
    }
}