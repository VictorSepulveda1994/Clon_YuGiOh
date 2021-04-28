const config = {
    width: 1200,
    height: 600,
    parent: "contenedor",
    type: Phaser.CANVAS,
    backgroundColor: '#392542',
    scene: [Mazo, CrearMazo, EditarMazo]
}

var game = new Phaser.Game(config);