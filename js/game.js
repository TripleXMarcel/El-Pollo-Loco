let canvas;
let ctx;
let world;
let menu;
let keyboard = new Keyboard();
let level = 1;


function init() {
    canvas = document.getElementById('canvas');
    startScreen = new StartScreen(canvas);
    setTimeout(() => {
        loadMenu();
    }, 4000);
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
    });
}

function levelSelection(x) {
    if (x == 'up' && level < 2) {
        level++;
        console.log(level);
    }
    else if (x == 'down' && level > 1) {
        level--;
        console.log(level);
    }
}

function startGame() {
    level1 = loadLevel();
    world = new World(canvas, keyboard);
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
    if (e.key == 'ArrowLeft' || e.key == 'a') {
        keyboard.LEFT = true;
    };
    if (e.key == 'ArrowRight' || e.key == 'd') {
        keyboard.RIGHT = true;
    };
    if (e.key == ' ') {
        keyboard.SPACE = true;
    };
    if (e.key == 'Enter') {
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
    if (e.key == 'ArrowLeft' || e.key == 'a') {
        keyboard.LEFT = false;
    };
    if (e.key == 'ArrowRight' || e.key == 'd') {
        keyboard.RIGHT = false;
    };
    if (e.key == ' ') {
        keyboard.SPACE = false;
    };
    if (e.key == 'Enter') {
        keyboard.ENTER = false;
    };

});