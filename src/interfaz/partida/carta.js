/**
 * La clase carta controla la creacion visual por el momento de una carta
 * esta recibe coordenadas de creacion x e y, que ubican la carta en el juego
 * tambien recibe un sprite a base de una imagen previa 
 */
class carta{
    
    constructor(scene,tipo){
        var _tipo = tipo;
        this.textoCreado = false;
        
        


        self = this;
        this.render = (x,y,sprite) =>{
            var carta = scene.add.image(x,y,sprite).setScale(0.35,0.35).setInteractive();
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

            carta.on('pointerdown', function(pointer){
                scene.cambiarVisualizacion(sprite);
                
            })
            
            carta.on('pointerup',function(pointer){
                
                
                if (!self.textoCreado) {
                    console.log('Generar botones');
                    self.textoCreado = true;
                    console.log('Crear cartas');
                    var text1 = scene.add.text(carta.x+35,pointer.y,['Invocar']).setFontSize(13).setColor('#00ff00').setInteractive().on('pointerdown',function(){
                
                        scene.colocarCarta(carta,_tipo);

                        text1.destroy();
                        text2.destroy();
                        text3.destroy();
                        text1 = null;
                        text2 = null;
                        text3 = null;
                        self.textoCreado = false;
                        
                    });
                    var text2 = scene.add.text(carta.x+35,pointer.y+20,['Colocar']).setFontSize(13).setColor('#00ff00').setInteractive().on('pointerdown',function(){
                        
                        scene.colocarReverso(carta,_tipo);

                        text1.destroy();
                        text2.destroy();
                        text3.destroy();
                        text1 = null;
                        text2 = null;
                        text3 = null;
                        self.textoCreado = false;
                        
                    });
    
                    var text3 = scene.add.text(carta.x+35,pointer.y+40,['Cancelar']).
                    setFontSize(13).
                    setColor('#00ff00').
                    setInteractive().
                    on('pointerdown',function(){
                        
                        
                        text1.destroy();
                        text2.destroy();
                        text3.destroy();
                        text1 = null;
                        text2 = null;
                        text3 = null;
                        self.textoCreado = false;
                        
                    });
                }
                
                
                
            
            })
            
            

            
            return carta;
        }
    }
    
}