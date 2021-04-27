var configuracion = 
{
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "container",
    scale:
    {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.Center
    },
};


var game = new Phaser.Game(configuracion);
game.scene.add('Presentacion', Presentacion);
game.scene.add('menu', Menu);
game.scene.start('presentacion');
