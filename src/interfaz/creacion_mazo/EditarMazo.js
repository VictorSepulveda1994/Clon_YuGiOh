class EditarMazo extends Phaser.Scene {
    constructor() {
        super({key: "EditarMazo"});
        var button;
        var background;
    }

    preload() {
        for(var i = 0; i < 7; i++) {
            //this.load.image("dot"+i, "images/"+i, ".png");
            this.load.image("dot"+i,'./src/datos/chungo.png');
        }
    }

    create() {
        for(var i = 0; i < 7; i++) {
            var xx = i*120//Phaser.Math.Between(game.config.width*.25, game.config.width*.75);
            var yy = 70//Phaser.Math.Between(game.config.height*.25, game.config.height*.75);
            var dot = this.add.image(xx, yy, "dot"+i);
            dot.setScale(0.5);
            dot.setInteractive();
        }
        this.input.on('pointerdown', this.startDrag, this);
        //let graphics = this.add.graphics();
        //graphics.fillStyle(0xff3300, 1);
        //graphics.fillRect(10, 10, 1180, 580);
        //this.add.text(50, 50, "Menu principal Yu Gi Oh", { font: "50px Courier", fill: "#000000"});
        //this.add.text(50, 200, "Opcion1", { font: "50px Courier", fill: "#000000"});
        //this.add.text(50, 300, "Opcion2", { font: "50px Courier", fill: "#000000"});
        //this.add.text(50, 400, "Opcion3", { font: "50px Courier", fill: "#000000"});
    }
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

    update(time, delta) {

    }
}