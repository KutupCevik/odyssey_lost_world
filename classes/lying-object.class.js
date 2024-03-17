/**
 * Class representing a lying object.
 * @memberof MovableObject
 * @extends MovableObject
 */
class LyingObject extends MovableObject {
    width = 50;
    height = 50;
    COIN_IMAGES;
    interval;

    /**
     * Constructor for the LyingObject class.
     * @param {Array} imagePath - Array of image paths for animation.
     * @param {number} width - The width of the lying object.
     * @param {number} height - The height of the lying object.
     * @param {number} x - The x-coordinate of the lying object.
     * @param {number} y - The y-coordinate of the lying object.
     * @param {number} interval - The interval for animation.
     */
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

    /**
     * Animates the lying object by playing animations at regular intervals.
     */
    animate() {
        setInterval(() => {
            this.playAnimations(this.COIN_IMAGES);
        }, this.interval);
    }
}