class CrearCarta extends Phaser.Scene
{
    _carta= Carta;
    constructor()
    {
        super({key: "crearCarta"});
    }

    preload()
    {
        

        this.sprites = [];
        this.load.image('menos', 'assets/menos.png');
        this.load.image('mas', 'assets/mas.png');
        this.load.image('monstruo', 'assets/icon_monstruo.png');
        this.load.image('efecto', 'assets/icon_monstruo_efecto.png');
        this.load.image('magica', 'assets/icon_magica.png');
        this.load.image('trampa', 'assets/icon_trampa.png');
        this.load.image('particula', 'assets/white.png');
        this.load.image('imagen_carta','assets/nasi_republic.jpg');
        this.load.image('panel_carta','assets/panelCarta.png');
        this.load.image('add_imagen','assets/add_imagen.png');
    }
    create()
    {
        //Particulas del fondo
        for (var i = 0; i < 300; i++)
        {
            const x = Phaser.Math.Between(-500, 1000);
            const y = Phaser.Math.Between(-500, 1000);
            const image = this.add.image(x, y, 'particula');
            this.sprites.push({ s: image, r: 1 + Math.random() * 2 });
        }

        const _carta= new Carta(this,100,150);
        this._carta=_carta;

        const panel= this.add.image(620,350,'panel_carta');
        panel.setDisplaySize(400,500);
        const icon1= this.add.image(500,200,'monstruo');
        icon1.setScale(0.7);
        const icon2= this.add.image(580,200,'efecto');
        icon2.setScale(0.7);
        const icon3= this.add.image(660,200,'magica');
        icon3.setScale(0.7);
        const icon4= this.add.image(740,200,'trampa');
        icon4.setScale(0.7);
        const mas= this.add.image(520,300,'mas');
        mas.setScale(0.2);
        const menos= this.add.image(520,360,'menos');
        menos.setScale(0.2);
        const add_imagen= this.add.image(650,330,'add_imagen');
        add_imagen.setDisplaySize(100,100);

        icon1.setInteractive();
        icon1.on("pointerup", ()=>{
            _carta.setTipo("monstruo");
        })

        icon2.setInteractive();
        icon2.on("pointerup", ()=>{
            _carta.setTipo("efecto");
        })

        icon3.setInteractive();
        icon3.on("pointerup", ()=>{
            _carta.setTipo("magica");
        })

        icon4.setInteractive();
        icon4.on("pointerup", ()=>{
            _carta.setTipo("trampa");
        })

        var label = this.add.text(500, 330, "", { font: "24px Arial Black", fill: "#c51b7d" });
        label.setStroke('#de77ae', 8);
        //label.setVisible(false);

        mas.setInteractive();
        mas.on("pointerup", ()=>{
            _carta.masNivel;
            var num= _carta.getNivel+"";
            label.setText(_carta.getNivel+"");
        })
       
        menos.setInteractive();
        menos.on("pointerup", ()=>{
            _carta.menosNivel;
            var num= _carta.getNivel+"";
            label.setText(num);
        })
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