const level1 = new Level(
    [
        new Endboss(),
        // new Skeleton(),
        // new Skeleton(),
        // new Plent(),
        // new Skeleton(),
        // new Plent(),
        // new Plent(),
    ],
    [
        new Cloud(),
    ],
    [
        // new BackgroundObject('img/5_background/layers/air.png', 0),
        // new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        // new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        // new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
        new BackgroundObject('img/5_background/parallax background/plx-1.png', -720, 0),
        new BackgroundObject('img/5_background/parallax background/plx-2.png', -720, 3),
        new BackgroundObject('img/5_background/parallax background/plx-3.png', -720, 0),
        new BackgroundObject('img/5_background/parallax background/plx-4.png', -720, 0),
        new BackgroundObject('img/5_background/parallax background/plx-5.png', -720, 0),
        new BackgroundObject('img/5_background/parallax background/plx-6.png', -720, 0),
        new BackgroundObject('img/5_background/parallax background/plx-1.png', 0, 0),
        new BackgroundObject('img/5_background/parallax background/plx-2.png', 0, 3),
        new BackgroundObject('img/5_background/parallax background/plx-3.png', 0, 0),
        new BackgroundObject('img/5_background/parallax background/plx-4.png', 0, 0),
        new BackgroundObject('img/5_background/parallax background/plx-5.png', 0, 0),
        new BackgroundObject('img/5_background/parallax background/plx-6.png', 0, 0),
        new BackgroundObject('img/5_background/parallax background/plx-1.png', 720, 0),
        new BackgroundObject('img/5_background/parallax background/plx-2.png', 720, 3),
        new BackgroundObject('img/5_background/parallax background/plx-3.png', 720, 0),
        new BackgroundObject('img/5_background/parallax background/plx-4.png', 720, 0),
        new BackgroundObject('img/5_background/parallax background/plx-5.png', 720, 0),
        new BackgroundObject('img/5_background/parallax background/plx-6.png', 720, 0),
        new BackgroundObject('img/5_background/parallax background/plx-1.png', 720*2, 0),
        new BackgroundObject('img/5_background/parallax background/plx-2.png', 720*2, 3),
        new BackgroundObject('img/5_background/parallax background/plx-3.png', 720*2, 0),
        new BackgroundObject('img/5_background/parallax background/plx-4.png', 720*2, 0),
        new BackgroundObject('img/5_background/parallax background/plx-5.png', 720*2, 0),
        new BackgroundObject('img/5_background/parallax background/plx-6.png', 720*2, 0),
    ],
    [
        new Coin(100, 200),
        new Coin(200, 200),
        new Coin(- 200, 200),
        new Arrow(400, 200),
        new Arrow(500, 200),
        new Arrow(400, 300),
        new Arrow(500, 300),
        new Arrow(300, 300),
        new Apple(200),
    ]
);