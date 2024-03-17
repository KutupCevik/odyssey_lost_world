/**
 * Class representing an arrow object with animation capabilities.
 * @memberof DrawableObject
 * @extends DrawableObject
 */
class Arrow extends DrawableObject {
    width = 26;
    height = 50;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };
    ARROW_IMAGES = [
        'img/6_objects/Arrow1.png',
        'img/6_objects/Arrow2.png',
        'img/6_objects/Arrow3.png',
        'img/6_objects/Arrow4.png',
        'img/6_objects/Arrow5.png',
        'img/6_objects/Arrow4.png',
        'img/6_objects/Arrow3.png',
        'img/6_objects/Arrow2.png',
    ];

    /**
     * Constructor for the Arrow class.
     * @param {number} x - The x-coordinate of the arrow.
     * @param {number} y - The y-coordinate of the arrow.
     */
    constructor(x, y) {
        super().loadImage(this.ARROW_IMAGES[0]);
        this.loadImages(this.ARROW_IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
    }

    /**
     * Animates the arrow by playing animations for arrow images at regular intervals.
     */
    animate() {
        setInterval(() => {
            this.playAnimations(this.ARROW_IMAGES);
        }, 100);
    }
}