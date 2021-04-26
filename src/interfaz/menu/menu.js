class Menu extends Phaser.Scene
{
    constructor()
    {
        super({key: "menu"});
    }
    

    preload ()
    {
    }

    create ()
    {
        var text = this.add.text(80, 50, '', { font: '16px Courier', fill: '#ffffff' });
            text.setText
            ([
                'Game Title: Juego de Cartas - Politica Chilena' + game.config.gameTitle
            ]);
    }
}
