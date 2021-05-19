let count = 0;
let nfila = 0;
let xx = 0;
let yy = 70;
// arreglo que contiene las cartas creadas
this.cartas1 = ['jiles','gatito','chungo','bachele','pinera','kramer','vidal','trauco','carabineroExpresivo',
                'investigacionAFondo','bonoDePresidente','jiles'];
let images = ['jilesNombre','chungoNombre','bacheleNombre','gatitoNombre','vidalNombre','pineraNombre',
            'kramerNombre', 'traucoNombre', 'carabineroExpresivoNombre','investigacionAFondoNombre',
            'bonoDePresidenteNombre'];
//variable donde se guardara el mazo
let mazo=[];
let cartasMazoAux =[];
let mazoPreCargado = ['jiles','bachele','pinera','chungo','investigacionAFondo','vidal', 'chungo','gatito',
'jiles','vidal','carabineroExpresivo','bonoDePresidente','gatito','kramer','trauco'];
class EditarMazo extends Phaser.Scene {
    constructor() {
        super({key: "EditarMazo"});
        
    }
    //Imagenes precargadas
    preload() {
        this.load.image('chungo','./src/datos/chungo.png');
        this.load.image('chungoNombre','./src/datos/chungoNombre.png');
        this.load.image('btnNext', './src/datos/btnNExt.png');
        this.load.image('btnPrev', './src/datos/btnPrev.jpg');
        this.load.image('gatito', './src/datos/gatito.png');
        this.load.image('gatitoNombre', './src/datos/gatitoNombre.png');
        this.load.image('jiles', './src/datos/jiles.png');
        this.load.image('jilesNombre', './src/datos/jilesNombre.png');
        this.load.image('pinera', './src/datos/pinerawea.png');
        this.load.image('pineraNombre', './src/datos/pineraweaNombre.png');
        this.load.image('vidal', './src/datos/vidal.png');
        this.load.image('vidalNombre', './src/datos/vidalNombre.png');
        this.load.image('bachele', './src/datos/bachele.png');
        this.load.image('bacheleNombre', './src/datos/bacheleNombre.png');
        this.load.image('kramer', './src/datos/kramer.png');
        this.load.image('kramerNombre', './src/datos/kramerNombre.png');
        this.load.image('trauco', './src/datos/trauco.png');
        this.load.image('traucoNombre', './src/datos/traucoNombre.png');
        this.load.image('bonoDePresidente', './src/datos/bonoDePresidente.png');
        this.load.image('bonoDePresidenteNombre', './src/datos/bonoDePresidenteNombre.png');
        this.load.image('carabineroExpresivo', './src/datos/carabineroExpresivo.png');
        this.load.image('carabineroExpresivoNombre', './src/datos/carabineroExpresivoNombre.png');
        this.load.image('investigacionAFondo', './src/datos/investigacionAFondo.png');
        this.load.image('investigacionAFondoNombre', './src/datos/investigacionAFondoNombre.png');

        /*
        this.load.image('cartaEfecto','assets/cartaEfecto.png');
        this.load.image('cartaNormal','assets/cartaNormal.png');
        this.load.image('cartaTrampa','assets/cartaTrampa.png');
        this.load.image('cartaMagica','assets/cartaMagica.png');
        this.load.image('default','assets/imagenes/default.jpg');
        this.load.image('nivel','assets/nivel.png');
        */
        
    }

    //Creacion de botones
    create() {
        const clickButton = this.add.text(750, 50, 'Mostrar Mazo', { fill: '#0f0' })
        .setInteractive()
        .on('pointerdown', () => this.updateClickMostrarCartas() );

        const clickButtonGuardarMazo = this.add.text(750, 0, 'Guardar Mazo', { fill: '#0f0' })
        .setInteractive()
        .on('pointerdown', () => this.updateClickGuardarMazo() );

        const clickButtonCargarMazo = this.add.text(750, 100, 'Cargar Mazo', { fill: '#0f0' })
        .setInteractive()
        .on('pointerdown', () => this.updateClickCargarMazo() );
        
        const nextButton = this.add.image(400, 600, 'btnNext')
        .setInteractive()
        .on('pointerdown', () => this.updateClickNext() );

        const prevButton = this.add.image(200, 600, 'btnPrev')
        .setInteractive()
        .on('pointerdown', () => this.updateClickPrev() ); 

        //this.creacionCartas();
        
    }
    //Metodo que se encarga de mostrar las cartas en pantalla y ademas les agrega la funcion
    // de que pueda ser clickeables.
    llenarFila(cartas){
        cartas.forEach((element,index) => {  
            console.log(element);
            xx = (index%6)*105+50;
            var dot = this.add.image(xx,yy,element).setName(element);
            dot.setScale(0.5);
            dot.setInteractive();
            dot.on('clicked', this.clickHandler, this);
            if(index%6==0 && index!=0){
                yy+=155;
            }
        });

        this.input.on('gameobjectup', function (pointer, gameObject)
        {
            gameObject.emit('clicked', gameObject);
        }, this);
        xx=0;
        yy=70;
    }
/*
    instanciaCarta(nombreCarta,tipoCarta,imagenCarta,claseCarta,descripcionCarta,atq,def,niv,imageNiv){
        let carta= new CartaBase
        ({
            scene: this,
            x:0,
            y:0,
            nombre:nombreCarta,
            carta:tipoCarta,
            imagen:imagenCarta,
            clase:claseCarta,
            descripcion:descripcionCarta,
            ataque:atq,
            defensa:def,
            nivel:niv,
            imagenNivel:imageNiv
        });
    }

    creacionCartas(){
        cartas1.push(this.instanciaCarta("Pamela Jiles",'cartaNormal','jiles',"clase Normal",
        "Vieja de mayor edad, mentirosa y comunista, tambien se cree superman",1500,200,3,'nivel'));
        
        cartas1.push(this.instanciaCarta("Chungo",'cartaNormal','chungo',"clase Normal",
        "Vieja de mayor edad, mentirosa y comunista, tambien se cree superman",1500,200,4,'nivel'));
        cartas1.push(this.instanciaCarta("Gatito",'cartaNormal','gatito',"clase Normal",
        "Vieja de mayor edad, mentirosa y comunista, tambien se cree superman",1500,200,6,'nivel'));
        cartas1.push(this.instanciaCarta("Piñera El Wea",'cartaNormal','pinera',"clase Normal",
        "Vieja de mayor edad, mentirosa y comunista, tambien se cree superman",1500,200,1,'nivel'));
        cartas1.push(this.instanciaCarta("Kramer",'cartaNormal','kramer',"clase Normal",
        "Vieja de mayor edad, mentirosa y comunista, tambien se cree superman",1500,200,4,'nivel'));
        cartas1.push(this.instanciaCarta("Arturito Loco",'cartaNormal','vidal',"clase Normal",
        "Vieja de mayor edad, mentirosa y comunista, tambien se cree superman",1500,200,3,'nivel'));
        cartas1.push(this.instanciaCarta("La Mismisima Bachele",'cartaNormal','bachele',"clase Normal",
        "Vieja de mayor edad, mentirosa y comunista, tambien se cree superman",1500,200,2,'nivel'));
        
        
    }
    */
    //Metodo que va colocando las cartas seleccionados en un sector diferente de la pantalla para que 
    //sean visibles y ademas estas sean clickeables.
    cartasMazo(deck){
        deck.forEach((element)=> {
            if(element.name == 'jiles'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[0]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.6);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
            if(element.name == 'gatito'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[3]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.6);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
            if(element.name == 'bachele'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[2]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.6);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
            if(element.name == 'vidal'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[4]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.6);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
            if(element.name == 'kramer'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[6]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.6);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
            if(element.name == 'pinera'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[5]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.6);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
            if(element.name == 'chungo'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[1]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.6);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
            if(element.name == 'trauco'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[7]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.6);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
            if(element.name == 'carabineroExpresivo'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[8]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.6);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
            if(element.name == 'investigacionAFondo'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[9]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.6);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
            if(element.name == 'bonoDePresidente'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[10]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.6);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
        })

        this.input.on('gameobjectup', function (pointer, gameObject)
        {
            gameObject.emit('click', gameObject);
        }, this);

    }
    //Metodo que va colocando las cartas precargados en un sector diferente de la pantalla para que 
    //sean visibles y ademas estas sean clickeables, es igual que el anterior pero este lo hace sobre
    //un mazo ya creado
    cartasMazoPlus(deck){
        deck.forEach((element)=> {
            if(element == 'jiles'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[0]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.5);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
            if(element == 'gatito'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[3]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.5);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
            if(element == 'bachele'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[2]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.5);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
            if(element == 'vidal'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[4]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.5);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
            if(element == 'kramer'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[6]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.5);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
            if(element == 'pinera'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[5]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.5);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
            if(element == 'chungo'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[1]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.5);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
            if(element == 'trauco'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[7]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.6);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
            if(element == 'carabineroExpresivo'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[8]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.6);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
            if(element == 'investigacionAFondo'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[9]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.6);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
            if(element == 'bonoDePresidente'){
                var imagenMazo = this.add.image(820, 210+(count*25), images[10]);
                imagenMazo.setInteractive();
                imagenMazo.setScale(0.6);
                imagenMazo.on('click', this.clickHandlerRight, this);
                count++;
            }
        })

        this.input.on('gameobjectup', function (pointer, gameObject)
        {
            gameObject.emit('click', gameObject);
        }, this);

        //count++;
    }
    clickHandler(dot) {
        dot.setScale(0.5);
        cartasMazoAux.push(dot);
        this.cartasMazo(cartasMazoAux);
        cartasMazoAux=[];
    }
/*
    deshabilitarClick(){
        imagen.off('clicked',this.clickHandler);
        imagen.input.enabled = false;
        imagen.setVisible(false);
    }
    */
    
    //Metodo que permite que sea pueda sacar una imagen ya seleccionada de esa lista

    clickHandlerRight(imagenMazo) {
        //console.log('Clicke',count );
        imagenMazo.off('click', this.clickHandlerRight);
        imagenMazo.input.enabled = false;
        imagenMazo.setVisible(false);
        count--;
        if(count<0){
            count=0;
        }
        console.log(count);
    }

    //Boton que guarda el mazo
    updateClickGuardarMazo(){
        mazo = cartasMazoAux;
        alert('Mazo Guardado');
        console.log('Mazo Guardado');
    }

    updateClickNext() {
        /*
        cartas1.forEach(element => {
            element.off('clicked',this.clickHandler);
            element.input.enabled = false;
            element.setVisible(false);
        });
        this.llenarFila(cartas2); 
        */ 
    }

    updateClickPrev() {
        //this.llenarFila(cartas1); 
    }

    //Boton para mostrar las cartas
    updateClickMostrarCartas() {
        this.llenarFila(cartas1); 
    }

    //Boton para cargar el mazo
    updateClickCargarMazo() {
        count=0;
        this.cartasMazoPlus(mazoPreCargado);
        //console.log(mazoPreCargado[1]);
        

    }


    // I HATE PHASER :B
    update(time, delta) {

    }
}