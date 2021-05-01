import { RestartButton } from "../components/restart-button.js";
class Mazo extends Phaser.Scene {
    constructor() {
        super({key: "Mazo"});
        this.restartButton = new RestartButton(this);
    }

    preload() {

    }


    create() {
        let graphics = this.add.graphics();
        graphics.fillStyle(0xff3300, 1);
        graphics.fillRect(10, 10, 1180, 580);
        //this.add.text(50, 50, "Menu principal Yu Gi Oh", { font: "50px Courier", fill: "#000000"});
        //this.add.text(50, 200, "Opcion1", { font: "50px Courier", fill: "#000000"});
        //this.add.text(50, 300, "Opcion2", { font: "50px Courier", fill: "#000000"});
        //this.add.text(50, 400, "Opcion3", { font: "50px Courier", fill: "#000000"});


    }



    update(time, delta) {

    }
}