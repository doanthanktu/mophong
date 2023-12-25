export default class guideMap8 extends Phaser.Scene {
    constructor() {
        super({ key: 'guideMap8' });
    }

    preload() { // width: 840px, height: 720px, frames: 38,
        this.load.spritesheet('G_map8', 'assets/images/guide-IMG/png/guide-map8.png', {
            frameWidth: 840,
            frameHeight: 720,
            endFrame: 38
        });



    }

    create() {

        const numberOfFrames = 38

        if (!this.anims.exists('guide8')) {
            this.anims.create({
                key: 'guide8',
                frames: this.anims.generateFrameNumbers('G_map8', { start: 0, end: numberOfFrames - 1 }),
                frameRate: 15,
                repeat: -1
            });

        }


        const sceneWidth = this.scale.width;
        const sceneHeight = this.scale.height;

        this.a = this.add.sprite(Math.abs(sceneWidth - 840) / 2, Math.abs(sceneHeight - 720) / 2, 'G_map8').setOrigin(0, 0).setDepth(3).play('guide8')
        this.input.keyboard.on('keydown-F', () => {
            this.scene.stop('guideMap8')
        });

    }

    update() {


    }
}



