class Skeleton extends MovableObject {
    y = 245;
    height = 180;
    width = 180;

    constructor() {
        super().loadImage('img/enemies/Skeleton/Walk-1.png')

        this.x = 100 + Math.random() * 500;
    }
}