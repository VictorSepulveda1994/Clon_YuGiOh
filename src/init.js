import { Mazo } from './scenes/Mazo.js';
import { CrearMazo } from './scenes/CrearMazo.js';
import { EditarMazo } from './scenes/EditarMazo.js';

const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 600,
    parent: "contenedor",
    //type: Phaser.CANVAS,
    //backgroundColor: '#000000',
    //scene: [Mazo, CrearMazo, EditarMazo],
    scene: [CrearMazo],
    physics: {
        default: 'arcade',
        arcade: {
          debug: false
        }
    }
}

var game = new Phaser.Game(config);