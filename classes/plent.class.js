class Plent extends MovableObject {
    y = 285;
    height = 160;
    width = 160;
    hit_sound = new Audio('audio/enemy_punch.mp3');
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

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 300 + Math.random() * 2000;
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
            if (this.isColliding(this.world.character) && !this.world.character.isDead()) {
                this.playAnimations(this.IMAGES_ATTACK);
                this.hit_sound.play();
                setTimeout(() => {
                    this.hit_sound.pause();
                }, 1000);
            }
            else {
                this.playAnimations(this.IMAGES_WALKING);
            }
            if (this.isDead()) {
                clearInterval(move);
                this.dead(this.IMAGES_DEAD);
            }
        }, 100);
    }
}