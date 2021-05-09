let count =0;
let nfila = 0;
let xx = 0;
let yy = 70;
class EditarMazo extends Phaser.Scene {
    constructor() {
        super({key: "EditarMazo"});
        
    }

    preload() {
        this.load.image('chungo','./src/datos/chungo.png');
        this.load.image('chungoNombre','./src/datos/chungoNombre.png');
        this.load.image('btnNext', './src/datos/btnNExt.png');
        this.load.image('gatito', './src/datos/gatito.png');
    }

    create() {
        const clickButton = this.add.text(750, 50, 'Mostrar Mazo', { fill: '#0f0' })
        .setInteractive()
        .on('pointerdown', () => this.updateClickMostrarCartas() );
        
        const nextButton = this.add.image(400, 600, 'btnNext')
        .setInteractive()
        .on('pointerdown', () => this.updateClickNext() );

        const prevButton = this.add.text(200, 600, 'Prev', { fill: '#0f0' })
        .setInteractive()
        .on('pointerdown', () => this.updateClickPrev() );  

    }

    filaLlena(nfila, xx, yy) {
        if (nfila < 4) {
            this.llenarFila(nfila, 0, yy+150);
        }
    }

    llenarFila(nfila, xx, yy) {
        let self = this;
        for(let i = 1; i < 7; i++) {
            xx = i*105+50//Phaser.Math.Between(game.config.width*.25, game.config.width*.75);
            //yy = 70//Phaser.Math.Between(game.config.height*.25, game.config.height*.75);
            var dot = this.add.image(xx, yy, 'chungo').setName("chungo"+i);
            dot.setScale(0.5);
            dot.setInteractive();
            this.agregarAContainer(dot);
            dot.on('clicked', this.clickHandler, this);
        }
        this.input.on('gameobjectup', function (pointer, gameObject)
        {
            gameObject.emit('clicked', gameObject);
        }, this);
        nfila += 1;
        this.filaLlena(nfila, xx, yy);
    }

    llenarFila2(nfila, xx, yy) {
        let self = this;
        for(let i = 1; i < 7; i++) {
            xx = i*105+50//Phaser.Math.Between(game.config.width*.25, game.config.width*.75);
            //yy = 70//Phaser.Math.Between(game.config.height*.25, game.config.height*.75);
            var dot = this.add.image(xx, yy, "gatito").setName("gatito"+i);;
            dot.setScale(0.5);
            dot.setInteractive();
            this.agregarAContainer(dot);
            dot.on('clicked', this.clickHandler, this);
        }
        this.input.on('gameobjectup', function (pointer, gameObject)
        {
            gameObject.emit('clicked', gameObject);
        }, this);
        nfila += 1;
        this.filaLlena(nfila, xx, yy);
    }

    agregarAContainer(dot) {
        var container = this.add.container(0, 70);
        container.add([dot]);
        //console.log(container.getByName("chungo1")); //encontrar por un nombre de carta especifico
        console.log(container.getAt(0).name); //obtiene nombre de la carta (en cada fila se enumeran del 1 al 6)
        //console.log(container.getAt(0).data.get); 
        /*this.tweens.add({
            targets: container,
            angle: { value: 360, duration: 6000 },
            scaleX: { value: 0.5, duration: 3000, yoyo: true, ease: 'Quad.easeInOut' },
            scaleY: { value: 0.5, duration: 3000, yoyo: true, ease: 'Quad.easeInOut' },
            repeat: -1
        });*/
    }


    clickHandler(dot) {
        var aux = this.add.image(820, 210+(count*20), "chungoNombre");
        aux.setInteractive();
        aux.on('clicked', this.clickHandlerRight, this);
        this.input.on('gameobjectup', function (pointer, gameObject) {
            gameObject.emit('clicked', gameObject);
        }, this);
        count++;
        aux.setScale(0.5);
        dot.setVisible(true);
    }

    clickHandlerRight(aux) {
        aux.off('clicked', this.clickHandler);
        aux.input.enabled = false;
        aux.setVisible(false);
    }

    updateClickNext() {
        xx = 0;
        yy = 70;
        this.llenarFila2(1, xx, yy); 
    }

    updateClickPrev() {
        //this.llenarFila(1, xx, yy); 
    }

    updateClickMostrarCartas() {
        this.llenarFila(1, xx, yy); 
    }

    update(time, delta) {

    }
}