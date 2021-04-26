/**
 * La clase carta controla la creacion visual por el momento de una carta
 * esta recibe coordenadas de creacion x e y, que ubican la carta en el juego
 * tambien recibe un sprite a base de una imagen previa 
 */
class carta{
    constructor(scene){
        this.render = (x,y,sprite) =>{
            var carta = scene.add.image(x,y,sprite).setScale(0.17,0.17).setInteractive();
            scene.input.setDraggable(carta);
            /**
             * Funcion para el manejo de arrastre de una carta
             * dragstart, drag, dragend son las funciones para el manejo del arrastre
             * -dragstart inicializa el arrastre cambiando el colo de la carta
             * -drag toma los datos del puntero en funcion de la carta tomada
             * -dragend finaliza el arrastre dejando la posicion final de la carta en funcion de donde 
             * se deje la carta (Se deja codificado de que si no entra en una zona esta vuelve a su
             * posicion inicial)
             */
            carta.on('dragstart', function (pointer) {
                this.setTint(0xff0000);
            });
    
            carta.on('drag', function (pointer, dragX, dragY) {
                this.x = dragX;
                this.y = dragY;
            });
    
            carta.on('dragend', function (pointer,dropped) {
                this.clearTint();
                if(!dropped){
                    this.x = this.carta.dragStartX;
                    this.y = this.carta.dragStartY;
                }
            });
            return carta;
        }
    }
    
}