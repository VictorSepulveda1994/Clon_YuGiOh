class CrearCarta extends Phaser.Scene
{
    _carta= Carta;
    _imagenCarta=null;
    _imagenFondo=null;
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
        this.load.image('imagen_carta_default','assets/imagenes/default.jpg');
        this.load.image('panel_carta','assets/panelCarta.png');
        this.load.image('add_imagen','assets/add_imagen.png');
        this.load.image('carta1', 'assets/carta_monstruo.PNG');
        this.load.image('carta2', 'assets/carta_efecto.PNG');
        this.load.image('carta3', 'assets/carta_magica.PNG');
        this.load.image('carta4', 'assets/carta_trampa.PNG');
        this.load.image('addTitulo', 'assets/agregarTitulo.PNG');
        this.load.image('addDescripcion', 'assets/agregarDescripcion.PNG');
        this.load.image('upA', 'assets/upattack.PNG');
        this.load.image('downA', 'assets/downattack.PNG');
        this.load.image('upD', 'assets/updefense.PNG');
        this.load.image('downD', 'assets/downdefense.PNG');
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

        const _carta= new Carta(100, 150, "monstruo");
        this._carta=_carta;

        const _imagenFondo=this.add.image(200,330,"carta1");
        this._imagenFondo= _imagenFondo;

        //panel
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
        const add_titulo= this.add.image(520,450,'addTitulo');
        add_titulo.setDisplaySize(100,100);
        const add_descripcion= this.add.image(520,530,'addDescripcion');
        add_descripcion.setDisplaySize(90,90);
        const upA= this.add.image(630,460,'upA');
        upA.setDisplaySize(90,90);
        const downA= this.add.image(720,460,'downA');
        downA.setDisplaySize(90,90);
        const upD= this.add.image(630,540,'upD');
        upD.setDisplaySize(90,90);
        const downD= this.add.image(730,540,'downD');
        downD.setDisplaySize(90,90);

        var textNivel= this.add.text(200,195,"",{color: '#000000', fontSize:12});
        var textAtaque= this.add.text(170,478,"ATQ/"+this._carta.getAtaque(),{color: '#000000', fontSize:12});
        var textDefensa= this.add.text(230,478  ,"DEF/"+this._carta.getDefensa(),{color: '#000000', fontSize:12});

        var _imagenCarta= this.add.image(195,313,"imagen_carta_default");
        _imagenCarta.setDisplaySize(200 *1,450*0.45);

        icon1.setInteractive();
        icon1.on("pointerup", ()=>{
            const _imagenFondo=this.add.image(200,330,"carta1");
            this._imagenFondo= _imagenFondo;
            _carta.setTipo("monstruo");
            mas.setVisible(true);
            menos.setVisible(true);
            upA.setVisible(true);
            upD.setVisible(true);
            downA.setVisible(true);
            downD.setVisible(true);
            textAtaque= this.add.text(170,478,"ATQ/"+this._carta.getAtaque(),{color: '#000000', fontSize:12});
            textDefensa= this.add.text(230,478,"DEF/"+this._carta.getDefensa(),{color: '#000000', fontSize:12});
            this._carta=_carta;
            _imagenCarta= this.add.image(195,313,"imagen_carta_default");
            _imagenCarta.setDisplaySize(200 *1,450*0.45);
        })

        icon2.setInteractive();
        icon2.on("pointerup", ()=>{
            const _imagenFondo=this.add.image(200,332,"carta2");
            this._imagenFondo= _imagenFondo;
            _carta.setTipo("efecto");
            mas.setVisible(true);
            menos.setVisible(true);
            upA.setVisible(true);
            upD.setVisible(true);
            downA.setVisible(true);
            downD.setVisible(true);
            textAtaque= this.add.text(170,478,"ATQ/"+this._carta.getAtaque(),{color: '#000000', fontSize:12});
            textDefensa= this.add.text(230,478,"DEF/"+this._carta.getDefensa(),{color: '#000000', fontSize:12});
            this._carta=_carta;
            _imagenCarta= this.add.image(195,313,"imagen_carta_default");
            _imagenCarta.setDisplaySize(200 *1,450*0.45);
        })

        icon3.setInteractive();
        icon3.on("pointerup", ()=>{
            const _imagenFondo=this.add.image(200,330,"carta3");
            this._imagenFondo= _imagenFondo;
            _carta.setTipo("magica");
            textNivel= this.add.text(200,195,"[CARTA MAGICA]",{color: '#000000', fontSize:12});
            mas.setVisible(false);
            menos.setVisible(false);
            upA.setVisible(false);
            upD.setVisible(false);
            downA.setVisible(false);
            downD.setVisible(false);
            textAtaque= this.add.text(170,478,"",{color: '#000000', fontSize:12});
            textDefensa= this.add.text(170,478,"",{color: '#000000', fontSize:12});
            this._carta=_carta;
            _imagenCarta= this.add.image(195,313,"imagen_carta_default");
            _imagenCarta.setDisplaySize(200 *1,450*0.45);
        })

        icon4.setInteractive();
        icon4.on("pointerup", ()=>{
            const _imagenFondo=this.add.image(200,330,"carta4");
            this._imagenFondo= _imagenFondo;
            _carta.setTipo("trampa");
            textNivel= this.add.text(200,195,"[CARTA TRAMPA]",{color: '#000000', fontSize:12});
            mas.setVisible(false);
            menos.setVisible(false);
            upA.setVisible(false);
            upD.setVisible(false);
            downA.setVisible(false);
            downD.setVisible(false);
            textAtaque= this.add.text(170,478,"",{color: '#000000', fontSize:12});
            textDefensa= this.add.text(170,478,"",{color: '#000000', fontSize:12});
            this._carta=_carta;
            _imagenCarta= this.add.image(195,313,"imagen_carta_default");
            _imagenCarta.setDisplaySize(200 *1,450*0.45);
        })

        var label = this.add.text(500, 330, "", { font: "24px Arial Black", fill: "#c51b7d" });
        label.setStroke('#de77ae', 8);
        label.setVisible(false);

        mas.setInteractive();
        mas.on("pointerup", ()=>{
            this._carta.masNivel();
        })
       
        menos.setInteractive();
        menos.on("pointerup", ()=>{
            this._carta.menosNivel();
        })

        upA.setInteractive();
        upA.on("pointerup", ()=>{
            this._carta.masAtaque();
            textAtaque.setText("ATQ/"+this._carta.getAtaque());
        })
       
        downA.setInteractive();
        downA.on("pointerup", ()=>{
            this._carta.menosAtaque();
            textAtaque.setText("ATQ/"+this._carta.getAtaque());
        })

        upD.setInteractive();
        upD.on("pointerup", ()=>{
            this._carta.masDefensa();
            textDefensa.setText("DEF/"+this._carta.getDefensa());
        })
       
        downD.setInteractive();
        downD.on("pointerup", ()=>{
            this._carta.menosDefensa();
            textDefensa.setText("DEF/"+this._carta.getDefensa());
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