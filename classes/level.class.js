class Level {
    enemies;
    clouds;
    backgroundObjects;
    lyingObjects;
    level_end_x = 1440;

    constructor(enemies, clouds, backgroundObjects, lyingObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.lyingObjects = lyingObjects;
    }
}