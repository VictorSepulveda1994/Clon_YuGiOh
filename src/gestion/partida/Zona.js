
/**
 * Clase que crea una zona de dropeo de cartas, el constructor de esta clase 
 * recibe una x e y como coordenadas de creacion y un color que identificara que
 * zona creara donde 1 es azul que muestra una zona para carta monstruo, 2 para color
 * rojo para zonas de cartas magicas/trampa, 3 para la zona de mazo y 4 que identifica la zona
 * del cementerio
 */
class Zona {
    constructor(scene,x,y,color) {
        this.renderZone = () => {
            
            let dropZone = scene.add.zone(x+37.5, y+50, 75, 100).setRectangleDropZone(75, 100);
            /**
             * esta podra almacenar datos de una carta, donde se podra identificar los
             * datos de una carta asociada a una zona
             * por el momento a falta de logica de una carta en el programa queda 
             * sin algun proceso que pueda manejar los datos a almacenar en una zona
             */
            dropZone.setData({ cards: 0 , 
                            nombreCarta: '',
                            ataqueCarta: 0,
                            defensaCarta: 0,
                            textoEfecto: '',
                            numeroEstrellas: 0});

            return dropZone;
        };
        /**
         * Dado un dropZone dibuja con un estilo distinto dependiendo del color
         * finalmente dibuja el area rectangular dependiendo de los datos ingresados
         */
        this.renderOutline = (dropZone) => {
            let dropZoneOutline = scene.add.graphics();
            switch (color){
                case 1: dropZoneOutline.lineStyle(2, 0x0000ff); //azul
                    break;
                case 2: dropZoneOutline.lineStyle(2, 0xff0000); // rojo
                    break;
                case 3: dropZoneOutline.lineStyle(2, 0x00ff00); //verde
                    break;
                case 4: dropZoneOutline.lineStyle(2, 0x808080); // gris
                    break;
            }
            dropZoneOutline.strokeRect(x, y, dropZone.input.hitArea.width, dropZone.input.hitArea.height)
        }
        
    }
}