/**
 * Class representing a coin object.
 * @memberof DrawableObject
 * @extends DrawableObject
 */
class Coin extends DrawableObject {
    width = 40;
    height = 40;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };
    COIN_IMAGES = [
        'img/6_objects/gold coin/coin1.png',
        'img/6_objects/gold coin/coin2.png',
        'img/6_objects/gold coin/coin3.png',
        'img/6_objects/gold coin/coin4.png',
        'img/6_objects/gold coin/coin5.png',
        'img/6_objects/gold coin/coin6.png',
    ];

    /**
     * Constructor for the Coin class.
     * @param {number} x - The x-coordinate of the coin.
     * @param {number} y - The y-coordinate of the coin.
     */
    constructor(x, y) {
        super().loadImage(this.COIN_IMAGES[0]);
        this.loadImages(this.COIN_IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
    }

    /**
     * Animates the coin by playing animations for coin images at regular intervals.
     */
    animate() {
        setInterval(() => {
            this.playAnimations(this.COIN_IMAGES);
        }, 110);
    }
}