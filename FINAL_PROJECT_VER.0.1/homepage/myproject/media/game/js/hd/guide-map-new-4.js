export default class guideMapN4 extends Phaser.Scene {
    constructor() {
        super({ key: 'guideMapN4' });
    }

    preload() { // width: 840px, height: 720px, frames: 38,
        this.load.spritesheet('G_map-n-4', 'assets/images/guide-IMG/png/guide-map-new-4.png', {
            frameWidth: 840,
            frameHeight: 720,
            endFrame: 38
        });



    }

    create() {

        const numberOfFrames = 38

        this.anims.create({
            key: 'guide-n-4',
            frames: this.anims.generateFrameNumbers('G_map-n-4', { start: 0, end: numberOfFrames - 1 }),
            frameRate: 15,
            repeat: -1
        });

        const sceneWidth = this.scale.width;
        const sceneHeight = this.scale.height;

        this.a = this.add.sprite(Math.abs(sceneWidth - 840) / 2, Math.abs(sceneHeight - 720) / 2, 'G_map-n-4').setOrigin(0, 0).setDepth(3).play('guide-n-4')

        this.input.keyboard.on('keydown-F', () => {
            this.scene.stop('guideMapN4')
        });

    }

    update() {


    }
}



