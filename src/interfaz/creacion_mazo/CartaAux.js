class cartaAux{
    constructor(scene){
        this.creaCarta = (scene,x,y,sprite) =>{
            var cartaAux = scene.add.image(x,y,sprite).setScale(0.5,0.5).setInteractive();

        }

        cartaAux.on('clicked', this.clickHandler, this);
    }
}