class Skeleton extends MovableObject {
    y = 265;
    height = 180;
    width = 180;
    IMAGES_WALKING = [
        'img/enemies/Skeleton/Walk-1.png',
        'img/enemies/Skeleton/Walk-2.png',
        'img/enemies/Skeleton/Walk-3.png',
        'img/enemies/Skeleton/Walk-4.png',
        'img/enemies/Skeleton/Walk-5.png',
        'img/enemies/Skeleton/Walk-6.png',
        'img/enemies/Skeleton/Walk-7.png',
        'img/enemies/Skeleton/Walk-8.png',
    ];

    constructor() {
        super().loadImage('img/enemies/Skeleton/Walk-1.png')
        this.loadImages(this.IMAGES_WALKING);
        this.x = 100 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60)
    }
}