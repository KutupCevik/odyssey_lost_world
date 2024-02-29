class Cloud extends MovableObject {

    y = 20;
    width = 400;
    height = 250

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png')

        this.x = 100 + Math.random() * 500;
    }

    // img/5_background/layers/4_clouds/1.png
}