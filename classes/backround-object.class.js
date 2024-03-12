class BackgroundObject extends MovableObject {
    width = 720;
    height = 480;
    x;
    camera_x = 0;

    constructor(imagePath, x, paralax) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
        this.paralax = paralax;
    }
}