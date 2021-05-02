/*import { Mazo } from './scenes/Mazo.js';
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
}*/
var configuracion = 
{
    type: Phaser.AUTO,
    width: 900,
    height: 600,
    parent: "contenedor",
    scene: [Presentacion, Menu, Tablero, CrearCarta, EditarMazo],
    scale:
    {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.Center
    },
};


/* Max
backgroundColor: '#392542',
*/

/* sergio const configuracion = {
    
    
    type: Phaser.AUTO,
    scale: {
        parent: "contenedor",
        autoCenter: Phaser.Scale.CENTER_BOTH,
        mode: Phaser.Scale.FIT,
        width: 1680,
        height: 720,

    },
    scene: [Presentacion,Menu,Tablero],
} */

var game = new Phaser.Game(configuracion);
