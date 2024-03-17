/**
 * Class representing an apple object.
 * @memberof MovableObject
 * @extends MovableObject
 */
class Apple extends MovableObject {
    width = 30;
    height = 30;
    y = 395;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    /**
     * Constructor for the Apple class.
     * @param {number} x - The x-coordinate of the apple.
     */
    constructor(x) {
        super().loadImage('img/6_objects/apple.png');
        this.x = x;
    }
}