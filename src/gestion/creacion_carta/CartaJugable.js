/**
 * Esta herencia no cambiara los datos de la clase CartaBase, solo cambiara variables
 * superficiales que son usados durante la partida.
 * Metodos sobrescritos por herencia de la clase CartaBase (cambiarNivel,cambiarDefensa,cambiarAtaque).
 */
class CartaJugable extends CartaDraggable
{
    constructor(data)
    {
        super(data);
        this.ataquePartida=ataque //variable que maneja el atq en la partida, puede ser distinta al ataque base
        this.defensaPartida=defensa; //variable que maneja la def en la partida, puede ser distinta a la def base
        this.nivelPartida= this.nivel; //var que maneja nivel en partida, puede cambiarse en partida
    }

    /**
     * Funcion que cambia el nivel de la carta monstruo o efecto. Recordar que no cambia
     * el nivel de la CartaBase, si no, uno nuevo propio de esta clase.
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
        this.nivelPartida= nivel;
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
     * Funcion que cambia el valor de ataque de la carta. Recordar que no cambia
     * el nivel de la CartaBase, si no, uno nuevo propio de esta clase.
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
             this.ataquePartida=100000;
         }
         else if(ataque<=0)
         {
             this.textoAtaque.setText("ATQ/0");
             this.ataquePartida=0;
         }
         else if(ataque>=0 && ataque<=100000)
         {
             this.textoAtaque.setText("ATQ/"+ataque);
             this.ataqueP=ataque;
         }
         else
         {
             console.log("Valor:"+this.ataquePartida+", no valido para el ataque de la carta.")
         }
     }

    /**
     * Funcion que cambia el valor de defensa de la carta.Recordar que no cambia
     * el nivel de la CartaBase, si no, uno nuevo propio de esta clase.
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
            this.defensaPartida=100000;
        }
        else if(defensa<=0)
        {
            this.textoDefensa.setText("DEF/0");
            this.defensaPartida=0;
        }
        else if(defensa>=0 && defensa<=100000)
        {
            this.textoDefensa.setText("DEF/"+defensa);
            this.defensaPartida=defensa;
        }
        else
        {
            console.log("Valor:"+this.defensaPartida+", no valido para la defensa de la carta.")
        }
    }
}