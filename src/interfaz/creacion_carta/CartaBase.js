class CartaBase extends Phaser.GameObjects.Container
{
    constructor(data)
    {
        let {//asignacion por destructuracion- propio de js
            scene,
            x,
            y,
            nombre,
            carta,
            imagen,
            clase,
            descripcion,
            ataque,
            defensa,
            nivel,
            imagenNivel
        }= data;
        let spriteCarta= new Phaser.GameObjects.Sprite(scene,0,0,carta);
        let spriteImagen= new Phaser.GameObjects.Sprite(scene,-3,-15,imagen);
        let textoNombre= new Phaser.GameObjects.Text(scene,-96,-165,nombre,{color: '#000000', fontSize:17});
        let textoClase= new Phaser.GameObjects.Text(scene,-100,100,"["+clase+"]",{color: '#000000', fontSize:12});
        let textoDescripcion= new Phaser.GameObjects.Text(scene,-95,112,descripcion,{color: '#000000', fontSize:11});
        let textoAtaque= new Phaser.GameObjects.Text(scene,-35,149,"ATQ/"+ataque,{color: '#000000', fontSize:12});
        let textoDefensa= new Phaser.GameObjects.Text(scene,30,149,"DEF/"+defensa,{color: '#000000', fontSize:12});
        super(scene,x,y,[spriteCarta,spriteImagen,textoNombre,textoClase,textoDescripcion,textoAtaque,textoDefensa]);

        let niveles=[];
        for (let index = 0; index < 12; index++) {
            const tempNivel= new Phaser.GameObjects.Sprite(scene,-92+(index*16),-128,imagenNivel);;
            tempNivel.setDisplaySize(15,15);
            niveles[index]= tempNivel;
            this.add(niveles[index]);
        }

        this.spriteCarta= spriteCarta;
        this.spriteImagen= spriteImagen;
        this.textoNombre= textoNombre;
        this.textoClase= textoClase;
        this.textoDescripcion= textoDescripcion;
        this.textoAtaque= textoAtaque;
        this.textoDefensa= textoDefensa;
        this.nivel= nivel;
        this.niveles= niveles;
        this.defensa=defensa;
        this.ataque=ataque;
        this.tipo= "normal"; //String que indica que tipo de carta es (normal,efecto,magica,trampa)

        this.spriteImagen.setDisplaySize(this.spriteCarta.width*0.825,this.spriteCarta.height*0.53);
        this.cambiarNivel(this.nivel);
        
        this.scene.add.existing(this);
    }

    /**
     * Funcion que cambia el nivel de la carta monstruo o efecto.
     * En caso de cartas magicas y de trampa se dejara 0. Recordar que la parte grafica
     * del nivel de la carta se guarda en el array "niveles" de la clase "CartaBase".
     * si la carta  no es de tipo normal o efecto no hara nada
     * @param nivel Valor numerico que representa el nivel de la carta a cambiar.
     */
    cambiarNivel(nivel)
    {
        if(this.tipo=="magica"||this.tipo=="trampa")
        {
            return;
        }
        this.nivel= nivel;
        for (let index = 0; index < 12; index++) {
            if(index<nivel)
            {
                this.niveles[11-index].setVisible(true);
            }
            else
            {
                this.niveles[11-index].setVisible(false);
            }
        }
    }

    /**
     * Funcion que cambia el valor de ataque de la carta.
     * En caso de darle un valor mayor a 100000 no subira.
     * si la carta  no es de tipo normal o efecto no hara nada
     * @param ataque Valor numerico que representa el ataque de la carta a cambiar.
     */
    cambiarAtaque(ataque)
    {
        if(this.tipo=="magica"||this.tipo=="trampa")
        {
            return;
        }
        if(ataque>100000)
        {
            this.textoAtaque.setText("ATQ/100000");
            this.ataque=100000;
        }
        else if(ataque<=0)
        {
            this.textoAtaque.setText("ATQ/0");
            this.ataque=0;
        }
        else if(ataque>=0 && ataque<=100000)
        {
            this.textoAtaque.setText("ATQ/"+ataque);
            this.ataque=ataque;
        }
        else
        {
            console.log("Valor:"+ataque+", no valido para el ataque de la carta.")
        }
    }

    /**
     * Funcion que cambia el valor de defensa de la carta.
     * En caso de darle un valor mayor a 100000 no subira. 
     * si la carta no es de tipo normal o efecto no hara nada
     * @param defensa Valor numerico que representa la defensa de la carta a cambiar.
     */
    cambiarDefensa(defensa)
    {
        if(this.tipo=="magica"||this.tipo=="trampa")
        {
            return;
        }
        if(defensa>100000)
        {
            this.textoDefensa.setText("DEF/100000");
            this.defensa=100000;
        }
        else if(defensa<=0)
        {
            this.textoDefensa.setText("DEF/0");
            this.defensa=0;
        }
        else if(defensa>=0 && defensa<=100000)
        {
            this.textoDefensa.setText("DEF/"+defensa);
            this.defensa=defensa;
        }
        else
        {
            console.log("Valor:"+defensa+", no valido para la defensa de la carta.")
        }
    }

    /**
     * 
     */
    cambiarTipo(tipo)
    {
        if(tipo=="normal")
        {
            this.tipo= "normal";
            this.textoClase.setText("Carta Monstruo");
            this.textoAtaque.setVisible(true);
            this.textoDefensa.setVisible(true);
            this.spriteCarta.setTexture('cartaNormal');
        }
        if(tipo=="efecto")
        {
            this.tipo= "efecto";
            this.textoClase.setText("Carta Efecto");
            this.textoAtaque.setVisible(true);
            this.textoDefensa.setVisible(true);
            this.spriteCarta.setTexture('cartaEfecto');
        }
        if(tipo=="magica")
        {
            this.cambiarNivel(0);
            this.tipo= "magica";
            this.textoClase.setText("Carta Magica");
            this.textoAtaque.setVisible(false);
            this.textoDefensa.setVisible(false);
            this.spriteCarta.setTexture('cartaMagica');
        }
        if(tipo=="trampa")
        {
            this.cambiarNivel(0);
            this.textoClase.setText("Carta Trampa");
            this.tipo= "trampa";
            this.textoAtaque.setVisible(false);
            this.textoDefensa.setVisible(false);
            this.spriteCarta.setTexture('cartaTrampa');
        }
    }
}