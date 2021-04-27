class Menu extends Phaser.Scene
{
    preload ()
    {
        this.sprites = [];
        this.load.image('particula', 'assets/red.png');
        this.load.image('jugar', 'assets/play.png');
        this.load.image('carta', 'assets/crearCarta.png');
        this.load.image('mazo', 'assets/crearMazo.png');
        //this.load.image('donuts', 'assets/pics/donuts.jpg');
        //this.load.image('fork', 'assets/sprites/fork.png');
    }

    create ()
    {
        //Particulas del fondo
        for (var i = 0; i < 300; i++)
        {
            const x = Phaser.Math.Between(-500, 1000);
            const y = Phaser.Math.Between(-500, 1000);

            const image = this.add.image(x, y, 'particula');

            //image.setBlendMode(Phaser.BlendModes.OVERLAY);
            //image.setBlendMode(Phaser.BlendModes.ADD);

            this.sprites.push({ s: image, r: 4 + Math.random() * 9 });
        }
        /*  Mmm, donuts
        this.add.image(0, 0, 'donuts').setOrigin(0);

        //  A little fork sprite
        var fork = this.add.image(1024, 600, 'fork').setOrigin(0.5, 0).setAngle(-20);

        var label = this.add.text(0, 0, '', { font: "48px Arial Black", fill: "#c51b7d" });
        label.setStroke('#de77ae', 8);

        //  And here's the real content.. some hit zones.
        //  One for each donut in the picture.
        
        var zone1 = this.add.zone(0, 0, 345, 300).setOrigin(0).setName('Plain').setInteractive();
        var zone2 = this.add.zone(345, 0, 310, 300).setOrigin(0).setName('Chocolate').setInteractive();
        var zone3 = this.add.zone(655, 0, 369, 300).setOrigin(0).setName('Coffee\nand cream').setInteractive();

        var zone4 = this.add.zone(0, 300, 330, 300).setOrigin(0).setName('Chocolate\nSprinkles').setInteractive();
        var zone5 = this.add.zone(330, 300, 350, 300).setOrigin(0).setName('Strawberry').setInteractive();
        var zone6 = this.add.zone(680, 300, 344, 300).setOrigin(0).setName('More\nSprinkles').setInteractive();

        //  And some events

        this.input.on('gameobjectdown', function (pointer, gameObject) {

            fork.x = pointer.x;
            fork.y = pointer.y;

            label.setText(gameObject.name);
            label.x = gameObject.x;
            label.y = gameObject.y;

        });
        */
    }

    update()
    {
        for (var i = 0; i < this.sprites.length; i++)
        {
            const sprite = this.sprites[i].s;
            sprite.y -= this.sprites[i].r;
            if (sprite.y < -256)
            {
                sprite.y = 700;
            }
        }
    }
}
