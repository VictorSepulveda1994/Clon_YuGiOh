/**
 * Solo agrega la funcionalidad dragger a la clase CartaBase.
 * Phaser 3 tutorial- Recuperado de un video
 * https://www.youtube.com/watch?v=tIaXbRzjyqk
 */
class CartaDraggable extends CartaBase
{
    constructor(data)
    {
        let {ondragend} =data;
        super(data);
        this.originalX= this.x;
        this.originalY= this.y;
        this.draggable= true;
        this.dragging= false;
        this.ondragend= ondragend;
        this.setSize(this.spriteCarta.width, this.spriteCarta.height);
        this.setInteractive();
        this.scene.input.setDraggable(this);
        this.scene.input.on('drag',(pointer,gameObjects,dragX, dragY)=>
        {
            if(!this.draggable) return;
            this.dragging = true;
            gameObjects.x= dragX;
            gameObjects.y= dragY;
        });
        this.scene.input.on('draged',(pointer,gameObjects)=>
        {
            this.dragging= false;
            gameObjects.ondragend(pointer,gameObjects);
        });
    }
}