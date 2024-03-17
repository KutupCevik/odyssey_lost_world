/**
 * Class representing a cloud object.
 * @memberof MovableObject
 * @extends MovableObject
 */
class Cloud extends MovableObject {
    y = 20;
    width = 400;
    height = 250;

    /**
     * Constructor for the Cloud class.
     */
    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = 100 + Math.random() * 500;
        this.animate();
    }

    /**
     * Animates the cloud by moving it to the left at regular intervals.
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}