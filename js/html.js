/**
 * Generates HTML for the canvas element.
 * @returns {string} HTML markup for the canvas.
 */
function canvasHTML() {
    return /*html*/`
    <div class="canvas-container">
        <div class="ui-and-hud-container">
            <div class="ui-buttons">
                <img id="sound" onclick="soundMute()" src="img/UI/music.png" alt="">
                <img id="fullscreen" onclick="enterFullscreen()" src="img/UI/fullscreen.png" alt="">
                <img id="back-button" class="back-button" onclick="backtoStart()" src="img/UI/close.png" alt="">
            </div>
            <div id="hud-buttons" class="hud-buttons">
            </div>
        </div>
        <canvas id="canvas" class="" width="720" height="480"></canvas>
    </div>
    `;
}

/**
 * Generates HTML for the HUD buttons.
 * @returns {string} HTML markup for the HUD buttons.
 */
function hudButtonsHTML() {
    return /*html*/`
    <div class="hud-buttons-segment">
        <img id="left-button" class="hud-button" src="img/UI/hud/left-arrow.png" alt="">
        <img id="right-button" class="hud-button" src="img/UI/hud/right-arrow.png" alt="">
    </div>
    <div class="hud-buttons-segment">
        <img id="up-button" class="hud-button" src="img/UI/hud/up-arrow.png" alt="">
        <img id="shoot-button" class="" src="img/UI/hud/aim.png" alt="">
    </div>
    `;
}

/**
 * Generates HTML for the win screen.
 * @returns {string} HTML markup for the win screen.
 */
function winScreenHTML() {
    return /*html*/`
        <div class="endscreen">
            <span>You Win!</span>
            <button onclick="backtoStart()">Back to Lobby</button>
        </div>
    `;
}

/**
 * Generates HTML for the loose screen.
 * @returns {string} HTML markup for the loose screen.
 */
function looseScreenHTML() {
    return /*html*/`
    <div class="endscreen">
        <span>You Loose!</span>
        <button onclick="backtoStart()">Back to Lobby</button>
    </div>
`;
}

/**
 * Generates HTML for the rotate phone message.
 * @returns {string} HTML markup for the rotate phone message.
 */
function rotatePhoneHTML() {
    return /*html*/`
    <div id="rotate-phone">
        <span>Rotate your device to play</span>
        <button onclick="backtoStart()">Back</button>
    </div>
    `;
}

/**
 * Generates HTML for the key bindings.
 * @returns {string} HTML markup for the key bindings.
 */
function keyBindingsHTML() {
    return  /*html*/`
    <div class="story card" onclick="doNotClose(event)">
        <button onclick="closeCard()">Back</button>
        <h3>Keyboard</h3>
        <div class="card-content flex space-between">
            <div class="flex column gap10">
                <span>W / ↑ / SPACE</span>
                <span>A / ←</span>
                <span>D / →</span>
                <span>F</span>
            </div>
            <div class="flex column space-between gap10">
                <span>Springen</span>
                <span>Links</span>
                <span>Rechts</span>
                <span>Zum Pfeile schießen<br>halten</span>
            </div>
        </div>
        <h3>Smartphone</h3>
        <div class="card-content flex space-between">
            <div class="flex column gap10">
                <img class="hud-button" src="img/UI/hud/up-arrow.png" alt="">
                <img class="hud-button" src="img/UI/hud/left-arrow.png" alt="">
                <img class="hud-button" src="img/UI/hud/right-arrow.png" alt="">
                <img class="hud-button" src="img/UI/hud/aim.png" alt="">
            </div>
            <div class="flex column keybin">
                <span>Springen</span>
                <span>Links</span>
                <span>Rechts</span>
                <span>Hold for Shooting Arrows</span>
            </div>
        </div>
    </div>
    `;
}

/**
 * Generates HTML for the story.
 * @returns {string} HTML markup for the story.
 */
function storyHTML() {
    return  /*html*/`
    <div class="story card" onclick="doNotClose(event)">
        <button onclick="closeCard()">Back</button>
        <div class="card-content">
        <p>
            Talon, a brave young archer, lived in a peaceful village surrounded by dense
            woodland. When the village was threatened by a dark force, Talon decided to take
            his fate into his own hands. Inspired by the legends of ancient heroes, he set out
            to uncover the mystery of the lost world.
            <br>
            <br>
            On his journey, Talon traversed perilous forests, deep ravines, and ancient ruins,
            always wary of the dangers lurking in the wilderness. His bow was his faithful weapon
            as he bravely faced every obstacle that stood in his way.
            <br>
            <br>
            Eventually, Talon reached the heart of the lost world, where an ancient dragon awaited
            him, whose sinister presence filled the land with fear and terror. It was up to Talon
            to prove his skill and bravery as he faced the dragon in the ultimate battle to change
            the fate of his village and the world.
        </p>
        </div>
    </div>
`;
}

/**
 * Generates HTML for the impressum.
 * @returns {string} HTML markup for the impressum.
 */
function impressumHTML() {
    return  /*html*/`
    <div class="story card" onclick="doNotClose(event)">
        <button onclick="closeCard()">Zurück</button>
        <div class='impressum card-content'>
            <h1>Impressum</h1>
            <p>Angaben gemäß § 5 TMG</p>
            <p>Kutup Cevik <br>
                <br>
                28217 Bremen<br>
                Deutschland<br>
            </p>
            <p><strong>Kontakt:</strong> <br>
                E-Mail: <a href='mailto:kutup.cevik@outlook.com'>kutup.cevik&#64;outlook.com</a><br>
                Telefon: <a href='tel:+4915120245570'>01512-0245570</a><br></p>
            <p><strong>Haftungsausschluss: </strong><br><br>
                Die Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Es wird keine
                Haftung für Schäden übernommen, die direkt oder indirekt aus der Nutzung dieser Webseite entstehen.
            </p><br>
        </div>
    </div>
    `;
}

/**
 * Generates HTML for the data privacy section.
 * @returns {string} HTML content for the data privacy section.
 */
function datenschutzHTML() {
    return  /*html*/`
    <div class="story card" onclick="doNotClose(event)">
        <button onclick="closeCard()">Zurück</button>
        <div class="card-content">
            <h1>Datenschutzerklärung</h1>
            <p>Diese Datenschutzerklärung klärt dich über die Art, den Umfang und Zwecke der Erhebung und Verwendung
                personenbezogener Daten auf dieser Website auf.</p>
            <h2>Datenverarbeitung auf dieser Website</h2>
            <p>Diese Website erhebt und speichert keine personenbezogenen Daten, da keine Formulare, Kommentarfunktionen
                oder andere Eingabemöglichkeiten vorhanden sind, die es den Besuchern ermöglichen würden, persönliche
                Informationen bereitzustellen.</p>
            <h2>Cookies</h2>
            <p>Diese Website verwendet keine Cookies oder ähnliche Tracking-Technologien.</p>
            <h2>Server-Log-Dateien</h2>
            <p>Der Hosting-Provider dieser Website erhebt und speichert automatisch Informationen in sogenannten
                Server-Log-Dateien, die dein Browser automatisch an uns übermittelt. Diese Daten sind nicht bestimmten
                Personen zuordenbar und werden nicht mit anderen Datenquellen zusammengeführt. Die Daten dienen
                ausschließlich statistischen Auswertungen und zur Verbesserung der Website.</p>
            <h2>Kontaktmöglichkeit</h2>
            <p>Da keine Kontaktformulare oder ähnliche Funktionen auf dieser Website vorhanden sind, werden keine
                personenbezogenen Daten beim Besuch dieser Website erhoben oder gespeichert.</p>
            <h2>Änderungen dieser Datenschutzerklärung</h2>
            <p>Diese Datenschutzerklärung kann gelegentlich aktualisiert werden, um gesetzliche Anforderungen oder
                Änderungen unserer Dienstleistungen zu erfüllen. Für deinen erneuten Besuch gilt dann die aktualisierte
                Datenschutzerklärung.</p>
            <h2>Kontakt</h2>
            <p>Wenn du Fragen zur Datenschutzerklärung hast, kannst du dich gerne per E-Mail unter <a
                    href='mailto:kutup.cevik@outlook.com'>kutup.cevik&#64;outlook.com</a> an uns wenden.</p>
            <p>Stand: [Datum der letzten Aktualisierung]</p>
        </div>
    </div>
    `;
}