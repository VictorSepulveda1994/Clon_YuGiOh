var configuracion = 
{
    type: Phaser.AUTO,
    width: 900,
    height: 600,
    parent: "container",
    scene: [Presentacion,Menu],
    scale:
    {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.Center
    },
};

var game = new Phaser.Game(configuracion);
