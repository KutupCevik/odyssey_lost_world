class Apple extends MovableObject {
    width = 30;
    height = 30;
    y = 420;
    interval;

    constructor(x) {
        super().loadImage('img/6_objects/apple.png');
        this.x = x;
    }
}