export class RestartButton {
    constructor(scene) {
      this.relatedScene = scene;
    }
  
    preload() {
        this.relatedScene.load.spritesheet('button', 'images/botoncofre.png', { frameWidth: 190, frameHeight: 49 });
    }

    create() {
        this.startButton = this.relatedScene.add.sprite(400, 230, 'button').setInteractive();

        this.startButton.on('pointerover', () => {
            this.startButton.setFrame(1);
        });
        this.startButton.on('pointerout', () => {
            this.startButton.setFrame(0);
        });
        this.startButton.on('pointerdown', () => { //el manejador 'pointerdown' es el que se encargará de cambiar la escena, para volver a reiniciar el juego.
            this.relatedScene.scene.start('CrearMazo');
        });
    }


  }