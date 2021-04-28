/*  Recuperado de:
 *  https://github.com/photonstorm/phaser3-examples/blob/master/public/src/display/blend%20modes/difference.js
 */
class Presentacion extends Phaser.Scene
{
    constructor()
    {
        super({key: "presentacion"});
        this.sprites = [];
    }
    
    preload ()
    {
        this.load.image('logo', 'assets/logo.png');
        this.load.image('particula', 'assets/white.png');
        console.log("se ha cargado presentacion.js scene");
    }

    create ()
    {
        //var logoImagen = this.add.image(400, 250, 'logo');
        
        //  Create the particles
        for (var i = 0; i < 300; i++)
        {
            const x = Phaser.Math.Between(-500, 1000);
            const y = Phaser.Math.Between(-500, 1000);

            const image = this.add.image(x, y, 'particula');

            image.setBlendMode(Phaser.BlendModes.OVERLAY);
            //image.setBlendMode(Phaser.BlendModes.ADD);

            this.sprites.push({ s: image, r: 4 + Math.random() * 9 });
        }

        this.add.image(490, 350, 'logo').setBlendMode(Phaser.BlendModes.COLOR_BURN);
    }
    
    update ()
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