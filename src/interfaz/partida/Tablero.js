

class Tablero extends Phaser.Scene {
    constructor() {
        super({ key: "Tablero" });

    }

    preload() {
    }

    create() {
        

        

        let self = this;

        this.zonaMonstruo1 = new Zona(this, 20, 40, 1);
        this.renderMonstruo1 = this.zonaMonstruo1.renderZone();
        this.outLineMonstruo1 = this.zonaMonstruo1.renderOutline(this.renderMonstruo1);

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
        this.zonaCartas = [];
        this.renderCartas = [];
        

        for(let i=0; i<26; i++){
            this.zonaAux = new Zona(this, this.coordenadas[i].x, this.coordenadas[i].y, this.coordenadas[i].color);
            this.renderAux = this.zonaAux.renderZone();
            this.zonaAux.renderOutline(this.renderAux);
             
            this.zonaCartas.push(this.zonaAux);
            this.renderCartas.push(this.renderAux);
        }

    }



}