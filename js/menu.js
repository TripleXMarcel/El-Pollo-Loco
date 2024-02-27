function startGame() {
    openMenu('ingameContainer');
    level1 = loadLevel();
    world = new World(canvas, keyboard);
}

window.onresize = function () {
    scale();
};

function scale(scale) {
    if (isMobile()) {
        loadMobile();
    } else {
        unloadMobile();
        if (autoScale == true && scale == undefined) {
            tryAdjustScaling();
        }
        else {
            manualScale(scale);
        }
    }

}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function loadMobile() {
    document.getElementById('gameButtons').classList.remove('displayNone');
    document.getElementById('screenInformation').classList.remove('displayNone');
    focusQuerformatHandy();
}

function unloadMobile() {
    document.getElementById('gameButtons').classList.add('displayNone');
    document.getElementById('screenInformation').classList.add('displayNone');
}

function focusQuerformatHandy() {
    var istQuerformat = window.matchMedia("(orientation: landscape)").matches;
    if (istQuerformat) {
        document.getElementById('screenInformation').classList.add('displayNone');
    }
}

function manualScale(scale) {
    autoScale = false;
    if (scale == undefined) {
        scale = 1;
    }
    if (setScale('canvas', scale) == false) {
        autoScale = true;
    } else {
        setScale('menu', scale);
        currentResolution(scale);
    }
}

function tryAdjustScaling() {
    try {
        adjustScaling('canvas');
        adjustScaling('menu');
        currentResolution();
    } catch (error) { }
}

function setAutoScale() {
    if (autoScale == true) {
        autoScale = false;
    }
    else {
        autoScale = true
    }
    scale();
}

function adjustScaling(content) {
    let windowWidth = window.innerWidth;
    let windowHeigth = window.innerHeight;
    let container = document.getElementById(content);
    let sidebarHeigth = document.querySelector('#menu').offsetHeight;
    let scaleX = windowWidth / 740;
    let scaleY = windowHeigth / sidebarHeigth;
    scaleX = Math.round(scaleX * 100) / 100;
    scaleY = Math.round(scaleY * 100) / 100;
    let transformStringX = 'scale(' + scaleX + ')';
    let transformStringY = 'scale(' + scaleY + ')';
    if (sidebarHeigth * scaleX < windowHeigth) { container.style.transform = transformStringX; };
    if (sidebarHeigth * scaleX > windowHeigth) { container.style.transform = transformStringY; };
}

function setScale(content, scale) {
    let windowWidth = window.innerWidth;
    let windowHeigth = window.innerHeight;
    let container = document.getElementById(content);
    let sidebarHeigth = document.querySelector('#menu').offsetHeight;
    let sidebarWidth = document.querySelector('#menu').offsetWidth;
    let transformStringX = 'scale(' + scale + ')';
    if (sidebarHeigth * scale < windowHeigth && sidebarWidth * scale < windowWidth) { container.style.transform = transformStringX; }
    else { return false };
}

function currentResolution(scale) {
    document.getElementById('scale').classList.remove('active');
    document.getElementById('scale0.5').classList.remove('active');
    document.getElementById('scale1').classList.remove('active');
    document.getElementById('scale1.5').classList.remove('active');
    document.getElementById('scale2').classList.remove('active');
    if (scale == undefined) {
        document.getElementById(`scale`).classList.add('active');
    } else {
        document.getElementById(`scale${scale}`).classList.add('active');
    }

}

function loadControls() {
    document.getElementById('walkLeft').placeholder = checkControls(walkLeft);
    document.getElementById('walkRight').placeholder = checkControls(walkRight);
    document.getElementById('jump').placeholder = checkControls(jump);
    document.getElementById('throwBottle').placeholder = checkControls(throwBottle);
    document.getElementById('mainMenuControlsBox').innerHTML = loadControlsHTML();
}

function checkControls(key) {
    if (key == ' ') {
        return 'Space';
    } else {
        return key.toUpperCase();
    }
}

function loadControlsHTML() {
    return `
                <p>Walk left = ${checkControls(walkLeft)}</p>
                <p>Walk right = ${checkControls(walkRight)}</p>
                <p>Jump = ${checkControls(jump)}</p>
                <p>Throw bottle = ${checkControls(throwBottle)}</p>
    `
}

function levelSelection(x) {
    if (x == 'up' && level < 2) {
        level++;
        document.getElementById('selectedLevel').innerHTML = `Level ${level}`;
    }
    else if (x == 'down' && level > 1) {
        level--;
        document.getElementById('selectedLevel').innerHTML = `Level ${level}`;
    }
}

function openMenu(menu) {
    document.getElementById('mainMenu').classList.add('displayNone');
    document.getElementById('levelMenu').classList.add('displayNone');
    document.getElementById('optionsMenu').classList.add('displayNone');
    document.getElementById('ingameContainer').classList.add('displayNone');
    if (menu == undefined) {
        return;
    }
    else {
        document.getElementById(menu).classList.remove('displayNone');
    }

}

function openSettings(settings) {
    document.getElementById('video').classList.add('displayNone');
    document.getElementById('audio').classList.add('displayNone');
    document.getElementById('controls').classList.add('displayNone');
    document.getElementById(settings).classList.remove('displayNone');
}

function setControls(x) {
    element = document.getElementById(x);
    if (element.value != walkLeft && element.value != walkRight && element.value != jump && element.value != throwBottle) {
        if (x == 'walkLeft' && element.value != '') {
            walkLeft = element.value;
        } else if (x == 'walkRight' && element.value != '') {
            walkRight = element.value;
        } else if (x == 'jump' && element.value != '') {
            jump = element.value;
        } else if (x == 'throwBottle' && element.value != '') {
            throwBottle = element.value;
        }
    }
    element.placeholder = element.value;
    element.value = '';
    loadControls();
}

document.addEventListener("DOMContentLoaded", function () {
    let masterSlider = document.getElementById("masterVolumeSlider");
    let chickenSlider = document.getElementById('chickenVolumeSlider');
    let playerSlider = document.getElementById('playerVolumeSlider');
    let masterValue = document.getElementById('masterVolumeValue');
    let chickenValue = document.getElementById('chickenVolumeValue');
    let playerValue = document.getElementById('playerVolumeValue');
    masterValue.innerHTML = sliderHTML(masterSlider.value);
    chickenValue.innerHTML = sliderHTML(chickenSlider.value);
    playerValue.innerHTML = sliderHTML(playerSlider.value);

    masterSlider.oninput = function () {
        masterVolume = masterSlider.value;
        masterValue.innerHTML = sliderHTML(masterSlider.value);
    }
    chickenSlider.oninput = function () {
        chickenVolume = chickenSlider.value;
        chickenValue.innerHTML = sliderHTML(chickenSlider.value);
    }
    playerSlider.oninput = function () {
        playerVolume = playerSlider.value;
        playerValue.innerHTML = sliderHTML(playerSlider.value);
    }
});

function sliderHTML(value) {
    return `
            ${value}%
        `;
}