let canvas;
// let ctx;
let world;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
    // ctx = canvas.getContext("2d");


    console.log('My Character is', world.character);


    // character.src = '../img/2_character_pepe/2_walk/W-21.png';

    // ctx.drawImage(character, 20, 20, 50, 150);
}