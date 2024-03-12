class Apple extends MovableObject {
    width = 30;
    height = 30;
    y = 420;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    constructor(x) {
        super().loadImage('img/6_objects/apple.png');
        this.x = x;
    }
}