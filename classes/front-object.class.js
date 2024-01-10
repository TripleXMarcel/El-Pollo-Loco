class FrontObject extends MovableObject {

    width=100;
    height=100;
    width_Rect_Top=100;
    height_Rect_Top=20 ;

    constructor(imagePath, x, y){
        super().loadImage(imagePath);
        this.y=y;
        this.x=x;
        this.x_Rect_Top=x;
        this.y_Rect_Top=y;
    }
}