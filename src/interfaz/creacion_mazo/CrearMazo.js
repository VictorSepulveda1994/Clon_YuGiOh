import { RestartButton } from "../components/restart-button.js";

class CrearMazo extends Phaser.Scene {
    constructor() {
        super({key: "CrearMazo", active: true});

    }

    preload() {
      this.restartButton.preload();
    }

    create() {
        this.restartButton.create();
        this.clickCountText = this.add.text(100, 200, '');        
        let graphics = this.add.graphics();
        graphics.fillStyle(0xFF977D, 1);
        graphics.fillRect(20, 20, 1000, 560);
        let clickCount = 0;
        this.clickCountText = this.add.text(100, 200, '');
    
        this.clickButton = this.add.text(1050, 100, 'Crear mazo', { fill: '#0f0' })
          .setInteractive({ useHandCursor: true })
          .on('pointerover', () => this.enterButtonHoverState() )
          .on('pointerout', () => this.enterButtonRestState() )
          .on('pointerdown', () => this.enterButtonActiveState() )
          .on('pointerup', () => {
            this.updateClickCountText(++clickCount);
            this.enterButtonHoverState();
        });
    
        this.updateClickCountText(clickCount);
      }
    
      updateClickCountText(clickCount) {
        this.clickCountText.setText(`Haz creado ${clickCount} mazos.`);
        //this.scene.start('EditarMazo');
      }
    
      enterButtonHoverState() {
        this.clickButton.setStyle({ fill: '#ff0'});
      }
    
      enterButtonRestState() {
        this.clickButton.setStyle({ fill: '#0f0' });
      }
    
      enterButtonActiveState() {
        this.clickButton.setStyle({ fill: '#0ff' });
      }

    update(time, delta) {

    }
}