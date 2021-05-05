let count =0;
class EditarMazo extends Phaser.Scene {
    constructor() {
        super({key: "EditarMazo"});
        
    }

    preload() {
            this.load.image('chungo','./src/datos/chungo.png');
            this.load.image('chungoNombre','./src/datos/chungoNombre.png');

    }

    create() {

        let self = this;
        var count = 0;

        //this.zonaMazo = new ZonaMazo(this, 770,200, 2);
        //this.dropZone = this.zonaMazo.renderZone();
        //this.outline = this.zonaMazo.renderOutline(this.dropZone);


        //this.mostrarCartas= () =>{
        for(let i = 0; i < 6; i++) {

            //var cartaJugador = new CartaEdicion(this);
            //cartaJugador.render(i*105+50,70,'chungo');
            var xx = i*105+50//Phaser.Math.Between(game.config.width*.25, game.config.width*.75);
            var yy = 70//Phaser.Math.Between(game.config.height*.25, game.config.height*.75);
            var dot = this.add.image(xx, yy, "chungo");
            //let dot = new cartaAux(this,xx,yy,'chungo');
            dot.setScale(0.5);
            dot.setInteractive();
            dot.on('clicked', this.clickHandler, this);
        }

        this.input.on('gameobjectup', function (pointer, gameObject)
        {
            gameObject.emit('clicked', gameObject);
        }, this);
        //}
        //self.mostrarCartas();

        /*
        this.input.on('drop', function (pointer, gameObject, dropZone) {      
            console.log("coordenadas del objeto"+gameObject.x + ","+gameObject.y );
            console.log("coordenadas de la zona"+dropZone.x + ","+dropZone.y );
            if(dropZone.data.values.cards<=30){
                dropZone.data.values.cards++;
                var cartaAux = new CartaEdicion();
                cartaAux.render()
                gameObject.x = dropZone.x ;
                gameObject.y = dropZone.y ;
                //gameObject.disableInteractive();
            }else{
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        })
        */
        

        //this.input.on('pointerdown', this.startDrag, this);
        //let graphics = this.add.graphics();
        //graphics.fillStyle(0xff3300, 1);
        //graphics.fillRect(768, 200, 130, 400);
        //this.add.text(50, 50, "Zona del mazo", { font: "50px Courier", fill: "#000000"});


    }

clickHandler (dot){

    //dot.off('clicked', this.clickHandler);
    //dot.input.enabled = false;
    var aux = this.add.image(820, 210+(count*20), "chungoNombre");
    count++;
    aux.setScale(0.5);
    dot.setVisible(true);
}
/*
clickHandler (aux){

    aux.off('clicked', this.clickHandler);
    aux.input.enabled = false;
    //var aux = this.add.image(820, 210+(count*20), "chungoNombre");
    //count++;
    aux.setScale(0.5);
    aux.setVisible(true);
}
*/
    update(time, delta) {

    }
}