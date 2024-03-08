/**
 * Starts the game by opening the in-game menu, loading the first level, and initializing the game world.
 */
function startGame() {
    openMenu('ingameContainer');
    level1 = loadLevel();
    world = new World(canvas, keyboard);
}

/**
 * Event handler for the window resize event. Automatically adjusts scaling when the window is resized.
 */
window.onresize = function () {
    scale();
};

/**
 * Manually scales the game based on the provided scale factor or automatically adjusts scaling if no scale is provided.
 * @param {number} scale - The scale factor to apply to the game.
 */
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

/**
 * Checks if the current device is a mobile device.
 * @returns {boolean} - Returns true if the device is a mobile device, otherwise false.
 */
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Loads mobile-specific UI elements and adjusts layout for mobile devices.
 */
function loadMobile() {
    document.getElementById('gameButtons').classList.remove('displayNone');
    document.getElementById('screenInformation').classList.remove('displayNone');
    focusQuerformatHandy();
}

/**
 * Unloads mobile-specific UI elements and resets layout for non-mobile devices.
 */
function unloadMobile() {
    document.getElementById('gameButtons').classList.add('displayNone');
    document.getElementById('screenInformation').classList.add('displayNone');
}

/**
 * Focuses on landscape orientation for mobile devices, hiding certain UI elements in portrait mode.
 */
function focusQuerformatHandy() {
    var istQuerformat = window.matchMedia("(orientation: landscape)").matches;
    if (istQuerformat) {
        document.getElementById('screenInformation').classList.add('displayNone');
    }
}

/**
 * Manually scales the game with the provided scale factor.
 * @param {number} scale - The scale factor to apply to the game.
 */
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

/**
 * Automatically adjusts scaling based on the current window size.
 */
function tryAdjustScaling() {
    try {
        adjustScaling('canvas');
        adjustScaling('menu');
        currentResolution();
    } catch (error) { }
}

/**
 * Toggles the auto-scaling feature on or off and adjusts scaling accordingly.
 */
function setAutoScale() {
    if (autoScale == true) {
        autoScale = false;
    }
    else {
        autoScale = true
    }
    scale();
}

/**
 * Adjusts the scaling of a specified content element based on the current window size.
 * @param {string} content - The ID of the content element to scale.
 */
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

/**
 * Sets the scaling of a specified content element to the provided scale factor.
 * @param {string} content - The ID of the content element to scale.
 * @param {number} scale - The scale factor to apply to the content element.
 * @returns {boolean} - Returns true if the scaling was successful, otherwise false.
 */
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

/**
 * Updates the UI to display the currently selected resolution scale.
 * @param {number} scale - The current resolution scale.
 */
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

/**
 * Loads and displays the current control settings in the options menu.
 */
function loadControls() {
    document.getElementById('walkLeft').placeholder = checkControls(walkLeft);
    document.getElementById('walkRight').placeholder = checkControls(walkRight);
    document.getElementById('jump').placeholder = checkControls(jump);
    document.getElementById('throwBottle').placeholder = checkControls(throwBottle);
    document.getElementById('mainMenuControlsBox').innerHTML = loadControlsHTML();
}

/**
 * Converts control keys to their corresponding display names.
 * @param {string} key - The control key to convert.
 * @returns {string} - The display name of the control key.
 */
function checkControls(key) {
    if (key == ' ') {
        return 'Space';
    } else {
        return key.toUpperCase();
    }
}

/**
 * Generates HTML for displaying control settings in the options menu.
 * @returns {string} - The HTML content for displaying control settings.
 */
function loadControlsHTML() {
    return `
                <p>Walk left = ${checkControls(walkLeft)}</p>
                <p>Walk right = ${checkControls(walkRight)}</p>
                <p>Jump = ${checkControls(jump)}</p>
                <p>Throw bottle = ${checkControls(throwBottle)}</p>
    `
}

/**
 * Handles level selection navigation.
 * @param {string} x - The direction of level selection ('up' or 'down').
 */
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

/**
 * Opens the specified menu while closing other menus.
 * @param {string} menu - The ID of the menu to open.
 */
function openMenu(menu) {
    document.getElementById('mainMenu').classList.add('displayNone');
    document.getElementById('levelMenu').classList.add('displayNone');
    document.getElementById('optionsMenu').classList.add('displayNone');
    document.getElementById('ingameContainer').classList.add('displayNone');
    document.getElementById('anyKey').classList.add('displayNone');
    if (menu == undefined) {
        return;
    }
    else {
        document.getElementById(menu).classList.remove('displayNone');
    }

}

/**
 * Opens the specified settings menu while closing other settings menus.
 * @param {string} settings - The ID of the settings menu to open.
 */
function openSettings(settings) {
    document.getElementById('video').classList.add('displayNone');
    document.getElementById('audio').classList.add('displayNone');
    document.getElementById('controls').classList.add('displayNone');
    document.getElementById(settings).classList.remove('displayNone');
}

/**
 * Sets the control key for a specific action and updates the UI.
 * @param {string} x - The action to set the control key for.
 */
function setControls(x) {
    element = document.getElementById(x);
    if (element.value != walkLeft && element.value != walkRight && element.value != jump && element.value != throwBottle) {
        if (x == 'walkLeft' && element.value != '') { walkLeft = element.value; }
        else if (x == 'walkRight' && element.value != '') { walkRight = element.value; }
        else if (x == 'jump' && element.value != '') { jump = element.value; }
        else if (x == 'throwBottle' && element.value != '') { throwBottle = element.value; }
    }
    element.placeholder = element.value;
    element.value = '';
    loadControls();
}

/**
 * Initializes the volume sliders and their corresponding value displays.
 */
function initializeSliders() {
    let masterSlider = document.getElementById("masterVolumeSlider");
    let chickenSlider = document.getElementById('chickenVolumeSlider');
    let playerSlider = document.getElementById('playerVolumeSlider');
    let musicSlider = document.getElementById('musicVolumeSlider');
    let masterValue = document.getElementById('masterVolumeValue');
    let chickenValue = document.getElementById('chickenVolumeValue');
    let playerValue = document.getElementById('playerVolumeValue');
    let musicValue = document.getElementById('musicVolumeValue');
    masterValue.innerHTML = sliderHTML(masterSlider.value);
    chickenValue.innerHTML = sliderHTML(chickenSlider.value);
    playerValue.innerHTML = sliderHTML(playerSlider.value);
    musicValue.innerHTML = sliderHTML(musicSlider.value);
}

/**
 * Attaches an event handler to the master volume slider to update its value display.
 */
function attachMasterSliderEventHandler() {
    let masterSlider = document.getElementById("masterVolumeSlider");
    let masterValue = document.getElementById('masterVolumeValue');
    masterSlider.oninput = function () {
        masterVolume = masterSlider.value;
        masterValue.innerHTML = sliderHTML(masterSlider.value);
    }
}

/**
 * Attaches an event handler to the chicken volume slider to update its value display.
 */
function attachChickenSliderEventHandler() {
    let chickenSlider = document.getElementById('chickenVolumeSlider');
    let chickenValue = document.getElementById('chickenVolumeValue');
    chickenSlider.oninput = function () {
        chickenVolume = chickenSlider.value;
        chickenValue.innerHTML = sliderHTML(chickenSlider.value);
    }
}

/**
 * Attaches an event handler to the player volume slider to update its value display.
 */
function attachPlayerSliderEventHandler() {
    let playerSlider = document.getElementById('playerVolumeSlider');
    let playerValue = document.getElementById('playerVolumeValue');
    playerSlider.oninput = function () {
        playerVolume = playerSlider.value;
        playerValue.innerHTML = sliderHTML(playerSlider.value);
    }
}

/**
 * Attaches an event handler to the player volume slider to update its value display.
 */
function attachMusicSliderEventHandler() {
    let musicSlider = document.getElementById('musicVolumeSlider');
    let musicValue = document.getElementById('musicVolumeValue');
    musicSlider.oninput = function () {
        musicVolume = musicSlider.value;
        musicValue.innerHTML = sliderHTML(musicSlider.value);
    }
}

/**
 * Initializes the volume sliders and attaches event handlers to update their corresponding value displays.
 */
document.addEventListener("DOMContentLoaded", function () {
    initializeSliders();
    attachMasterSliderEventHandler();
    attachChickenSliderEventHandler();
    attachPlayerSliderEventHandler();
    attachMusicSliderEventHandler();
});

/**
 * Updates the volume value display when the master volume slider is adjusted.
 */
function sliderHTML(value) {
    return `
            ${value}%
        `;
}