let canvas;
let ctx;
let world;
let menu;
let keyboard = new Keyboard();
let level = 1;
let walkLeft = 'a';
let walkRight = 'd';
let jump = ' ';
let throwBottle = 'e'
let jumpKey = 'Space'
let autoScale = false;
let masterVolume = 50;
let chickenVolume = 50;
let playerVolume = 50;
let sound = true;
let gamePause = false;
let endBossHealth = null;

/**
 * Initializes the game by setting up the canvas, loading controls, initializing the level, scaling the game, and loading the menu.
 */
function init() {
    canvas = document.getElementById('canvas');
    startScreen = new StartScreen(canvas);
    loadControls();
    document.getElementById('selectedLevel').innerHTML = `Level ${level}`;
    scale();
    setTimeout(() => {
        loadMenu();
    }, 2000);
}

/**
 * Dynamically loads a script file and executes a callback function upon completion.
 * @param {string} url - The URL of the script file to load.
 * @param {Function} callback - The function to execute after the script is loaded.
 */
function loadScript(url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

/**
 * Loads the game menu by dynamically loading the menu script and instantiating the menu object.
 */
function loadMenu() {
    loadScript('levels/menu.js', function () {
        menu = new Menu(canvas, keyboard);
        openMenu('mainMenu');
    });
}

/**
 * Loads the appropriate level based on the current game level.
 * @returns {Level} - The loaded level object.
 */
function loadLevel() {
    switch (level) {
        case 1:
            return loadLevel1();
        case 2:
            return loadLevel2();
        default:
            break;
    }
}

/**
 * Event listener for keydown events to handle keyboard input.
 * @param {KeyboardEvent} e - The keydown event object.
 */
document.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowUp' || e.key == 'w') {
        keyboard.UP = true;
    };
    if (e.key == 'ArrowDown' || e.key == 's') {
        keyboard.DOWN = true;
    };
    if (e.key == 'ArrowLeft' || e.key == walkLeft) {
        keyboard.LEFT = true;
    };
    if (e.key == 'ArrowRight' || e.key == walkRight) {
        keyboard.RIGHT = true;
    };
    if (e.key == jump) {
        keyboard.SPACE = true;
    };
    if (e.key == throwBottle) {
        keyboard.THROW = true;
    };
    if (e.key == 'Esc') {
        if (keyboard.ESC === true) {
            keyboard.ESC = false;
        }
        else {
            keyboard.ESC = true;
        }
    };
});

/**
 * Event listener for keyup events to handle keyboard input.
 * @param {KeyboardEvent} e - The keyup event object.
 */
document.addEventListener('keyup', (e) => {
    if (e.key == 'ArrowUp' || e.key == 'w') {
        keyboard.UP = false;
    };
    if (e.key == 'ArrowDown' || e.key == 's') {
        keyboard.DOWN = false;
    };
    if (e.key == 'ArrowLeft' || e.key == walkLeft) {
        keyboard.LEFT = false;
    };
    if (e.key == 'ArrowRight' || e.key == walkRight) {
        keyboard.RIGHT = false;
    };
    if (e.key == jump) {
        keyboard.SPACE = false;
    };
    if (e.key == throwBottle) {
        keyboard.THROW = false;
    };

});

/**
 * Simulates left arrow key press for mobile devices.
 * @param {boolean} bool - Indicates whether the key is pressed (true) or released (false).
 */
function mobileKeyLeft(bool){
    keyboard.LEFT = bool;
}

/**
 * Simulates right arrow key press for mobile devices.
 * @param {boolean} bool - Indicates whether the key is pressed (true) or released (false).
 */
function mobileKeyRight(bool){
    keyboard.RIGHT = bool;
}

/**
 * Simulates jump key press for mobile devices.
 * @param {boolean} bool - Indicates whether the key is pressed (true) or released (false).
 */
function mobileKeyJump(bool){
    keyboard.SPACE = bool;
}

/**
 * Simulates attack key press for mobile devices.
 * @param {boolean} bool - Indicates whether the key is pressed (true) or released (false).
 */
function mobileKeyAttack(bool){
    keyboard.ENTER = bool;
}