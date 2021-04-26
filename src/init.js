const config = {
    width: 1280,
    height: 720,
    
    type: Phaser.AUTO,
    scale: {
        parent: "contenedor",
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
        mode: Phaser.Scale.FIT,
    },
    scene: [Tablero]
}

var game = new Phaser.Game(config);