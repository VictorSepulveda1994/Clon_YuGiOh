/*  recuperado de:
*   https://phaser.io/examples/v3/view/input/zones/basic-input-zone#
*/
class Menu extends Phaser.Scene
{
    constructor()
    {
        super({key: "menu"});
    }

    preload ()
    {
        this.sprites = [];
        this.load.image('particula', 'assets/white.png');
        this.load.image('Jugar', 'assets/play.png');
        this.load.image('Crear carta', 'assets/crearCarta.png');
        this.load.image('Crear mazo', 'assets/crearMazo.png');
        this.load.image('puntero', 'assets/copihue.png');
        //this.load.image('donuts', 'assets/pics/donuts.jpg');
        //this.load.image('fork', 'assets/sprites/fork.png');
        console.log("se ha cargado menu.js scene");
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

            this.sprites.push({ s: image, r: 1 + Math.random() * 4 });
        }

        var punteroIcon = this.add.image(1024, 600, 'puntero').setOrigin(0.5, 0).setAngle(-20).setScale(0.2);
        var label = this.add.text(0, 0, '', { font: "24px Arial Black", fill: "#c51b7d" });
        label.setStroke('#de77ae', 8);

        var jugar= this.add.image(200, 270,'Jugar').setScale(0.2);
        var crearCarta= this.add.image(450, 310,'Crear carta').setScale(0.7);
        var crearMazo= this.add.image(700, 300,'Crear mazo').setScale(0.5);

        var zone1 = this.add.zone(0, 270, 345, 300).setOrigin(0).setName('Jugar').setInteractive();
        var zone2 = this.add.zone(345, 200, 310, 300).setOrigin(0).setName('Crear carta').setInteractive();
        var zone3 = this.add.zone(655, 200, 369, 300).setOrigin(0).setName('Crear mazo').setInteractive();

        var punteroIcon = this.add.image(1024, 600, 'puntero').setOrigin(0.5, 0).setAngle(-20).setScale(0.2);
        var label = this.add.text(0, 0, '', { font: "24px Arial Black", fill: "#c51b7d" });
        label.setStroke('#de77ae', 8);

        this.input.on('gameobjectdown', function (pointer, gameObject) {

            punteroIcon.x = pointer.x;
            punteroIcon.y = pointer.y;

            label.setText(gameObject.name);
            label.x = gameObject.x;
            label.y = gameObject.y;

        });
        
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
