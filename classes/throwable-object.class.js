class ThrowableObject extends MovableObject {

    constructor(x, y) {
        super().loadImage('img/chibi-male-sprites/Archer/Arrow.png');
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 100;
        this.trow();
    }

    trow() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 20);
    }
}