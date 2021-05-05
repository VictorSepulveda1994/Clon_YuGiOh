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
        /*
        this.zonaAux = new Zona(this, 100, 300, 0xff69b4);
        this.renderAux = this.zonaAux.renderZone();
        this.zonaAux.renderOutline(this.renderAux);
        */

        this.zonaMazo = new ZonaMazo(this, 770,200, 2);
        this.dropZone = this.zonaMazo.renderZone();
        this.outline = this.zonaMazo.renderOutline(this.dropZone);


        //this.mostrarCartas= () =>{
        for(let i = 0; i < 6; i++) {
            var cartaJugador = new CartaEdicion(this);
            cartaJugador.render(i*105+50,70,'chungo');
            //var xx = i*105+50//Phaser.Math.Between(game.config.width*.25, game.config.width*.75);
            //var yy = 70//Phaser.Math.Between(game.config.height*.25, game.config.height*.75);
            //var dot = this.add.image(xx, yy, "dot"+i);
            //cartaJugador.setScale(0.5);
            //cartaJugador.setInteractive();
        }
        //}
        //self.mostrarCartas();

        
        this.input.on('drop', function (pointer, gameObject, dropZone) {      
            console.log("coordenadas del objeto"+gameObject.x + ","+gameObject.y );
            console.log("coordenadas de la zona"+dropZone.x + ","+dropZone.y );
            if(dropZone.data.values.cards<=30){
                dropZone.data.values.cards++;
                //var wea = this.add.image(dropZone.x,dropZone.y,'chungoNombre');
                //gameObject.x = dropZone.x ;
                //gameObject.y = dropZone.y ;
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
                //gameObject.disableInteractive();
            }else{
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        })
        

        //this.input.on('pointerdown', this.startDrag, this);
        //let graphics = this.add.graphics();
        //graphics.fillStyle(0xff3300, 1);
        //graphics.fillRect(768, 200, 130, 400);
        //this.add.text(50, 50, "Zona del mazo", { font: "50px Courier", fill: "#000000"});


    }

    /*
    startDrag(pointer, targets) {
        console.log("start drog");
        this.input.off('pointerdown', this.startDrag, this);
        this.dragObj = targets[0];
        this.input.on('pointermove', this.doDrag, this);
        this.input.on('pointerup', this.stopDrag, this);
    }

    doDrag(pointer) {
        console.log("do drog");
        this.dragObj.x = pointer.x;
        this.dragObj.y = pointer.y;
    }

    stopDrag() {
        console.log("stop drog");
        this.input.on('pointerdown', this.startDrag, this);
        this.input.off('pointermove', this.doDrag, this);
        this.input.off('pointerup', this.stopDrag, this);        
    }
*/
    update(time, delta) {

    }
}