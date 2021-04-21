

class Zona {
    constructor(scene,x,y,color) {
        this.renderZone = () => {
            
            let dropZone = scene.add.zone(x, y, 75, 100).setRectangleDropZone(75, 100);
            //dropZone.setData({ cards: 0 }); era una zona de "juego"
            return dropZone;
        };

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