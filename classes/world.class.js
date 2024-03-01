class World {
    character = new Character();
    enemies = [
        new Skeleton(),
        new Skeleton(),
        new Skeleton(),
    ];
    clouds = [
        new Cloud(),
    ];
    backgroundObjects = [
        // new BackgroundObject('img/5_background/layers/air.png', 0),
        // new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        // new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        // new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
        new BackgroundObject('img/Jungle Asset Pack/parallax background/plx-1.png', 0),
        new BackgroundObject('img/Jungle Asset Pack/parallax background/plx-2.png', 0),
        new BackgroundObject('img/Jungle Asset Pack/parallax background/plx-3.png', 0),
        new BackgroundObject('img/Jungle Asset Pack/parallax background/plx-4.png', 0),
        new BackgroundObject('img/Jungle Asset Pack/parallax background/plx-5.png', 0),
        new BackgroundObject('img/Jungle Asset Pack/parallax background/plx-6.png', 0),
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        requestAnimationFrame(() => {
            this.draw();
        })
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mO) {
        this.ctx.drawImage(mO.img, mO.x, mO.y, mO.width, mO.height)
    }
}