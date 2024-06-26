const level1 = new Level(
    [
        new Endboss(),
        new Skeleton(),
        new Skeleton(),
        new Plent(),
        new Skeleton(),
        new Plent(),
        new Skeleton(),
        new Plent(),
        new Plent(),
    ],
    [
        new Cloud(),
    ],
    [
        new BackgroundObject('img/5_background/parallax background/plx-1.png', -719, 0),
        new BackgroundObject('img/5_background/parallax background/plx-1.png', 0, 0),
        new BackgroundObject('img/5_background/parallax background/plx-1.png', 719, 0),
        new BackgroundObject('img/5_background/parallax background/plx-1.png', 719 * 2, 0),
        new BackgroundObject('img/5_background/parallax background/plx-1.png', 719 * 3, 0),
        new BackgroundObject('img/5_background/parallax background/plx-1.png', 719 * 4, 0),
        new BackgroundObject('img/5_background/parallax background/plx-1.png', 719 * 5, 0),

        new BackgroundObject('img/5_background/parallax background/plx-2.png', -719, 3),
        new BackgroundObject('img/5_background/parallax background/plx-2.png', 0, 3),
        new BackgroundObject('img/5_background/parallax background/plx-2.png', 719, 3),
        new BackgroundObject('img/5_background/parallax background/plx-2.png', 719 * 2, 3),
        new BackgroundObject('img/5_background/parallax background/plx-2.png', 719 * 3, 3),
        new BackgroundObject('img/5_background/parallax background/plx-2.png', 719 * 4, 3),
        new BackgroundObject('img/5_background/parallax background/plx-2.png', 719 * 5, 3),

        new BackgroundObject('img/5_background/parallax background/plx-3.png', -719, 0),
        new BackgroundObject('img/5_background/parallax background/plx-3.png', 0, 0),
        new BackgroundObject('img/5_background/parallax background/plx-3.png', 719, 0),
        new BackgroundObject('img/5_background/parallax background/plx-3.png', 719 * 2, 0),
        new BackgroundObject('img/5_background/parallax background/plx-3.png', 719 * 3, 0),
        new BackgroundObject('img/5_background/parallax background/plx-3.png', 719 * 4, 0),
        new BackgroundObject('img/5_background/parallax background/plx-3.png', 719 * 5, 0),

        new BackgroundObject('img/5_background/parallax background/plx-4.png', -719, 0),
        new BackgroundObject('img/5_background/parallax background/plx-4.png', 0, 0),
        new BackgroundObject('img/5_background/parallax background/plx-4.png', 719, 0),
        new BackgroundObject('img/5_background/parallax background/plx-4.png', 719 * 2, 0),
        new BackgroundObject('img/5_background/parallax background/plx-4.png', 719 * 3, 0),
        new BackgroundObject('img/5_background/parallax background/plx-4.png', 719 * 4, 0),
        new BackgroundObject('img/5_background/parallax background/plx-4.png', 719 * 5, 0),

        new BackgroundObject('img/5_background/parallax background/plx-5.png', -719, 0),
        new BackgroundObject('img/5_background/parallax background/plx-5.png', 0, 0),
        new BackgroundObject('img/5_background/parallax background/plx-5.png', 719, 0),
        new BackgroundObject('img/5_background/parallax background/plx-5.png', 719 * 2, 0),
        new BackgroundObject('img/5_background/parallax background/plx-5.png', 719 * 3, 0),
        new BackgroundObject('img/5_background/parallax background/plx-5.png', 719 * 4, 0),
        new BackgroundObject('img/5_background/parallax background/plx-5.png', 719 * 5, 0),

        new BackgroundObject('img/5_background/parallax background/plx-6.21.png', -719, 0),
        new BackgroundObject('img/5_background/parallax background/plx-6.21.png', 0, 0),
        new BackgroundObject('img/5_background/parallax background/plx-6.21.png', 719, 0),
        new BackgroundObject('img/5_background/parallax background/plx-6.21.png', 719 * 2, 0),
        new BackgroundObject('img/5_background/parallax background/plx-6.21.png', 719 * 3, 0),
        new BackgroundObject('img/5_background/parallax background/plx-6.21.png', 719 * 4, 0),
        new BackgroundObject('img/5_background/parallax background/plx-6.21.png', 719 * 5, 0),
    ],
    [
        new Coin(-200, 200),
        new Coin(-150, 220),
        new Coin(-100, 240),
        new Coin(-50, 250),
        new Coin(0, 250),
        new Coin(50, 250),
        new Coin(100, 240),
        new Coin(150, 220),
        new Coin(200, 150),
        new Coin(200, 200),
        new Coin(200, 250),
        new Coin(150, 160),
        new Coin(100, 170),
        new Coin(- 600, 170),

        new Coin(1050, 200),
        new Coin(1000, 220),
        new Coin(950, 240),
        new Coin(900, 250),
        new Coin(850, 250),
        new Coin(800, 240),
        new Coin(750, 220),
        new Coin(700, 200),

        new Coin(1550, 200),
        new Coin(1600, 250),
        new Coin(1600, 150),
        new Coin(1650, 200),

        new Coin(1950, 200),
        new Coin(2000, 250),
        new Coin(2000, 200),
        new Coin(2050, 200),

        new Arrow(-500, 165),
        new Arrow(-440, 165),
        new Arrow(-380, 165),
        new Arrow(-320, 165),
        new Arrow(-500, 250),
        new Arrow(-440, 250),
        new Arrow(-380, 250),
        new Arrow(-320, 250),
        new Arrow(260, 140),
        new Arrow(400, 350),
        new Arrow(660, 170),
        new Arrow(1100, 170),
        new Arrow(1605, 195),
        new Arrow(2010, 140),

        new Apple(- 600),
        new Apple(200),
        new Apple(1000),
        new Apple(2000),
    ]
);