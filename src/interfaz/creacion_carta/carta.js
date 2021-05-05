class Carta extends Phaser.GameObjects.Graphics
{
    //datos de la carta
    _nombre= null;
    _nivel=5;
    _atqDef=null;
    _tipo="XXXXXXXXXXX";
    _descripcion="XXXXXXX";
    _imagen=null;

    //graficos de la carta
    _scene=null;
    _fondo=null;
    _rectTitulo=null;
    _rectDescrip=null;
    _niveles=[];
    _pointX= 0;
    _pointY=0;
    _line=null;
    static _with=250;
    static _height=400;
    
    constructor(scene,x,y)
    {
        super(scene, "");
        this._scene=scene;
        this._pointX=x;
        this._pointY=y;
        this._fondo = new Phaser.Geom.Rectangle(this._pointX, this._pointY, Carta._with, Carta._height);
        this.fillStyle(0x000000);
        this.fillRectShape(this._fondo);
        this.lineStyle(8, '0x515664', 3);
        this.strokeRect(this._pointX, this._pointY, 250, 400);
        scene.add.existing(this);
    }
    
    setTipo(tipo)
    {
        if(tipo=="monstruo")
        {
            this.fillStyle(0xc3af48);
            this.lineStyle(8, '0x515664', 3);
            this.strokeRect(this._pointX, this._pointY, 250, 400);
            this.fillRectShape(this._fondo);

            this._rectTitulo= new Phaser.Geom.Rectangle(this._pointX+15, this._pointY+10, Carta._with -30, 35);
            this.lineStyle(0.5, '0x515664', 1);
            this.strokeRect(this._pointX+15, this._pointY+10, Carta._with -30, 35);

            this.fillStyle(0xe36126);
            this.strokeCircle()
            for (let index = 0; index < this._nivel; index++) {
                this.strokeCircle((this._pointX+Carta._with)-(30+(23*index)),this._pointY+60,10);
                let circle= new Phaser.Geom.Circle((this._pointX+Carta._with)-(30+(23*index)),this._pointY+60,10);
                this._niveles[index]=circle;
                this.fillCircleShape(this._niveles[index]);
            }

            this.lineStyle(4, '0x515664', 1);
            this.strokeRect(this._pointX+15, this._pointY+75, Carta._with -30, 220);
            this._imagen= this._scene.add.image(this._pointX+125,this._pointY+185,'imagen_carta');
            this._imagen.setDisplaySize(Carta._with -30,220);

            this._rectDescrip= new Phaser.Geom.Rectangle(this._pointX+15, this._pointY+310, Carta._with -30, 75);
            this.lineStyle(2, '0x515664', 1);
            this.strokeRect(this._pointX+15, this._pointY+310, Carta._with -30, 75);
            this.fillStyle(0xeae1a8);
            this.fillRectShape(this._rectDescrip);

            this._line = new Phaser.Geom.Line(this._pointX+20, this._pointY+365, 330, this._pointY+365);
            this._scene.add.graphics({ lineStyle: { width: 1, color: 0x000000 } });
            this.strokeLineShape(this._line);
            
            this._nombre= this._scene.add.text(this._pointX+20,this._pointY+18,"XXXXXX",{color: '#000000', fontSize:20});
            this._descripcion= this._scene.add.text(this._pointX+20,this._pointY+313,"[XXXXXX]\nxxxxxxxx xxxxxx",{color: '#000000', fontSize:12});

            this._atqDef= this._scene.add.text(this._pointX+Carta._with -120,this._pointY+370,"ATK/XXXX DEF/XXXX",{color: '#000000', fontSize:10});
        }
        if(tipo=="efecto")
        {
            this.fillStyle(0xb86e3f);
            this.lineStyle(8, '0x515664', 3);
            this.strokeRect(this._pointX, this._pointY, 250, 400);
            this.fillRectShape(this._fondo);

            this._rectTitulo= new Phaser.Geom.Rectangle(this._pointX+15, this._pointY+10, Carta._with -30, 35);
            this.lineStyle(0.5, '0x515664', 1);
            this.strokeRect(this._pointX+15, this._pointY+10, Carta._with -30, 35);

            this.fillStyle(0xe36126);
            this.strokeCircle()
            for (let index = 0; index < this._nivel; index++) {
                this.strokeCircle((this._pointX+Carta._with)-(30+(23*index)),this._pointY+60,10);
                let circle= new Phaser.Geom.Circle((this._pointX+Carta._with)-(30+(23*index)),this._pointY+60,10);
                this._niveles[index]=circle;
                this.fillCircleShape(this._niveles[index]);
            }

            this.lineStyle(4, '0x515664', 1);
            this.strokeRect(this._pointX+15, this._pointY+75, Carta._with -30, 220);
            this._imagen= this._scene.add.image(this._pointX+125,this._pointY+185,'imagen_carta');
            this._imagen.setDisplaySize(Carta._with -30,220);

            this._rectDescrip= new Phaser.Geom.Rectangle(this._pointX+15, this._pointY+310, Carta._with -30, 75);
            this.lineStyle(2, '0x515664', 1);
            this.strokeRect(this._pointX+15, this._pointY+310, Carta._with -30, 75);
            this.fillStyle(0xeae1a8);
            this.fillRectShape(this._rectDescrip);

            this._line = new Phaser.Geom.Line(this._pointX+20, this._pointY+365, 330, this._pointY+365);
            this._scene.add.graphics({ lineStyle: { width: 1, color: 0x000000 } });
            this.strokeLineShape(this._line);

            this._nombre= this._scene.add.text(this._pointX+20,this._pointY+18,"XXXXXX",{color: '#000000', fontSize:20});
            this._descripcion= this._scene.add.text(this._pointX+20,this._pointY+313,"[XXXXXX]\nxxxxxxxx xxxxxx",{color: '#000000', fontSize:12});
            
            this._atqDef= this._scene.add.text(this._pointX+Carta._with -120,this._pointY+370,"ATK/XXXX DEF/XXXX",{color: '#000000', fontSize:10});
        }
        if(tipo=="magica")
        {
            this.fillStyle(0x2da092);
            this.lineStyle(8, '0x515664', 3);
            this.strokeRect(this._pointX, this._pointY, 250, 400);
            this.fillRectShape(this._fondo);

            this._rectTitulo= new Phaser.Geom.Rectangle(this._pointX+15, this._pointY+10, Carta._with -30, 35);
            this.lineStyle(0.5, '0x515664', 1);
            this.strokeRect(this._pointX+15, this._pointY+10, Carta._with -30, 35);

            this.lineStyle(4, '0x515664', 1);
            this.strokeRect(this._pointX+15, this._pointY+75, Carta._with -30, 220);
            this._imagen= this._scene.add.image(this._pointX+125,this._pointY+185,'imagen_carta');
            this._imagen.setDisplaySize(Carta._with -30,220);

            this._rectDescrip= new Phaser.Geom.Rectangle(this._pointX+15, this._pointY+310, Carta._with -30, 75);
            this.lineStyle(2, '0x515664', 1);
            this.strokeRect(this._pointX+15, this._pointY+310, Carta._with -30, 75);
            this.fillStyle(0xeae1a8);
            this.fillRectShape(this._rectDescrip);

            this._nombre= this._scene.add.text(this._pointX+20,this._pointY+18,"XXXXXX",{color: '#000000', fontSize:20});
            this._atqDef.setText("");
        }
        if(tipo=="trampa")
        {
            this.fillStyle(0xc14685);
            this.lineStyle(8, '0x515664', 3);
            this.strokeRect(this._pointX, this._pointY, 250, 400);
            this.fillRectShape(this._fondo);

            this._rectTitulo= new Phaser.Geom.Rectangle(this._pointX+15, this._pointY+10, Carta._with -30, 35);
            this.lineStyle(0.5, '0x515664', 1);
            this.strokeRect(this._pointX+15, this._pointY+10, Carta._with -30, 35);

            this.lineStyle(4, '0x515664', 1);
            this.strokeRect(this._pointX+15, this._pointY+75, Carta._with -30, 220);
            this._imagen= this._scene.add.image(this._pointX+125,this._pointY+185,'imagen_carta');
            this._imagen.setDisplaySize(Carta._with -30,220);

            this._rectDescrip= new Phaser.Geom.Rectangle(this._pointX+15, this._pointY+310, Carta._with -30, 75);
            this.lineStyle(2, '0x515664', 1);
            this.strokeRect(this._pointX+15, this._pointY+310, Carta._with -30, 75);
            this.fillStyle(0xeae1a8);
            this.fillRectShape(this._rectDescrip);

            this._nombre= this._scene.add.text(this._pointX+20,this._pointY+18,"XXXXXX",{color: '#000000', fontSize:20});
            this._atqDef.setText("");
        }
        if(tipo=="prueba")
        {
            this.fillStyle(0xc3af48);
            this.lineStyle(8, '0x515664', 3);
            this.strokeRect(this._pointX, this._pointY, 250, 400);
            this.fillRectShape(this._fondo);

            this._rectTitulo= new Phaser.Geom.Rectangle(this._pointX+15, this._pointY+10, Carta._with -30, 35);
            this.lineStyle(0.5, '0x515664', 1);
            this.strokeRect(this._pointX+15, this._pointY+10, Carta._with -30, 35);
            //this.fillStyle(0xc3af48);
            //this.fillRectShape(this._rectTitulo);
            
            this.fillStyle(0xe36126);
            this.strokeCircle()
            for (let index = 0; index < this._nivel; index++) {
                this.strokeCircle((this._pointX+Carta._with)-(30+(23*index)),this._pointY+60,10);
                let circle= new Phaser.Geom.Circle((this._pointX+Carta._with)-(30+(23*index)),this._pointY+60,10);
                this._niveles[index]=circle;
                this.fillCircleShape(this._niveles[index]);
            }

            this.lineStyle(4, '0x515664', 1);
            this.strokeRect(this._pointX+15, this._pointY+75, Carta._with -30, 220);
            this._imagen= this._scene.add.image(this._pointX+125,this._pointY+185,'imagen_carta');
            this._imagen.setDisplaySize(Carta._with -30,220);

            //eae1a8
            this._rectDescrip= new Phaser.Geom.Rectangle(this._pointX+15, this._pointY+310, Carta._with -30, 75);
            this.lineStyle(2, '0x515664', 1);
            this.strokeRect(this._pointX+15, this._pointY+310, Carta._with -30, 75);
            this.fillStyle(0xeae1a8);
            this.fillRectShape(this._rectDescrip);

            this._nombre= this._scene.add.text(this._pointX+20,this._pointY+18,"XXXXXX",{color: '#000000', fontSize:20});
            this._descripcion= this._scene.add.text(this._pointX+20,this._pointY+313,"[XXXXXX]\nxxxxxxxx xxxxxx",{color: '#000000', fontSize:12});

            this._line = new Phaser.Geom.Line(this._pointX+20, this._pointY+365, 330, this._pointY+365);
            this._scene.add.graphics({ lineStyle: { width: 1, color: 0x000000 } });
            this.strokeLineShape(this._line);
            
            this._atqDef= this._scene.add.text(this._pointX+Carta._with -120,this._pointY+370,"ATK/XXXX DEF/XXXX",{color: '#000000', fontSize:10});
        }

        return null;
    }

    getNivel()
    {
        var num=this._nivel;
        return num;
    }

    masNivel()
    {
        this._niveles=[];
        this._nivel= this._nivel+1;
        this.fillStyle(0xe36126);
            this.strokeCircle()
            for (let index = 0; index < this._nivel; index++) {
                this.strokeCircle((this._pointX+Carta._with)-(30+(23*index)),this._pointY+60,10);
                let circle= new Phaser.Geom.Circle((this._pointX+Carta._with)-(30+(23*index)),this._pointY+60,10);
                this._niveles[index]=circle;
                this.fillCircleShape(this._niveles[index]);
            }
    }

    menosNivel()
    {
        this._niveles=[];
        this._nivel= this._nivel-1;
        this.fillStyle(0xe36126);
            this.strokeCircle()
            for (let index = 0; index < this._nivel; index++) {
                this.strokeCircle((this._pointX+Carta._with)-(30+(23*index)),this._pointY+60,10);
                let circle= new Phaser.Geom.Circle((this._pointX+Carta._with)-(30+(23*index)),this._pointY+60,10);
                this._niveles[index]=circle;
                this.fillCircleShape(this._niveles[index]);
                
            }
    }
    
    /*this.fillStyle(0xc3af48);
            this.lineStyle(8, '0x515664', 3);
            this.strokeRect(this._pointX, this._pointY, 250, 400);
            this.fillRectShape(this._fondo);

            this._rectTitulo= new Phaser.Geom.Rectangle(this._pointX+15, this._pointY+10, Carta._with -30, 35);
            this.lineStyle(0.5, '0x515664', 1);
            this.strokeRect(this._pointX+15, this._pointY+10, Carta._with -30, 35);
            //this.fillStyle(0xc3af48);
            //this.fillRectShape(this._rectTitulo);
            
            this.fillStyle(0xe36126);
            this.strokeCircle()
            for (let index = 0; index < this._nivel; index++) {
                this.strokeCircle((this._pointX+Carta._with)-(30+(23*index)),this._pointY+60,10);
                let circle= new Phaser.Geom.Circle((this._pointX+Carta._with)-(30+(23*index)),this._pointY+60,10);
                this.fillCircleShape(circle);
                this._niveles[index]=circle;
            }

            this.lineStyle(4, '0x515664', 1);
            this.strokeRect(this._pointX+15, this._pointY+75, Carta._with -30, 220);
            this._imagen= this._scene.add.image(this._pointX+125,this._pointY+185,'imagen_carta');
            this._imagen.setDisplaySize(Carta._with -30,220);

            //eae1a8
            this._rectDescrip= new Phaser.Geom.Rectangle(this._pointX+15, this._pointY+310, Carta._with -30, 75);
            this.lineStyle(2, '0x515664', 1);
            this.strokeRect(this._pointX+15, this._pointY+310, Carta._with -30, 75);
            this.fillStyle(0xeae1a8);
            this.fillRectShape(this._rectDescrip);

            this._nombre= this._scene.add.text(this._pointX+20,this._pointY+18,"XXXXXX",{color: '#000000', fontSize:20});
            this._nombre= this._scene.add.text(this._pointX+20,this._pointY+313,"[XXXXXX]\nxxxxxxxx xxxxxx",{color: '#000000', fontSize:12});

            this._line = new Phaser.Geom.Line(this._pointX+20, this._pointY+365, 330, this._pointY+365);
            this._scene.add.graphics({ lineStyle: { width: 1, color: 0x000000 } });
            this.strokeLineShape(this._line);
            
            this._atqDef= this._scene.add.text(this._pointX+Carta._with -120,this._pointY+370,"ATK/XXXX DEF/XXXX",{color: '#000000', fontSize:10}); */
}