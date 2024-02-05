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


function init() {
    canvas = document.getElementById('canvas');
    startScreen = new StartScreen(canvas);
    loadControls();
    scale();
    setTimeout(() => {
        loadMenu();
    }, 2000);
}


function loadScript(url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

function loadMenu() {
    loadScript('levels/menu.js', function () {
        menu = new Menu(canvas, keyboard);
        openMenu('mainMenu');
    });
}



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
        keyboard.ENTER = true;
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
        keyboard.ENTER = false;
    };

});