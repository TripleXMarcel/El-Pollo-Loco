class EmptyStatusBar extends Statusbar{
    imageX = 'img/7_statusbars/4_bar_elements/statusbar_empty.png';

    constructor(y){
        super().loadImage(this.imageX);
        this.x = 30;
        this.y = y;
        this.width =300;
        this.height=60;
    }
}