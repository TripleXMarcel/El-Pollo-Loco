let settingsIngame = false;
let fullScreenIngame = false;
let menuIngame = false;

/**
 * Toggles the sound off and hides the mute button while showing the unmute button.
 */
function muteGame() {
    sound = false;
    document.getElementById('muteBTN').classList.add('displayNone');
    document.getElementById('unmuteBTN').classList.remove('displayNone');
}

/**
 * Toggles the sound on and hides the unmute button while showing the mute button.
 */
function unmuteGame() {
    sound = true;
    document.getElementById('muteBTN').classList.remove('displayNone');
    document.getElementById('unmuteBTN').classList.add('displayNone');
}

/**
 * Opens or closes the in-game settings menu, pausing or unpausing the game accordingly.
 */
function openSettingsIngame() {
    if (settingsIngame === false) {
        openMenu('optionsMenu');
        pause();
        document.getElementById('mainMenuBTN').classList.add('displayNone');
        document.getElementById('backToGameBTN').classList.remove('displayNone');
        settingsIngame = true;
    } else {
        unpause();
        openMenu('ingameContainer');
        document.getElementById('mainMenuBTN').classList.remove('displayNone');
        settingsIngame = false;
        document.getElementById('backToGameBTN').classList.add('displayNone');
    }
}

/**
 * Pauses the game and hides the pause button while showing the unpause button.
 */
function pause() {
    gamePause = true;
    document.getElementById('pauseBTN').classList.add('displayNone');
    document.getElementById('unpauseBTN').classList.remove('displayNone');
}

/**
 * Unpauses the game and hides the unpause button while showing the pause button.
 */
function unpause() {
    gamePause = false;
    document.getElementById('pauseBTN').classList.remove('displayNone');
    document.getElementById('unpauseBTN').classList.add('displayNone');
}

/**
 * Toggles full-screen mode on or off and adjusts scaling accordingly.
 */
function fullScreen() {
    if (fullScreenIngame === false) {
        fullScreenIngame = true;
        document.documentElement.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
        setAutoScale();
    }
    else {
        fullScreenIngame = false;
        document.exitFullscreen();
        setAutoScale();
    }
}

/**
 * Opens or closes the in-game menu.
 */
function openIngameMenu() {
    if (menuIngame === false) {
        menuIngame = true;
        document.getElementById('menuIngame').classList.remove('displayNone');
    } else {
        menuIngame = false;
        document.getElementById('menuIngame').classList.add('displayNone');
    }
}

/**
 * Closes the game by reloading the page.
 */
function closeGame(){
    location.reload();
}