let settingsIngame = false;
let fullScreenIngame = false;
let menuIngame = false;

function muteGame() {
    sound = false;
    document.getElementById('muteBTN').classList.add('displayNone');
    document.getElementById('unmuteBTN').classList.remove('displayNone');
}

function unmuteGame() {
    sound = true;
    document.getElementById('muteBTN').classList.remove('displayNone');
    document.getElementById('unmuteBTN').classList.add('displayNone');
}

function openSettingsIngame() {
    if (settingsIngame === false) {
        openMenu('optionsMenu');
        pause();
        document.getElementById('mainMenuBTN').classList.add('displayNone');
        settingsIngame = true;
    } else {
        unpause();
        document.getElementById('mainMenuBTN').classList.remove('displayNone');
        document.getElementById('optionsMenu').classList.add('displayNone');
        settingsIngame = false;
    }

}

function pause() {
    gamePause = true;
    document.getElementById('pauseBTN').classList.add('displayNone');
    document.getElementById('unpauseBTN').classList.remove('displayNone');
}

function unpause() {
    gamePause = false;
    document.getElementById('pauseBTN').classList.remove('displayNone');
    document.getElementById('unpauseBTN').classList.add('displayNone');
}

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

function openIngameMenu() {
    if (menuIngame === false) {
        menuIngame = true;
        document.getElementById('menuIngame').classList.remove('displayNone');
    } else {
        menuIngame = false;
        document.getElementById('menuIngame').classList.add('displayNone');
    }
}

function closeGame(){
    location.reload();
}