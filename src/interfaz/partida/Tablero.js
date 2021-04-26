class Tablero extends Phaser.Scene {
    constructor() {
        super({ key: "Tablero" });

    }

    preload() {
        this.load.image('cartaAux','./src/datos/chungo.png')
    }

    create() {

        let self = this;
        /**
         * funcion que da 5 cartas por el momento no posee logica requerida
         * para el completo manejo de una mano del usuario
         */
        this.darCartas = () => {
            for (let i = 0; i < 5; i++) {
                var cartaJugador = new carta(this);
                cartaJugador.render(450+(i*100),500,'cartaAux');
            }
        }
        /**
         * Funciones para el inicio de una partida
         * por el momento es un boton tipo texto que inicializa con 5 cartas en el tablero (-->this.darcartas)
         * las funciones que se inicializan con pointerout y pointerover cambian el color del boton de texto
         */
        this.darTexto=this.add.text(600,300,['Iniciar']).setFontSize(13).setColor('#00ff00').setInteractive();

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
            {x: 20, y:40, color: 2},
            {x: 110, y:40, color: 3},
            {x: 395, y:40, color: 2},
            {x: 545, y:40, color: 2},
            {x: 695, y:40, color: 2},
            {x: 845, y:40, color: 2},
            {x: 995, y:40, color: 2},
            {x: 70, y:190, color: 4},
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
            {x: 1130, y:420, color: 4},
            {x: 145, y:570, color: 2},
            {x: 295, y:570, color: 2},
            {x: 445, y:570, color: 2},
            {x: 595, y:570, color: 2},
            {x: 745, y:570, color: 2},
            {x: 1090, y:570, color: 3},
            {x: 1180, y:570, color: 2},

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


        
            
            

    }
    



}
