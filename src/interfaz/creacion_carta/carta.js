class Carta
{
    //datos de la carta
    _nombre= "";
    _nivel=0;
    _atq=500;
    _Def=500;
    _descripcion="";
    _imagen="";
    _fondoCarta="";
    _direccionImagen="";
    _tipo="";

    //graficos de la carta
    _pointX= 0;
    _pointY=0;
    _with=250;
    _height=400;
    
    constructor(x,y,tipo)
    {
        this._pointX=x;
        this._pointY=y;
        this._tipo=tipo;

    }
    
    setTipo(tipo)
    {
        if(tipo=="monstruo")
        {
            this._tipo=tipo;
        }
        if(tipo=="efecto")
        {
            this._tipo=tipo;
        }
        if(tipo=="magica")
        {
            this._tipo=tipo;
            this._atq=0;
            this._nivel=0;
        }
        if(tipo=="trampa")
        {
            this._tipo=tipo;
            this._Def=0;
            this._nivel=0;
        }
        if(tipo=="default")
        {
            //this._imagen.setDisplaySize(this._with *0.9,this._height*0.5);
            //eae1a8s
            //this._nombre= this._scene.add.text(this._pointX+20,this._pointY+18,"XXXXXX",{color: '#000000', fontSize:20});
            //this._descripcion= this._scene.add.text(this._pointX+20,this._pointY+313,"[XXXXXX]\nxxxxxxxx xxxxxx",{color: '#000000', fontSize:12});
            //this._atqDef= this._scene.add.text(this._pointX+Carta._with -120,this._pointY+370,"ATK/XXXX DEF/XXXX",{color: '#000000', fontSize:10});
        }
        return null;
    }

    cambiarImagenCarta(direccionImagen)
    {
        this._direccionImagen=direccionImagen;
    }

    getNivel()
    {
        return this._nivel;
    }

    masNivel()
    {
        if(this._nivel<12 && this._tipo!="magica" && this._tipo!="trampa")
        {
            this._nivel++;
            console.log("subi:" +this._nivel);
        }
    }

    menosNivel()
    {
        if(this._nivel>0 && this._tipo!="magica" && this._tipo!="trampa")
        {
            this._nivel--;
            console.log("baje:" +this._nivel);
        }
    }

    masAtaque()
    {
        if(this._atq<4000 && this._tipo!="magica" && this._tipo!="trampa")
        {
            this._atq+=100;
            console.log("subi:" +this._atq);
        }
    }

    menosAtaque()
    {
        if(this._atq>0 && this._tipo!="magica" && this._tipo!="trampa")
        {
            this._atq-=100;
            console.log("baje:" +this._atq);
        }
    }

    masDefensa()
    {
        if(this._Def<4000 && this._tipo!="magica" && this._tipo!="trampa")
        {
            this._Def+=100;
            console.log("subi:" +this._Def);
        }
    }

    menosDefensa()
    {
        if(this._Def>0 && this._tipo!="magica" && this._tipo!="trampa")
        {
            this._Def-=100;
            console.log("baje:" +this._Def);
        }
    }

    getDefensa()
    {
        return this._Def;
    }

    getAtaque()
    {
        return this._atq;
    }
    
}