class Character extends MovableObject {
    x = 0;
    IMAGES_IDLE = [
        'img/chibi-male-sprites/Archer/1_idle/Idle-1.png',
        'img/chibi-male-sprites/Archer/1_idle/Idle-2.png',
        'img/chibi-male-sprites/Archer/1_idle/Idle-3.png',
        'img/chibi-male-sprites/Archer/1_idle/Idle-4.png',
        'img/chibi-male-sprites/Archer/1_idle/Idle-5.png',
        'img/chibi-male-sprites/Archer/1_idle/Idle-6.png',
    ];
    IMAGES_IDLE_2 = [
        'img/chibi-male-sprites/Archer/1_idle/Idle_2-2.png',
        'img/chibi-male-sprites/Archer/1_idle/Idle_2-3.png',
        'img/chibi-male-sprites/Archer/1_idle/Idle_2-4.png',
        'img/chibi-male-sprites/Archer/1_idle/Idle_2-1.png',
        'img/chibi-male-sprites/Archer/1_idle/Idle_2-1.png',
    ];
    IMAGES_WALKING = [
        'img/chibi-male-sprites/Archer/2_walk/Walk-1.png',
        'img/chibi-male-sprites/Archer/2_walk/Walk-2.png',
        'img/chibi-male-sprites/Archer/2_walk/Walk-3.png',
        'img/chibi-male-sprites/Archer/2_walk/Walk-4.png',
        'img/chibi-male-sprites/Archer/2_walk/Walk-5.png',
        'img/chibi-male-sprites/Archer/2_walk/Walk-6.png',
        'img/chibi-male-sprites/Archer/2_walk/Walk-7.png',
        'img/chibi-male-sprites/Archer/2_walk/Walk-8.png',
    ];
    world;
    speed = 1.2;
    walking_sound = new Audio('audio/footsteps.mp3');
    // switchImages = false;

    constructor() {
        super().loadImage('img/chibi-male-sprites/Archer/1_idle/Idle-1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_IDLE_2);

        this.animate();
    }

    animate() {
        // setTimeout(() => {
        //     this.switchImages = true;
        // }, 2000);

        setInterval(() => {
            if (this.world.keyboard.RIGHT == false && this.world.keyboard.LEFT == false) {
                this.playAnimations(this.IMAGES_IDLE);
            }
        }, 100);

        // setInterval(() => {
        //     if (this.world.keyboard.RIGHT == false && this.world.keyboard.LEFT == false) {
        //         let i;
        //         let path;
        //         if (this.switchImages) {
        //             i = this.currentImage % this.IMAGES_IDLE_2.length;
        //             path = this.IMAGES_IDLE_2[i];
        //         } else {
        //             i = this.currentImage % this.IMAGES_IDLE.length;
        //             path = this.IMAGES_IDLE[i];
        //         }
        //         this.img = this.imageCache[path];
        //         this.currentImage++;
        //     }
        // }, 500);

        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > -100) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 30;
        }, 1000 / 600);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimations(this.IMAGES_WALKING);
            }
        }, 100);
    }

    jump() { }
}