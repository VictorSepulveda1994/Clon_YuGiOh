class Presentacion extends Phaser.Scene
{
    constructor()
    {
        super({key: "presentacion"});
    }
    
    preload ()
    {
        this.load.image('logo', 'assets/logo.png');
        
    }

    create ()
    {
        var logoImagen = this.add.image(400, 250, 'logo');
        
        var text = this.add.text(80, 550, '', { font: '16px Courier', fill: '#ffffff' });
            text.setText
            ([
                'Game Title: Juego de Cartas - Politica Chilena' + game.config.gameTitle,
                'Version: 1.0' + game.config.gameVersion
            ]);
    }
}
