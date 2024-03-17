/**
 * Class representing a status bar.
 * @memberof DrawableObject
 * @extends DrawableObject
 */
class StatusBar extends DrawableObject {
    x = 10;
    y = 0;
    width = 200;
    height = 60;
    percentage = 100;
    statusBarImgs = [];

    /**
     * Creates an instance of StatusBar.
     * @param {string[]} statusBarImgs - Array of image paths representing different states of the status bar.
     * @param {number} width - Width of the status bar.
     * @param {number} height - Height of the status bar.
     * @param {number} x - X-coordinate of the status bar.
     * @param {number} y - Y-coordinate of the status bar.
     * @param {number} percentage - Initial percentage value of the status bar.
     */
    constructor(statusBarImgs, width, height, x, y, percentage) {
        super();
        this.statusBarImgs = statusBarImgs;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.loadImages(this.statusBarImgs)
        this.setPercentage(percentage, this.statusBarImgs);
    }

    /**
     * Sets the percentage value of the status bar and updates the displayed image accordingly.
     * @param {number} percentage - The new percentage value of the status bar.
     * @param {string[]} statusBarImgs - Array of image paths representing different states of the status bar.
     */
    setPercentage(percentage, statusBarImgs) {
        this.percentage = percentage;
        let path = statusBarImgs[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Resolves the index of the image to be displayed based on the current percentage value.
     * @returns {number} The index of the image to be displayed.
     */
    resolveImageIndex() {
        if (this.percentage >= 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 1) {
            return 1;
        } else return 0;
    }
}