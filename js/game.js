let canvas;
let world;
let hud;
let keyboard = new Keyboard();
let intervalID = [];


/**
 * Function to start the game.
 */
function startGame() {
    const mainContainer = document.getElementById('main-container');
    
    /**
     * Shows the HUD buttons and binds events if the device is a smartphone in landscape mode.
     */
    const showHUDButtonsAndBindEvents = () => {
        if (isSmartphone() && isLandscape()) {
            hudButtons();
            bindBtsPressEvents();
        }
    };

    /**
     * Shows a warning if the device is a smartphone in portrait mode, or starts the game.
     */
    const showPortraitWarning = () => {
        if (isSmartphone() && isPortrait()) {
            mainContainer.innerHTML = rotatePhoneHTML();
        } else {
            mainContainer.innerHTML = '';
            mainContainer.innerHTML = canvasHTML();
            canvas = document.getElementById('canvas');
            world = new World(canvas, keyboard);
            showHUDButtonsAndBindEvents();
        }
    };

    /**
     * Checks if the device is a smartphone.
     * @returns {boolean} - True if the device is a smartphone, otherwise false.
     */
    const isSmartphone = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    /**
     * Checks if the device is in landscape mode.
     * @returns {boolean} - True if the device is in landscape mode, otherwise false.
     */
    const isLandscape = () => screen.orientation && screen.orientation.type.includes("landscape");

    /**
     * Checks if the device is in portrait mode.
     * @returns {boolean} - True if the device is in portrait mode, otherwise false.
     */
    const isPortrait = () => screen.orientation && screen.orientation.type.includes("portrait");

    showPortraitWarning();

    // Event listener for screen orientation changes
    window.addEventListener("orientationchange", () => {
        backtoStart();
    });
}

/**
 * Function to display the HUD buttons.
 */
function hudButtons() {
    let hud = document.getElementById('hud-buttons');
    hud.innerHTML = hudButtonsHTML();
}

/**
 * Function to display the win screen.
 */
function winScreen() {
    document.getElementById('main-container').innerHTML = winScreenHTML();
}

/**
 * Function to display the lose screen.
 */
function looseScreen() {
    document.getElementById('main-container').innerHTML = looseScreenHTML();
}

/**
 * Function to return to the start screen.
 */
function backtoStart() {
    location.reload()
}

/**
 * Function to open a card (e.g., story, key bindings, impressum, datenschutz).
 * @param {string} HTML - The HTML code of the card.
 */
function openCard(HTML) {
    document.getElementById('card').innerHTML = '';
    document.getElementById('card').classList.remove('d-none');
    document.getElementById('card').innerHTML = HTML;
}

/**
 * Function to display the story of the game.
 */
function showStory() {
    openCard(storyHTML());
}

/**
 * Function to display the key bindings.
 */
function showKeyBindings() {
    openCard(keyBindingsHTML());
}

/**
 * Function to display the impressum.
 */
function showImpressum() {
    openCard(impressumHTML());
}

/**
 * Function to display the datenschutz.
 */
function showDatenschutz() {
    openCard(datenschutzHTML());
}

/**
 * Function to close the card.
 */
function closeCard() {
    document.getElementById('card').innerHTML = '';
    document.getElementById('card').classList.add('d-none');
}

/**
 * Function to enter fullscreen mode.
 */
function enterFullscreen() {
    if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
    } else if (canvas.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
        canvas.msRequestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {  // iOS Safari
        canvas.webkitRequestFullscreen();
    }
}

/**
 * Function to exit fullscreen mode.
 */
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

/**
 * Function to set a stoppable interval.
 * @param {Function} fn - The function to be executed.
 * @param {number} time - The interval time in milliseconds.
 */
function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalID.push(id);
}

/**
 * Function to clear all intervals.
 */
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

/**
 * Function to prevent event propagation.
 * @param {Event} event - The event object.
 */
function doNotClose(event) {
    event.stopPropagation();
}

/**
 * Function to mute all sounds.
 */
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

/**
 * Function to turn on sound.
 */
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

/**
 * Function to stop all sounds.
 */
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

/**
 * Event listener for keydown events.
 */
window.addEventListener('keydown', (e) => {
    if (e.code == 'KeyW' || e.code == 'ArrowUp') {
        keyboard.UP = true;
        e.preventDefault();
    }
    if (e.code == 'KeyA' || e.code == 'ArrowLeft')
        keyboard.LEFT = true;
    if (e.code == 'KeyS' || e.code == 'ArrowDown')
        keyboard.DOWN = true;
        e.preventDefault();
    if (e.code == 'KeyD' || e.code == 'ArrowRight')
        keyboard.RIGHT = true;
    if (e.code == 'Space') {
        keyboard.SPACE = true;
        keyboard.UP = true;
        e.preventDefault();
    }
    if (e.code == 'KeyF')
        keyboard.F = true;
});

/**
 * Event listener for keyup events.
 */
window.addEventListener('keyup', (e) => {
    if (e.code == 'KeyW' || e.code == 'ArrowUp')
        keyboard.UP = false;
    if (e.code == 'KeyA' || e.code == 'ArrowLeft')
        keyboard.LEFT = false;
    if (e.code == 'KeyS' || e.code == 'ArrowDown')
        keyboard.DOWN = false;
    if (e.code == 'KeyD' || e.code == 'ArrowRight')
        keyboard.RIGHT = false;
    if (e.code == 'Space') {
        keyboard.UP = false;
        keyboard.SPACE = false;
    }
    if (e.code == 'KeyF')
        keyboard.F = false;
});

/**
 * Function to bind button press events for touchscreen devices.
 */
function bindBtsPressEvents() {
    document.getElementById('left-button').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });
    document.getElementById('left-button').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });
    document.getElementById('right-button').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    document.getElementById('right-button').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });
    document.getElementById('up-button').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.UP = true;
    });
    document.getElementById('up-button').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.UP = false;
    });
    document.getElementById('shoot-button').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.F = true;
    });
    document.getElementById('shoot-button').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.F = false;
    });
}