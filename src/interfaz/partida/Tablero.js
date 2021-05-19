

class Tablero extends Phaser.Scene {
    constructor() {
        super({ key: "Tablero" });
    
    }

    preload() {
        this.load.json('json', './src/datos/baseDeDatos.json');
        this.load.image('chungungo','./assets/chungo.png');
        this.load.image('reversoCarta','./assets/reversoCarta.png');
        this.load.image('carabinero expresivo','./assets/carabineroExpresivo.png');
        this.load.image('investigacion a fondo','./assets/investigacionAFondo.png');
        this.load.image('trauco','./assets/trauco.png');
        this.load.image('bono de presidente','./assets/bonoDePresidente.png');

    }
    cambiarVisualizacion(nombreCarta){

        var imagen = this.add.image(0,0,nombreCarta);
        this.container.add(imagen);
    }
    
    
    

    
    
    create() {
        let self = this;

        
        this.linea1 = this.add.graphics();
        this.linea1.fillStyle(0xffffff,1);
        this.linea1.fillRect(0,360,1200,1);

        this.linea2 = this.add.graphics();
        this.linea2.fillStyle(0xffffff,1);
        this.linea2.fillRect(1200,0,1,720);

        this.container = this.add.container(1440,300);

        /**
        * Funcion para verificar correctamente el fin de la partida 
        * casos como quedar sin cartas
        *            quedar sin puntos de vida
        *            derrotar al oponente
        * interfiere con las funciones
        *   quitarPuntosUsuario
        *   quitarPuntosOponente
        *   quitarCartasMazo
        */
         this.verificarEstadoPartida=()=>{
            if(numeroCartasUsuario == 0){
               this.botonQuitarCartaMazo.destroy();
               if(confirm("Perdiste, has quedadao sin cartas... ¿Quieres reiniciar el juego?. \n Cancelar devolvera al menu del juego")){
                   
                    //reiniciar juego
                    this.registry.destroy();
                    this.events.off();
                    this.scene.restart(); 
               }else{
                    //Devolver a menu
                    this.registry.destroy(); 
                    this.events.off();
                    this.scene.restart(); 
                    this.scene.switch('menu');
               }
            }
            if(vidaUsuario <= 0){
                this.puntosUsuario.destroy();
                if(confirm("Perdiste, has quedado sin puntos de vida... ¿Quieres reiniciar el juego?. \n Cancelar devolvera al menu del juego")){
                    //reiniciar juego
                    this.registry.destroy(); 
                    this.events.off();
                    this.scene.restart(); 
                }else{
                    //Devolver a menu
                    this.registry.destroy(); 
                    this.events.off();
                    this.scene.restart(); 
                    this.scene.switch('menu');
                    }
            }
            if(vidaOponente <= 0){
                this.puntosOponente.destroy();
                if(confirm("Ganaste, el oponente ha quedado sin puntos de vida... ¿Quieres reiniciar el juego?. \n Cancelar devolvera al menu del juego")){
                    //reiniciar juego
                    this.registry.destroy(); 
                    this.events.off();
                    this.scene.restart(); 
                }else{
                    //Devolver a menu
                    this.registry.destroy(); 
                    this.events.off();
                    this.scene.restart(); 
                    this.scene.switch('menu');
                }
            }
        };
        
        
        /**
         * funcion que da 5 cartas por el momento no posee logica requerida
         * para el completo manejo de una mano del usuario
         */

        this.objeto = this.cache.json.get('json');
        this.cartasMano = []; 
        
        this.darCartas = () => {
             
            for (let i = 0; i < 5; i++) {
                let cartaJugador = new carta(this,this.objeto.carta[i].tipo, this.objeto.carta[i].Ataque,this.objeto.carta[i].Defensa,this.objeto.carta[i].Estrellas,this.objeto.carta[i].Clase, 'mano');
                //cartaJugador._datosCarta._nombre  = this.objeto.carta[i].nombre;
                //cartaJugador._datosCarta._tipo  = this.objeto.carta[i].tipo;
                this.cartasMano.push(cartaJugador);
                cartaJugador.render(1300+(i*50),650,this.objeto.carta[i].nombre);
                
            }
            
        }

        
        
        

        /**
         * Funciones para el inicio de una partida
         * por el momento es un boton tipo texto que inicializa con 5 cartas en el tablero (-->this.darcartas)
         * las funciones que se inicializan con pointerout y pointerover cambian el color del boton de texto
         */
        this.darTexto = this.add.text(600,300,['Iniciar ']).setFontSize(13).setColor('#00ff00').setInteractive();

        this.darTexto.on('pointerdown',function(){
            self.darCartas();
        });

        this.darTexto.on('pointerout',function(){
            self.darTexto.setColor('#00ff00');
        });

        this.darTexto.on('pointerover',function(){
            self.darTexto.setColor('#0000ff');
        });
        /**
         * busca dentro de las zonas disponibles en tablero para colocar una carta
         * diferencia entre los tipo para ubicarlos si es monstruo quedan en la parte
         * superior, si son de otro tipo las ubicara en la parte inferior
         * recibimos una variable "tipo" que dependera del tipo de la carta
         * retornada una variable i ---> determina el index de una zona disponible
         * retorna un -1 ---> si no existen zonas disponibles
         */
        this.buscarZonaDisponible = (tipo) => {
            if(tipo == 'monstruo'){
                for(let i = 13; i < 18; i++){
                    if(self.renderCartas[i].data.values.cards == 0){
                        return i;
                    }
                    
                }
            }else{
                for(let i = 19; i < 24; i++){
                    if(self.renderCartas[i].data.values.cards == 0){
                        return i;
                    }
                }
            }
            return -1;
        }
        /**
         * @param {*} cartaMano 
         * @param {*} _tipo 
         * 
         * recibe cartaMano ---> objeto del tipo carta
         *        _tipo ---> variable tipo de la clase carta 
         * llama a funcion buscarZonaDisponible para determinar el index para
         * invocar una carta, esta carta se ubicara en la posicion de la zona
         * y esta carta deja de ser arrastable 
         */
        this.invocarCarta = (cartaMano,_tipo) => {
            var index = this.buscarZonaDisponible(_tipo);
        
            if(index != -1){
                
                self.renderCartas[index].data.values.cards++;
                cartaMano.x = self.renderCartas[index].x;
                cartaMano.y = self.renderCartas[index].y;
                cartaMano.input.draggable = false;
                
            }            
        }
        /**
         * @param {*} cartaMano 
         * @param {*} _tipo 
         * recibe cartaMano ---> objeto del tipo carta
         *        _tipo ---> variable tipo de la clase carta 
         * llama a funcion buscarZonaDisponible para determinar el index para
         * colocar una carta, esta carta se ubicara en la posicion de la zona
         * y esta carta deja de ser arrastable, y arriba de esta se ubicara una
         * carta con el reverso de una carta para ocultarla
         */
        this.colocarReverso = (cartaMano,_tipo) => {
            var index = this.buscarZonaDisponible(_tipo);

            if(index != -1){
                
                self.renderCartas[index].data.values.cards++;
                cartaMano.x = self.renderCartas[index].x;
                cartaMano.y = self.renderCartas[index].y;
                cartaMano.input.draggable = false;

                var reverso = new carta(this,_tipo,'','','','','oculta');
                if(_tipo!='monstruo'){
                    reverso.render(self.renderCartas[index].x,self.renderCartas[index].y,'reversoCarta').setInteractive();
                }else{
                    reverso.render(self.renderCartas[index].x,self.renderCartas[index].y,'reversoCarta').setInteractive().setAngle(90);
                }
                
            }
        }
        
        
        /**
         * var coordenadas = arreglo
         * coordenadas se refiere a los puntos relacionados
         * a la creacion de las zonas de posicionamiento de
         * cartas en el juego.
         * 
         */

        

        this.coordenadas = [
            {x: 95, y:40, color: 5},
            {x: 185, y:40, color: 3},
            {x: 395, y:40, color: 2},
            {x: 545, y:40, color: 2},
            {x: 695, y:40, color: 2},
            {x: 845, y:40, color: 2},
            {x: 995, y:40, color: 2},
            {x: 145, y:190, color: 4},
            {x: 350, y:190, color: 1},
            {x: 500, y:190, color: 1},
            {x: 650, y:190, color: 1},
            {x: 800, y:190, color: 1},
            {x: 950, y:190, color: 1},
            {x: 190, y:420, color: 1},
            {x: 340, y:420, color: 1},
            {x: 490, y:420, color: 1},
            {x: 640, y:420, color: 1},
            {x: 790, y:420, color: 1},
            {x: 995, y:420, color: 4},
            {x: 145, y:570, color: 2},
            {x: 295, y:570, color: 2},
            {x: 445, y:570, color: 2},
            {x: 595, y:570, color: 2},
            {x: 745, y:570, color: 2},
            {x: 955, y:570, color: 3},
            {x: 1045, y:570, color: 5},

        ]
        /**
         * arreglo de zonaCartas y render cartas
         * estos arreglos facilitaran la creacion de cada zona y 
         * permitira que estas se creen con mayor facilidad
         */
        this.zonaCartas = [];
        this.renderCartas = [];

        
        /**
         * ciclo para la creacion de las zonas y sus respectivas renderizaciones
         */
        
        for(let i=0; i<26; i++){
            this.zonaAux = new Zona(this, this.coordenadas[i].x, this.coordenadas[i].y, this.coordenadas[i].color);
            
            this.renderAux = this.zonaAux.renderZone();
            this.zonaAux.renderOutline(this.renderAux);
             
            this.zonaCartas.push(this.zonaAux);
            this.renderCartas.push(this.renderAux);
        }
        /**
         * Creacion barras de vida 
         * dos barras de vida
         * una player otra para oponente
         * 4000 de vida equivalente al 100% de la barra
         */
         this.hacerBarra = (x,y,color,largo) =>{
            let barra = this.add.graphics();
            barra.fillStyle(color,1);
            barra.fillRect(0,0,largo,20);
            barra.x = x;
            barra.y = y;
            return barra;
        }
        var vidaOponente = 400;
        let vidaUsuario = 400;

        let barraOponente = this.hacerBarra(1240,40,0x2ecc71,vidaOponente);
        let barraUsuario = this.hacerBarra(1240,570,0x2ecc71,vidaUsuario);
        /**
         * 
         * @param {*} barra : Barra a actualizar, puede ser una barra oponente o barra usuario 
         * @param {*} valor : Cantidad de "danno" o "curacion" inflingido a un oponente o 
         * usuario, este se usara para actualizar valores de escala de la barra
         * 
         * Esta funcion se encarga de actualizar el tamaño de la barra a crear, es decir
         * si esto ocurre la barra cambiara su tamanno dependiendo de cuanto valor sea enviado
         * esto actualizara el tamanno de la barra
         */
        this.setValorBarra=(barra,valor)=>{
            barra.scaleX = valor/400;
        }
        
        /**
        * el daño tendra que ser divido en base a 10
        * debido que como la barra de vida es proporcional a
        * la cantidad de vida de un usuario, esta se ira disminuyendo
        * en base a esta, es decir 
        * si la vida es 4000 pasa a 400 por temas de tamaño de pantalla
        * un golde de 200 pasa a ser de 20 y uno de 2000 pasa a ser de 200
        * esa se actualiza en la funcion setValorBarra-->
        */
        this.quitarPuntosOponente = () => {
            vidaOponente-=10;
            if(!(vidaOponente<=0)){
                self.setValorBarra(barraOponente,vidaOponente);
            }else if(vidaOponente<=0){
                self.setValorBarra(barraOponente,0);
                
            }
            this.verificarEstadoPartida();   
        }
        this.puntosOponente=this.add.text(550,330,['oponente']).setFontSize(13).setColor('#00ff00').setInteractive();

        this.puntosOponente.on('pointerdown',function(){
            self.quitarPuntosOponente();
        })
        this.quitarPuntosUsuario = () => {
            vidaUsuario-=10;
            if(!(vidaUsuario < 0)){
                self.setValorBarra(barraUsuario,vidaUsuario);
            }else if(vidaUsuario<=0){
                self.setValorBarra(barraUsuario,0);
                
            }
            this.verificarEstadoPartida();            
        }
       this.puntosUsuario=this.add.text(650,330,['usuario']).setFontSize(13).setColor('#00ff00').setInteractive();

       this.puntosUsuario.on('pointerdown',function(){
            self.quitarPuntosUsuario();
        })

        

        /**
         * Agregar mazo a tablero (solo visualmente)
         * falta agregar funcionalidad de sacar una carta
         * solo mostrara una carta
         */
         var mazoUsuario = new carta(this);
         var mazoOponente = new carta(this);
        
         mazoUsuario.render(993.5,620,'reversoCarta').disableInteractive();
         mazoOponente.render(222.5,90,'reversoCarta').disableInteractive();

         this.renderCartas[1].data.values.cards++;
         this.renderCartas[24].data.values.cards++;
        
        /**
        * Se declara una variable numeroCartasUsuario para hacer prueba de quitar cartas de un mazo
        * se definen un texto interactuable para que si este es interactuado, se baje un valor a la variable
        * numeroCartasUsuario, si esto ocurre y llega a 0 la variable anterior se da alerta que el juego a terminado
        */
         var numeroCartasUsuario = 30;
         this.textoMazoUsuario = this.add.text(993.5,620,[numeroCartasUsuario]).setFontSize(13).setColor('#00ff00').setInteractive();
         this.quitarCartasMazo = () => {
             numeroCartasUsuario-=1;
             if(numeroCartasUsuario<=0){
                
                this.textoMazoUsuario.setText(0);
             }else{
                this.textoMazoUsuario.setText([numeroCartasUsuario]);
             }
             this.verificarEstadoPartida();   
             
         }
         this.botonQuitarCartaMazo=this.add.text(950,670,['mazo usuario']).setFontSize(13).setColor('#00ff00').setInteractive();
         this.botonQuitarCartaMazo.on('pointerdown',function(){
             self.quitarCartasMazo();
         })
            

    }

    
    
    


}
