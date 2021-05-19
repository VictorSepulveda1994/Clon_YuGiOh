/**
 * La clase carta controla la creacion visual por el momento de una carta
 * esta recibe coordenadas de creacion x e y, que ubican la carta en el juego
 * tambien recibe un sprite a base de una imagen previa 
 */
 class carta{
    constructor(scene,tipo,ataque,defensa,nivel,clase,estado){   
        var _tipo = tipo;
        var _ataque = ataque;
        var _defensa = defensa;
        var _nivel = nivel;
        var _clase = clase;
        var _modo = '';
        var _estado = estado;

        this.textoCreado = false;
        this.presionado = false;
        self = this;

        this.render = (x,y,sprite) =>{
            var carta = scene.add.image(x,y,sprite).setScale(0.35,0.35).setInteractive();
            
            if(sprite != 'reversoCarta'){
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
                /**
                 * Determina si el puntero esta presionado en una carta
                 * si esto ocurre, muestra los datos de la carta y se muestra la carta 
                 */
                carta.on('pointerdown', function(pointer){
                    if(pointer.leftButtonDown() && !this.presionado){
                        this.presionado = true;
                        scene.cambiarVisualizacion(sprite);
                        this.nombreVisualizarCarta = scene.add.text(1240,460,["Nombre: "+sprite]).setFontSize(10).setColor('#00ff00');
                        this.ataqueVisualizarCarta = scene.add.text(1240,470,["Ataque: "+_ataque]).setFontSize(10).setColor('#00ff00');
                        this.defensaVisualizarCarta = scene.add.text(1240,480,["Defensa: "+_defensa]).setFontSize(10).setColor('#00ff00');
                        this.tipoVisualizarCarta = scene.add.text(1240,490,["Tipo: "+_tipo]).setFontSize(10).setColor('#00ff00');
                        this.nivelVisualizarCarta = scene.add.text(1240,500,["Nivel de estrellas: "+_nivel]).setFontSize(10).setColor('#00ff00');
                        this.claseVisualizarCarta = scene.add.text(1240,510,["Clase: "+_clase]).setFontSize(10).setColor('#00ff00');
                    }
                })
                /**
                 * Determina si el puntero suelta una carta 
                 * limpia los textos de datos de la carta en pantalla
                 */
                carta.on('pointerup',function(pointer){
                    if(pointer.leftButtonReleased() && this.presionado){
                        this.presionado=false;
                        scene.cambiarVisualizacion('reversoCarta');
                        this.nombreVisualizarCarta.destroy();
                        this.ataqueVisualizarCarta.destroy();
                        this.defensaVisualizarCarta.destroy();
                        this.tipoVisualizarCarta.destroy();
                        this.nivelVisualizarCarta.destroy();
                        this.claseVisualizarCarta.destroy();
        
                        this.nombreVisualizarCarta = null;
                        this.ataqueVisualizarCarta = null;
                        this.defensaVisualizarCarta = null;
                        this.tipoVisualizarCarta = null;
                        this.nivelVisualizarCarta = null;
                        this.claseVisualizarCarta = null;
                        self.presionado = false;
                    }
                    
                })
            }

            /**
             * si el puntero suelta una carta muestra opciones dependiendo de
             * _estado (encargado de verficiar el estao de la carta
             *          -mano ---Esta en mano
             *          -jugada ---Esta en el tablero
             *          -oculta ---Esta boca abajo
             * ) dependiendo dde esto muestra opciones dependiendo del tipo de carta
             * las opciones son invocar, colocar o cancelar
             */
            carta.on('pointerup',function(pointer){
                if (!self.textoCreado && _estado == 'mano') {
                    
                    self.textoCreado = true;
                    
                    if(_tipo === 'monstruo' || _tipo === 'magica'){
                        var text1 = scene.add.text(carta.x+35,pointer.y,['Invocar']).
                        setFontSize(13).
                        setColor('#00ff00').
                        setInteractive().
                        on('pointerdown',function(){
                            _estado = 'jugada';
                            if(_tipo === 'monstruo'){
                                _modo = 'ataque';
                            }
                            scene.invocarCarta(carta,_tipo);

                            text1.destroy();
                            text2.destroy();
                            text3.destroy();
                            text1 = null;
                            text2 = null;
                            text3 = null;
                            self.textoCreado = false;
                            
                        });
                    }
                    var text2 = scene.add.text(carta.x+35,pointer.y+20,['Colocar']).
                    setFontSize(13).
                    setColor('#00ff00').
                    setInteractive().
                    on('pointerdown',function(){
                        _estado = 'jugada';
                        if(_tipo === 'monstruo'){
                            _modo = 'defensa';
                            carta.angle += 90;
                        }
                        scene.colocarReverso(carta,_tipo);
                        if(!(_tipo === 'trampa')){
                            text1.destroy();
                        }
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
                        
                        if(!(_tipo === 'trampa')){
                            text1.destroy();
                        }
                        
                        text2.destroy();
                        text3.destroy();
                        text1 = null;
                        text2 = null;
                        text3 = null;
                        self.textoCreado = false;
                        
                    });
                }
                if(!self.textoCreado && _estado ==='jugada' && _tipo == 'monstruo'){
                   
                    self.textoCreado = true;
                    //preguntar por tipo
                    //dar opciones de "atacar" ---> fase de ataque
                    //dar opciones de cambiar estado --> ataque/defensa
                    if(_modo === 'ataque'){
                        var text1 = scene.add.text(carta.x+35,pointer.y,['Atacar']).
                        setFontSize(13).
                        setColor('#00ff00').
                        setInteractive().
                        on('pointerdown',function(){

                        
                            console.log("me preparo y ataco con: "+_ataque);
                        
                        
                            //atacar
                            text1.destroy();
                            text2.destroy();
                            text1 = null;
                            text2 = null;
                            self.textoCreado = false;
                        });
                    }
                    
                    var text2 = scene.add.text(carta.x+35,pointer.y+20,['Cambiar Modo']).
                    setFontSize(13).
                    setColor('#00ff00').
                    setInteractive().
                    on('pointerdown',function(){
                        if(!(_modo === 'defensa')){
                            text1.destroy();
                        }
                        
                        if(_modo==='ataque'){
                            _modo='defensa'
                            if(carta.angle == 90){
                                carta.angle -=90;
                            }else{
                                carta.angle += 90;
                            }
                        }else{
                            _modo='ataque';
                            if(carta.angle == 0){
                                carta.angle +=90;
                            }else{
                                carta.angle -= 90;
                            }
                        }
                        
                        
                        text2.destroy();
                        text1 = null;
                        text2 = null;
                        self.textoCreado = false;
                    });
                }
                if(!self.textoCreado && _estado ==='jugada' && _tipo != 'monstruo'){
                    self.textoCreado = true;
                    var text1 = scene.add.text(carta.x+35,pointer.y,['Efecto']).
                    setFontSize(13).
                    setColor('#00ff00').
                    setInteractive().
                    on('pointerdown',function(){
                        console.log("Activo efecto: ...");
                        //atacar
                        text1.destroy();
                        text2.destroy();
                        text1 = null;
                        text2 = null;
                        self.textoCreado = false;
                    });
                    var text2 = scene.add.text(carta.x+35,pointer.y+20,['Cancelar']).
                    setFontSize(13).
                    setColor('#00ff00').
                    setInteractive().
                    on('pointerdown',function(){
                        
                        text1.destroy();
                        text2.destroy();
                        text1 = null;
                        text2 = null;
                        self.textoCreado = false;
                    });
                }
                if(!self.textoCreado && _estado == 'oculta'){
                    
                    self.textoCreado = true;
                    var text1 = scene.add.text(carta.x+35,pointer.y,['Revelar']).
                    setFontSize(13).
                    setColor('#00ff00').
                    setInteractive().
                    on('pointerdown',function(){
                        
                        //atacar
                        
                        text1.destroy();
                        text2.destroy();
                        text1 = null;
                        text2 = null;
                        
                        self.textoCreado = false;
                        carta.setActive(false).setVisible(false);
                    });
                    var text2 = scene.add.text(carta.x+35,pointer.y+20,['Cancelar']).
                    setFontSize(13).
                    setColor('#00ff00').
                    setInteractive().
                    on('pointerdown',function(){
                        text1.destroy();
                        text2.destroy();
                        text1 = null;
                        text2 = null;
                        self.textoCreado = false;
                    });
                }
            })
            return carta;
        }
    }
    
}