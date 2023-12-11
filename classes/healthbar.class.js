class HealthBar extends Statusbar{
    GREEN_BAR = 'img/7_statusbars/4_bar_elements/statusbar_green.png';
    HEALTH_ICON = 'img/7_statusbars/3_icons/icon_health.png';
    constructor(){
        super();
        this.loadIcon();
        this.loadBar();
    }
    loadIcon(){
        this.loadImage(this.HEALTH_ICON);
        this.x = 30;
        this.y = 0;
        this.width =40;
        this.height=40;
    }
    loadBar(){
        this.loadImage(this.GREEN_BAR);
        this.x = 30;
        this.y = 0;
        this.width =300;
        this.height=60;
    }
}