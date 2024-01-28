let canvas;
let ctx;
let world;
let keyboard = new Keyboard();
let gameOn = false;


function init() {
    canvas = document.getElementById('canvas');
    startScreen = new StartScreen(canvas);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && gameOn === false) {
            loadScript('levels/level1.js', function () {
                startGame();
                gameOn = true;
            });

        }
    });

}

function loadScript(url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

function startGame() {
    world = new World(canvas, keyboard);
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