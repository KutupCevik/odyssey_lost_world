let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log('My Character is', world.character);
}

window.addEventListener('keydown', (e) => {
    console.log(e.code);
    if (e.code == 'KeyW' || e.code == 'ArrowUp') {
        keyboard.UP = true;
    }
    if (e.code == 'KeyA' || e.code == 'ArrowLeft') {
        keyboard.LEFT = true;
    }
    if (e.code == 'KeyS' || e.code == 'ArrowDown') {
        keyboard.DOWN = true;
    }
    if (e.code == 'KeyD' || e.code == 'ArrowRight') {
        keyboard.RIGHT = true;
    }
    if (e.code == 'Space') {
        keyboard.SPACE = true;
        keyboard.UP = true;
    }
    if (e.code == 'KeyF') {
        keyboard.F = true;
    }
});

window.addEventListener('keyup', (e) => {
    if (e.code == 'KeyW' || e.code == 'ArrowUp') {
        keyboard.UP = false;
    }
    if (e.code == 'KeyA' || e.code == 'ArrowLeft') {
        keyboard.LEFT = false;
    }
    if (e.code == 'KeyS' || e.code == 'ArrowDown') {
        keyboard.DOWN = false;
    }
    if (e.code == 'KeyD' || e.code == 'ArrowRight') {
        keyboard.RIGHT = false;
    }
    if (e.code == 'Space') {
        keyboard.UP = false;
        keyboard.SPACE = false;
    }
    if (e.code == 'KeyF') {
        keyboard.F = false;
    }
});