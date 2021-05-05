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

        //Etiqueta botón
        var label = this.add.text(0, 0, '', { font: "24px Arial Black", fill: "#c51b7d" });
        label.setStroke('#de77ae', 8);
        label.setDepth(1);

        //puntero 
        var punteroIcon = this.add.image(1024, 1000, 'puntero');
        punteroIcon.setOrigin(0.5, 0.5);
        punteroIcon.setAngle(80);
        punteroIcon.setScale(0.4);
        punteroIcon.setDepth(1);
        punteroIcon.setVisible(false);

        //Botón jugar---------------------------------------------------
        var jugar = this.add.image(200, 270,'Jugar')
        jugar.setScale(0.2);
        jugar.setName('Jugar');
        jugar.setDepth(0);
        jugar.setInteractive();

        jugar.on("pointerover", ()=>{
            console.log("encima")
            punteroIcon.setVisible(true);
            punteroIcon.x = jugar.x+20;
            punteroIcon.y = jugar.y+30;
            label.setVisible(true);
            label.setText(jugar.name);
            label.x = jugar.x;
            label.y = 180;
        })

        jugar.on("pointerout", ()=>{
            console.log("afuera")
            punteroIcon.setVisible (false);
            label.setVisible(false);
        })

        jugar.on("pointerup", ()=>{
            console.log("click y soltar")
            console.log('Desde Menu a Tablero');
            this.input.stopPropagation();
            this.scene.switch('Tablero');
        })

        //Botón crear carta-----------------------------------------------
        var crearCarta = this.add.image(450, 310,'Crear carta');
        crearCarta.setScale(0.7);
        crearCarta.setName('Crear Carta');
        crearCarta.setDepth(0);
        crearCarta.setInteractive();

        crearCarta.on("pointerover", ()=>{
            console.log("encima")
            punteroIcon.setVisible(true);
            punteroIcon.x = crearCarta.x;
            punteroIcon.y = 300;
            label.setVisible(true);
            label.setText(crearCarta.name);
            label.x = crearCarta.x-70;
            label.y = 180;
        })

        crearCarta.on("pointerout", ()=>{
            console.log("afuera")
            punteroIcon.setVisible (false);
            label.setVisible(false);
        })

        crearCarta.on("pointerup", ()=>{
            console.log("click y soltar")
            console.log('Desde Menu a crearCarta');
            this.input.stopPropagation();
            this.scene.switch('crearCarta');
        })

        //Botón crear mazo---------------------------------------------
        var crearMazo = this.add.image(700, 300,'Crear mazo');
        crearMazo.setScale(0.5);
        crearMazo.setName('Crear Mazo');
        crearMazo.setDepth(0);
        crearMazo.setInteractive();

        crearMazo.on("pointerover", ()=>{
            console.log("encima")
            punteroIcon.setVisible(true);
            punteroIcon.x = crearMazo.x;
            punteroIcon.y = 300;
            label.setVisible(true);
            label.setText(crearMazo.name);
            label.x = crearMazo.x-70;
            label.y = 180;
        })

        crearMazo.on("pointerout", ()=>{
            console.log("afuera")
            punteroIcon.setVisible (false);
            label.setVisible(false);
        })

        crearMazo.on("pointerup", ()=>{
            console.log("click y soltar")
            console.log('Desde Menu a crearCarta');
            this.input.stopPropagation();
            this.scene.switch('EditarMazo');
        })

        /* var zone1 = this.add.zone(0, 270, 345, 300).setOrigin(0).setName('Jugar').setInteractive();
        var zone2 = this.add.zone(345, 200, 310, 300).setOrigin(0).setName('Crear carta').setInteractive();
        var zone3 = this.add.zone(655, 200, 369, 300).setOrigin(0).setName('Crear mazo').setInteractive();

        this.input.on('gameobjectdown', function (pointer, gameObject) {

            punteroIcon.x = pointer.x;
            punteroIcon.y = pointer.y;

            label.setText(gameObject.name);
            label.x = gameObject.x;
            label.y = gameObject.y - 20;
        }); */
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
