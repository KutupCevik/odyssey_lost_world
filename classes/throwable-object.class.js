class ThrowableObject extends MovableObject {
    constructor(x, y) {
        super().loadImage('img/2_character/Archer/Arrow.png');
        this.x = x;
        this.y = y;
        this.height = 70;
        this.width = 70;
        this.offset = {
            top: 30,
            left: 80,
            right: 0,
            bottom: 30,
        };
        this.trow();
    }

    trow() {
        this.speedY = 0;
        this.acceleration = 1;
        this.applyGravity();
        setInterval(() => {
            this.x += 40;
        }, 20);
    }
}