class Endboss extends MovableObject {
    y = -30;
    x = 200;
    height = 650;
    width = 650;
    IMAGES_IDLE0 = [
        'img/enemie_boss/dragon/Idle1.png',
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
    IMAGES_IDLE = [
        'img/enemie_boss/dragon/Idle1.png',
        'img/enemie_boss/dragon/Idle2.png',
        'img/enemie_boss/dragon/Idle3.png',
        'img/enemie_boss/dragon/Idle4.png',
    ];
    firstContact = false;


    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.animate();
    }


    animate() {
        let i = 0;
        setInterval(() => {
            if (i < 10) {
                this.playAnimations(this.IMAGES_IDLE);
            } else {
                this.playAnimations(this.IMAGES_IDLE);
            }
            i++;
            if (world.character.x > 1400 && !firstContact) {
                i = 0;
                firstContact = true;
            }
        }, 200);
    }
}