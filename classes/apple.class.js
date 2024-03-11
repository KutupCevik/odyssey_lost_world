class Apple extends MovableObject {
    width = 50;
    height = 50;
    COIN_IMAGES;
    interval;

    constructor(imagePath, width, height, x, y) {
        super().loadImage(imagePath);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
}