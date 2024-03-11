class Arrow extends DrawableObject {
    width = 50;
    height = 50;
    COIN_IMAGES;
    interval;

    constructor(imagePath, width, height, x, y, interval) {
        super().loadImage(imagePath[0]);
        this.COIN_IMAGES = imagePath;
        this.loadImages(this.COIN_IMAGES);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.interval = interval;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimations(this.COIN_IMAGES);
        }, this.interval);
    }
}