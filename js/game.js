let canvas;
let world;
let keyboard = new Keyboard();


function init() { }


function startGame() {
    document.getElementById('main-container').innerHTML = canvasHTML();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


function winScreen() {
    document.getElementById('main-container').innerHTML = winScreenHTML();
}


function looseScreen() {
    document.getElementById('main-container').innerHTML = looseScreenHTML();
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
    document.getElementById('sound').src = 'img/UI/music-off.png';
    document.getElementById('sound').setAttribute('onclick', 'soundOn()')
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
    world.loose.muted = true;

}


function soundOn() {
    document.getElementById('sound').src = 'img/UI/music.png';
    document.getElementById('sound').setAttribute('onclick', 'soundMute()')
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
    world.loose.muted = false;
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
}


function enterFullscreen() {
    if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
    } else if (canvas.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
        canvas.msRequestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {  // iOS Safari
        canvas.webkitRequestFullscreen();
    }
}


function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}


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
                <img id="sound" onclick="soundMute()" src="img/UI/music.png" alt="">
                <img id="fullscreen" onclick="enterFullscreen()" src="img/UI/fullscreen.png" alt="">
                <img id="back-button" class="back-button" onclick="backtoStart()" src="img/UI/close.png" alt="">
            </div>
            <div class="hud-buttons">
            <div class="hud-buttons-segment">
                <img id="left-button" class="hud-button" src="img/UI/hud/left-arrow.png" alt="">
                <img id="right-button" class="hud-button" src="img/UI/hud/right-arrow.png" alt="">
            </div>
            <div class="hud-buttons-segment">
                <img id="up-button" class="hud-button" src="img/UI/hud/up-arrow.png" alt="">
                <img id="shott-button" class="hud-button" src="img/UI/hud/aim.png" alt="">
            </div>
    </div>
            <canvas id="canvas" class="" width="720" height="480"></canvas>
        </div>
    `;
}


function winScreenHTML() {
    return /*html*/`
        <div class="endscreen">
            <span>You Win!</span>
            <button onclick="backtoStart()">Back to Lobby</button>
        </div>
    `;
}


function looseScreenHTML() {
    return /*html*/`
    <div class="endscreen">
        <span>You Loosw!</span>
        <button onclick="backtoStart()">Back to Lobby</button>
    </div>
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