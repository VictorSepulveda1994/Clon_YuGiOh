var configuracion = 
{
    type: Phaser.AUTO,
    width: 1080,
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
