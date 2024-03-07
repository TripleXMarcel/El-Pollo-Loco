class GameOverScreen extends DrawableObject {

    width = 720;
    height = 480;
    x = 0;
    y = 0;

    /**
     * Creates an instance of GameOverScreen.
     */
    constructor() {
        super().loadImage('img/9_intro_outro_screens/game_over/game over.png');
    }
}