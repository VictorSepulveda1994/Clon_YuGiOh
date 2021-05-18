class CrearCarta extends Phaser.Scene
{
    
    constructor()
    {
        super({key: "crearCarta"});
    }

    preload()
    {
        this.sprites = [];
        this.load.image('particula', 'assets/white.png');
        this.load.image('cartaEfecto','assets/cartaEfecto.png');
        this.load.image('cartaNormal','assets/cartaNormal.png');
        this.load.image('cartaTrampa','assets/cartaTrampa.png');
        this.load.image('cartaMagica','assets/cartaMagica.png');
        this.load.image('default','assets/imagenes/default.jpg');
        this.load.image('nivel','assets/nivel.png');

        this.load.image('menos', 'assets/menos.png');
        this.load.image('mas', 'assets/mas.png');
        this.load.image('monstruo', 'assets/icon_monstruo.png');
        this.load.image('efecto', 'assets/icon_monstruo_efecto.png');
        this.load.image('magica', 'assets/icon_magica.png');
        this.load.image('trampa', 'assets/icon_trampa.png');
        this.load.image('particula', 'assets/white.png');
        this.load.image('panel_carta','assets/panelCarta.png');
        this.load.image('add_imagen','assets/add_imagen.png');
        this.load.image('upA', 'assets/upattack.PNG');
        this.load.image('downA', 'assets/downattack.PNG');
        this.load.image('upD', 'assets/updefense.PNG');
        this.load.image('downD', 'assets/downdefense.PNG');
        this.load.image('addTitulo', 'assets/agregarTitulo.PNG');
        this.load.image('addDescripcion', 'assets/agregarDescripcion.PNG');
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

        this.carta= new CartaDraggable
        ({
            scene: this,
            x:200,
            y:300,
            nombre:"NOMBRE CARTA",
            carta:'cartaNormal',
            imagen:'default',
            clase:"ClaseCarta",
            descripcion:"xxxxxxx xxxxxx xxxxxxxxx",
            ataque:500,
            defensa:500,
            nivel:4,
            imagenNivel:'nivel',
            ondragend: (pointer,gameObject)=>{}
        });


        //panel
        this.panel= this.add.image(620,350,'panel_carta');
        this.panel.setDisplaySize(400,500);
        this.icon1= this.add.image(500,200,'monstruo');
        this.icon1.setScale(0.7);
        this.icon2= this.add.image(580,200,'efecto');
        this.icon2.setScale(0.7);
        this.icon3= this.add.image(660,200,'magica');
        this.icon3.setScale(0.7);
        this.icon4= this.add.image(740,200,'trampa');
        this.icon4.setScale(0.7);
        this.mas= this.add.image(520,300,'mas');
        this.mas.setScale(0.2);
        this.menos= this.add.image(520,360,'menos');
        this.menos.setScale(0.2);
        this.add_imagen= this.add.image(650,330,'add_imagen');
        this.add_imagen.setDisplaySize(100,100);
        this.add_titulo= this.add.image(520,450,'addTitulo');
        this.add_titulo.setDisplaySize(100,100);
        this.add_descripcion= this.add.image(520,530,'addDescripcion');
        this.add_descripcion.setDisplaySize(90,90);
        this.upA= this.add.image(630,460,'upA');
        this.upA.setDisplaySize(90,90);
        this.downA= this.add.image(720,460,'downA');
        this.downA.setDisplaySize(90,90);
        this.upD= this.add.image(630,540,'upD');
        this.upD.setDisplaySize(90,90);
        this.downD= this.add.image(730,540,'downD');
        this.downD.setDisplaySize(90,90);

        this.icon1.setInteractive();
        this.icon1.on("pointerup", ()=>{
            this.mas.setVisible(true);
            this.menos.setVisible(true);
            this.upA.setVisible(true);
            this.upD.setVisible(true);
            this.downA.setVisible(true);
            this.downD.setVisible(true);
            this.carta.cambiarTipo("normal");
        })

        this.icon2.setInteractive();
        this.icon2.on("pointerup", ()=>{
            this.mas.setVisible(true);
            this.menos.setVisible(true);
            this.upA.setVisible(true);
            this.upD.setVisible(true);
            this.downA.setVisible(true);
            this.downD.setVisible(true);
            this.carta.cambiarTipo("efecto");
        })

        this.icon3.setInteractive();
        this.icon3.on("pointerup", ()=>{
            this.mas.setVisible(false);
            this.menos.setVisible(false);
            this.upA.setVisible(false);
            this.upD.setVisible(false);
            this.downA.setVisible(false);
            this.downD.setVisible(false);
            this.carta.cambiarTipo("magica");
        })

        this.icon4.setInteractive();
        this.icon4.on("pointerup", ()=>{
            this.mas.setVisible(false);
            this.menos.setVisible(false);
            this.upA.setVisible(false);
            this.upD.setVisible(false);
            this.downA.setVisible(false);
            this.downD.setVisible(false);
            this.carta.cambiarTipo("trampa");
        })

        this.mas.setInteractive();
        this.mas.on("pointerup", ()=>{
            this.carta.cambiarNivel(this.carta.nivel+1);
        })
       
        this.menos.setInteractive();
        this.menos.on("pointerup", ()=>{
            this.carta.cambiarNivel(this.carta.nivel-1);
        })

        this.upA.setInteractive();
        this.upA.on("pointerup", ()=>{
            this.carta.cambiarAtaque(this.carta.ataque+100);
        })
       
        this.downA.setInteractive();
        this.downA.on("pointerup", ()=>{
            this.carta.cambiarAtaque(this.carta.ataque-100);
        })

        this.upD.setInteractive();
        this.upD.on("pointerup", ()=>{
            this.carta.cambiarDefensa(this.carta.defensa+100);
        })
       
        this.downD.setInteractive();
        this.downD.on("pointerup", ()=>{
            this.carta.cambiarDefensa(this.carta.defensa-100);
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