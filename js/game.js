let canvas;
let world;
let keyboard = new Keyboard();


function init() {}


function startGame() {
    document.getElementById('main-container').innerHTML = canvasHTML();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('canvas').classList.remove('d-none');
}

function backtoStart() {
    location.reload()
}


function openCard(HTML) {
    document.getElementById('card').innerHTML = '';
    document.getElementById('card').classList.remove('d-none');
    document.getElementById('card').innerHTML = HTML;
}


function showStory() {
    openCard(storyHTML());
}


function showKeyBindings() {
    openCard(keyBindingsHTML());
}


function showImpressum() {
    openCard(impressumHTML());
}


function showDatenschutz() {
    openCard(datenschutzHTML());
}


function closeCard() {
    document.getElementById('card').innerHTML = '';
    document.getElementById('card').classList.add('d-none');
}

function soundMute() {
    world.coin.muted = true;
    world.punch.muted = true;
    world.dragonPunch.muted = true;
    world.knife.muted = true;
    world.jump_hit.muted = true;
    world.backgroundMusic.muted = true;
    world.walking_sound.muted = true;
    world.jump_sound.muted = true;
    world.hit_sound.muted = true;
    world.fallingBones.muted = true;
    world.hit_sound_plent.muted = true;
    world.dragonRoar.muted = true;
    world.dragonGrowl.muted = true;
    world.winn.muted = true;
}


function soundOn() {
    world.coin.muted = false;
    world.punch.muted = false;
    world.dragonPunch.muted = false;
    world.knife.muted = false;
    world.jump_hit.muted = false;
    world.backgroundMusic.muted = false;
    world.walking_sound.muted = false;
    world.jump_sound.muted = false;
    world.hit_sound.muted = false;
    world.fallingBones.muted = false;
    world.hit_sound_plent.muted = false;
    world.dragonRoar.muted = false;
    world.dragonGrowl.muted = false;
    world.winn.muted = false;
}


function stopSound() {
    world.coin.pause()
    world.punch.pause();
    world.dragonPunch.pause();
    world.knife.pause();
    world.jump_hit.pause();
    world.backgroundMusic.pause();
    world.walking_sound.pause();
    world.jump_sound.pause();
    world.hit_sound.pause();
    world.fallingBones.pause();
    world.hit_sound_plent.pause();
    world.dragonRoar.pau;
    world.dragonGrowl.pause();
    world.winn.pause();
}


function fullscreen() {
}


function windowedFullscreen() {}

function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}


function doNotClose(event) {
    event.stopPropagation();
}


window.addEventListener('keydown', (e) => {
    if (e.code == 'KeyW' || e.code == 'ArrowUp') {
        keyboard.UP = true;
        e.preventDefault();
    }
    if (e.code == 'KeyA' || e.code == 'ArrowLeft') {
        keyboard.LEFT = true;
    }
    if (e.code == 'KeyS' || e.code == 'ArrowDown') {
        keyboard.DOWN = true;
        e.preventDefault();
    }
    if (e.code == 'KeyD' || e.code == 'ArrowRight') {
        keyboard.RIGHT = true;
    }
    if (e.code == 'Space') {
        keyboard.SPACE = true;
        keyboard.UP = true;
        e.preventDefault();
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


function canvasHTML() {
    return /*html*/`
        <div class="canvas-container">
            <div class="ui-buttons">
                <img id="soundMute" onclick="soundMute()" src="img/UI/music.png" alt="">
                <img id="soundOn" onclick="soundOn()" src="img/UI/music-off.png" alt="">
                <img id="fullscreen" onclick="fullscreen()" src="img/UI/fullscreen.png" alt="">
                <img id="windowed-fullscreen" onclick="windowedFullscreen()" src="img/UI/fullscreen-off.png" alt="">
            </div>
            <canvas id="canvas" class="" width="720" height="480"></canvas>
        </div>
        <button class="back-button" onclick="backtoStart()">Zurück</button>
    `;
}


function keyBindingsHTML() {
    return  /*html*/`
    <div class="story card" onclick="doNotClose(event)">
        <button onclick="closeCard()">Zurück</button>
        <div class="card-content flex space-between">
            <div class="flex column">
                <span>W / ↑ / SPACE</span>
                <span>A / ←</span>
                <span>D / →</span>
                <span>F</span>
            </div>
            <div class="flex column space-between">
                <span>Springen</span>
                <span>Nach Links</span>
                <span>Nach Rechts</span>
                <span>Pfeile schießen</span>
            </div>
        </div>
    </div>
    `
}


function storyHTML() {
    return  /*html*/`
    <div class="story card" onclick="doNotClose(event)">
        <button onclick="closeCard()">Zurück</button>
        <div class="card-content">
        <p>
            Talon, ein mutiger junger Bogenschütze, lebte in einem friedlichen Dorf, das von einer dichten
            Waldlandschaft
            umgeben war. Als das Dorf von einer finsteren Macht bedroht wurde, entschied sich Talon, sein
            Schicksal in die
            Hand zu nehmen. Inspiriert von den Legenden der alten Helden, zog er los, um das Geheimnis der
            verlorenen Welt
            zu enthüllen.
            <br>
            <br>
            Auf seiner Reise durchquerte Talon gefährliche Wälder, tiefe Schluchten und antike Ruinen, stets auf
            der Hut vor
            den Gefahren, die in der Wildnis lauerten. Sein Bogen war seine treue Waffe, während er sich mutig
            jedem
            Hindernis stellte, das sich ihm in den Weg stellte.
            <br>
            <br>
            Schließlich erreichte Talon das Herz der verlorenen Welt, wo ein uralter Drache auf ihn wartete,
            dessen finstere
            Präsenz das Land in Angst und Schrecken versetzte. Es war an Talon, sein ganzes Können und seinen
            Mut zu
            beweisen, während er sich dem Drachen im entscheidenden Kampf stellt um das Schicksal seines Dorfes
            und der Welt
            zu verändern.
        </p>
        </div>
    </div>
`;
}


function impressumHTML() {
    return  /*html*/`
    <div class="story card" onclick="doNotClose(event)">
        <button onclick="closeCard()">Zurück</button>
        <div class="card-content">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ab unde quod reiciendis modi ullam illum ratione cumque adipisci! 
                Inventore ab quaerat earum unde debitis perferendis ratione facere deserunt maiores. 
                Corporis.
            </p>
        </div>
    </div>
    `;
}


function datenschutzHTML() {
    return  /*html*/`
    <div class="story card" onclick="doNotClose(event)">
        <button onclick="closeCard()">Zurück</button>
        <div class="card-content">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ab unde quod reiciendis modi ullam illum ratione cumque adipisci! 
                Inventore ab quaerat earum unde debitis perferendis ratione facere deserunt maiores. 
                Corporis.
            </p>
        </div>
    </div>
    `;
}