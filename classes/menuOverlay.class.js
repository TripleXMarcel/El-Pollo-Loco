class MenuOverlay {
    clouds;
    backgroundObjects;
    buttons;

    /**
     * Creates an instance of MenuOverlay.
     * @param {Array} clouds - The clouds displayed in the menu overlay.
     * @param {Array} backgroundObjects - The background objects displayed in the menu overlay.
     * @param {Array} buttons - The buttons displayed in the menu overlay.
     */
    constructor(clouds, backgroundObjects, buttons) {
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.buttons = buttons
    }
}