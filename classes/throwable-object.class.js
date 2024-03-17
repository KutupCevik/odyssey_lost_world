/**
 * Class representing a throwable object.
 * @memberof MovableObject
 * @extends MovableObject
 */
class ThrowableObject extends MovableObject {
    imgs;

    /**
     * Creates an instance of ThrowableObject.
     * @param {string[]} img - Array of image paths representing different states of the throwable object.
     * @param {number} x - X-coordinate of the throwable object.
     * @param {number} y - Y-coordinate of the throwable object.
     * @param {boolean} od - Indicates the direction of the throwable object. If true, it moves leftward; otherwise, it moves rightward.
     */
    constructor(img, x, y, od) {
        super().loadImage(img[0]);
        this.x = x;
        this.y = y;
        this.height = 70;
        this.width = 70;
        this.imgs = img;
        this.offset = {
            top: 30,
            left: 80,
            right: 0,
            bottom: 30,
        };
        this.loadImages(img);
        this.throw(od);
    }

    /**
     * Throws the throwable object in the specified direction.
     * @param {boolean} od - Indicates the direction of the throwable object. If true, it moves leftward; otherwise, it moves rightward.
     */
    throw(od) {
        this.speedY = 0;
        this.acceleration = 1;
        this.applyGravity();
        if (od) {
            setInterval(() => {
                this.x -= 40;
            }, 20);
        } else {
            setInterval(() => {
                this.x += 40;
            }, 20);
        }
        setInterval(() => {
            this.playAnimations(this.imgs);
        }, 200);
    }
}