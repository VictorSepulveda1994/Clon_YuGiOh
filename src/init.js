/*var configuracion = 
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
*/

/* Max
backgroundColor: '#392542',
*/

const configuracion = {
    
    
    type: Phaser.AUTO,
    scale: {
        parent: "contenedor",
        width: 1680,
        height: 720,

    },
    scene: [Presentacion,Menu,Tablero,CrearCarta,EditarMazo],
    
    callbacks:{
        postBoot: function (game) {
            // In v3.15, you have to override Phaser's default styles
            game.canvas.style.width = '100%';
            game.canvas.style.height = '100%';
          }
    }
}


//use command "npm install @azerion/phaser-input --save-dev" to install imput plugin
var game = new Phaser.Game(configuracion);
