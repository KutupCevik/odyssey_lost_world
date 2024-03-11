class Coin extends DrawableObject {
    width = 40;
    height = 40;
    COIN_IMAGES = [
        'img/6_objects/gold coin/coin1.png',
        'img/6_objects/gold coin/coin2.png',
        'img/6_objects/gold coin/coin3.png',
        'img/6_objects/gold coin/coin4.png',
        'img/6_objects/gold coin/coin5.png',
        'img/6_objects/gold coin/coin6.png',
    ];

    constructor(x, y) {
        super().loadImage(this.COIN_IMAGES[0]);
        this.loadImages(this.COIN_IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimations(this.COIN_IMAGES);
        }, 110);
    }
}