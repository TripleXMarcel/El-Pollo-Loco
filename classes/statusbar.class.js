class Statusbar extends DrawableObject {
    emptyStatusBar;
    iconStatusBar;
  
    /**
     * Creates an instance of Statusbar.
     * @param {DrawableObject[]} emptyStatusBar - Array of empty status bar elements.
     * @param {DrawableObject[]} iconStatusBar - Array of icon status bar elements.
     */
    constructor(emptyStatusBar, iconStatusBar) {
      super();
      this.emptyStatusBar = emptyStatusBar;
      this.iconStatusBar = iconStatusBar;
    }
}