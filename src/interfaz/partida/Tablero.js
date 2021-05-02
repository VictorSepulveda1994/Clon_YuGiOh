class Tablero extends Phaser.Scene {
    constructor() {
        super({ key: "Tablero" });
    
    }

    preload() {
        this.load.image('cartaAux','./assets/chungo.png');
        this.load.image('reversoCarta','./assets/reversoCarta.png');
    }

    create() {
        
        let self = this;

        
            
        this.linea1 = this.add.graphics();
        this.linea1.fillStyle(0xffffff,1);
        this.linea1.fillRect(0,360,1200,1);

        this.linea2 = this.add.graphics();
        this.linea2.fillStyle(0xffffff,1);
        this.linea2.fillRect(1200,0,1,720);
        
        /**
         * funcion que da 5 cartas por el momento no posee logica requerida
         * para el completo manejo de una mano del usuario
         */

        
        this.darCartas = () => {
            for (let i = 0; i < 5; i++) {
                var cartaJugador = new carta(this);
                cartaJugador.render(1300+(i*50),650,'cartaAux');
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
        })

        this.darTexto.on('pointerout',function(){
            self.darTexto.setColor('#00ff00');
        })

        this.darTexto.on('pointerover',function(){
            self.darTexto.setColor('#0000ff');
        })

        
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
         * Funcion para dejar una carta en una zona especifica que el usuario desee
         * esta ubicara al gameObject en este caso una carta, y la podra dejar en una 
         * dropZone o zona ya creada, si esto no ocurre la carta volvera a la posicion inicial
         * 
         * Por el momento no discrimina zonas de usuario y adversario
         */
         this.input.on('drop', function (pointer, gameObject, dropZone) {      
            console.log(gameObject.x + ","+gameObject.y );
            console.log(dropZone.x + ","+dropZone.y );
            if(dropZone.data.values.cards==0){
                dropZone.data.values.cards++;
                gameObject.x = dropZone.x ;
                gameObject.y = dropZone.y ;
                gameObject.disableInteractive();
            }else{
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        })


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
                this.puntosOponente.destroy();
            }
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
                this.puntosUsuario.destroy();
            }            
        }
       this.puntosUsuario=this.add.text(650,330,['usuario']).setFontSize(13).setColor('#00ff00').setInteractive();

       this.puntosUsuario.on('pointerdown',function(){
            self.quitarPuntosUsuario();
        })

        this.imagen = this.add.image(0,0,'cartaAux');
        this.container = this.add.container(1440,300);
        this.container.add(this.imagen);

        /**
         * Agregar mazo a tablero (solo visualmente)
         * falta agregar funcionalidad de sacar una carta
         * solo mostrara una carta
         */
         var mazoUsuario = new carta(this);
         var mazoOponente = new carta(this);
        
         
        

         mazoUsuario.render(993.5,620,'reversoCarta').disableInteractive();;
         mazoOponente.render(222.5,90,'reversoCarta').disableInteractive();;

         
 
         this.renderCartas[1].data.values.cards++;
         this.renderCartas[24].data.values.cards++;
 
         /**
          * prueba de funcion para mazo (quitar cartas, si no quedan cartas fin de juego)
          */
         var numeroCartasUsuario = 30;
         this.textoMazoUsuario = this.add.text(993.5,620,[numeroCartasUsuario]).setFontSize(13).setColor('#00ff00').setInteractive();
         this.quitarCartasMazo = () => {
             numeroCartasUsuario-=1;
             if(numeroCartasUsuario<=0){
                console.log("fin de juego");
                this.textoMazoUsuario.setText(0);
             }else{
                this.textoMazoUsuario.setText([numeroCartasUsuario]);
             }
             console.log(numeroCartasUsuario);
         }
         this.botonQuitarCartaMazo=this.add.text(950,670,['mazo usuario']).setFontSize(13).setColor('#00ff00').setInteractive();
         this.botonQuitarCartaMazo.on('pointerdown',function(){
             self.quitarCartasMazo();
         })
            

    }
    
    


}
