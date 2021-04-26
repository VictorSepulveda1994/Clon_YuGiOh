var config = {
    
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'container',
    scene: [Presentacion, Menu]
};


var game = new Phaser.Game(config);

