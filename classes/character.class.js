class Character extends MovableObject {
    x = 0;
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
    currentImage = 0;

    constructor() {
        super().loadImage('img/chibi-male-sprites/Archer/1_idle/Idle-1.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }

    jump() {}
}