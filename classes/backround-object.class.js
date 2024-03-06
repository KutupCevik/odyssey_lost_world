class BackgroundObject extends MovableObject {
    width = 720;
    height = 480;

    constructor(imagePath, x, paralax) {
        super().loadImage(imagePath, paralax);
        this.x = x;
        this.y = 480 - this.height;
    }
}