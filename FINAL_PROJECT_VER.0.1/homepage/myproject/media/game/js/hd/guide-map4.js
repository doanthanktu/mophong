export default class guideMap4 extends Phaser.Scene {
    constructor() {
        super({ key: 'guideMap4' });
    }

    preload() { // width: 840px, height: 720px, frames: 34,
        this.load.spritesheet('G_map4', 'assets/images/guide-IMG/png/guide-map4.png', {
            frameWidth: 840,
            frameHeight: 720,
            endFrame: 38
        });



    }

    create() {

        const numberOfFrames = 38

        this.anims.create({
            key: 'guide4',
            frames: this.anims.generateFrameNumbers('G_map4', { start: 0, end: numberOfFrames - 1 }),
            frameRate: 15,
            repeat: -1
        });

        const sceneWidth = this.scale.width;
        const sceneHeight = this.scale.height;

        this.a = this.add.sprite(Math.abs(sceneWidth - 840) / 2, Math.abs(sceneHeight - 720) / 2, 'G_map4').setOrigin(0, 0).setDepth(3).play('guide4')

        this.input.keyboard.on('keydown-F', () => {
            this.scene.stop('guideMap4')
        });

    }

    update() {


    }
}



