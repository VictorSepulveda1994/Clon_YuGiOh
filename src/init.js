const config = {
    
    
    type: Phaser.AUTO,
    scale: {
        parent: "contenedor",
        autoCenter: Phaser.Scale.CENTER_BOTH,
        mode: Phaser.Scale.FIT,
        width: 1680,
        height: 720,

    },
    scene: [Tablero]
}

var game = new Phaser.Game(config);