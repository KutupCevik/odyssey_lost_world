class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    F = false;

    constructor() {
        // this.bindBtsPressEvents();
    }

    bindBtsPressEvents() {
        document.getElementById('left-button').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.LEFT = true;
        });
    
        document.getElementById('left-button').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.LEFT = false;
        });
    
        document.getElementById('right-button').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.RIGHT = true;
        });
    
        document.getElementById('right-button').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.RIGHT = false;
        });
    
        document.getElementById('up-button').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.UP = true;
        });
    
        document.getElementById('up-button').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.UP = false;
        });
    
        document.getElementById('shoot-button').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.F = true;
        });
    
        document.getElementById('shoot-button').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.F = false;
        });
    }
}