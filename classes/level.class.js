/**
 * Class representing a game level.
 */
class Level {
    enemies;
    clouds;
    backgroundObjects;
    lyingObjects;
    level_end_x = 3000;

    /**
     * Constructor for the Level class.
     * @param {Array} enemies - Array of enemies in the level.
     * @param {Array} clouds - Array of clouds in the level.
     * @param {Array} backgroundObjects - Array of background objects in the level.
     * @param {Array} lyingObjects - Array of lying objects in the level.
     */
    constructor(enemies, clouds, backgroundObjects, lyingObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.lyingObjects = lyingObjects;
    }
}