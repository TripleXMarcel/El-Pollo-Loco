class HealthEndBossBar extends Statusbar{
    image= 'img/7_statusbars/4_bar_elements/statusbar_empty.png';
    constructor(y){
        super().loadImage(this.image);
        this.x = 100;
        this.y = y;
        this.img = this.image;
    }
    

    
}