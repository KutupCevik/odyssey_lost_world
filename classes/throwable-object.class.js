class ThrowableObject extends MovableObject {
    imgs;
    constructor(img, x, y, od) {
        super().loadImage(img[0]);
        this.x = x;
        this.y = y; 
        this.height = 70;
        this.width = 70;
        this.imgs = img;
        this.offset = {
            top: 30,
            left: 80,
            right: 0,
            bottom: 30,
        };
        this.loadImages(img);
        this.trow(od);
    }

    trow(od) {
        this.speedY = 0;
        this.acceleration = 1;
        this.applyGravity();
        if (od) {
            setInterval(() => {
                this.x -= 40;
            }, 20);
        } else {
            setInterval(() => {
                this.x += 40;
            }, 20);
        }
        setInterval(() => {
            this.playAnimations(this.imgs);
        }, 200);
    }
}