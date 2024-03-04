class Endboss extends MovableObject {
    y = 245;
    height = 236;
    width = 350;
    IMAGES_IDLE = [
        'img/enemie_boss/Troll1/Idle_000.png',
        'img/enemie_boss/Troll1/Idle_001.png',
        'img/enemie_boss/Troll1/Idle_002.png',
        'img/enemie_boss/Troll1/Idle_003.png',
        'img/enemie_boss/Troll1/Idle_004.png',
        'img/enemie_boss/Troll1/Idle_005.png',
        'img/enemie_boss/Troll1/Idle_006.png',
        'img/enemie_boss/Troll1/Idle_007.png',
        'img/enemie_boss/Troll1/Idle_008.png',
        'img/enemie_boss/Troll1/Idle_009.png',
    ];


    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);

        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT == false && this.world.keyboard.LEFT == false) {
                let i = this.currentImage % this.IMAGES_IDLE.length;
                let path = this.IMAGES_IDLE[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 100);
    }

    jump() {}
}