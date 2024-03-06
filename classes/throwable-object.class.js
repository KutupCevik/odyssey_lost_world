class ThrowableObject extends MovableObject {

    constructor(x, y) {
        super().loadImage('img/chibi-male-sprites/Archer/Arrow.png');
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 100;
        this.offset = {
            top: 50,
            left: 80,
            right: 0,
            bottom: 45,
        };
        this.trow();
    }

    trow() {
        this.speedY = 10;
        this.applyGravity();
        setInterval(() => {
            this.x += 30;
        }, 20);
    }
}