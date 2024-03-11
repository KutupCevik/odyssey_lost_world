class Arrow extends DrawableObject {
    width = 26;
    height = 50;
    ARROW_IMAGES = [
        'img/6_objects/Arrow1.png',
        'img/6_objects/Arrow2.png',
        'img/6_objects/Arrow3.png',
        'img/6_objects/Arrow4.png',
        'img/6_objects/Arrow5.png',
        'img/6_objects/Arrow4.png',
        'img/6_objects/Arrow3.png',
        'img/6_objects/Arrow2.png',
    ];

    constructor(x, y) {
        super().loadImage(this.ARROW_IMAGES[0]);
        this.loadImages(this.ARROW_IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimations(this.ARROW_IMAGES);
        }, 100);
    }
}