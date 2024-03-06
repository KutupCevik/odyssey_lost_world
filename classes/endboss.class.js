class Endboss extends MovableObject {
    y = -30;
    x = 200;
    height = 650;
    width = 650;
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