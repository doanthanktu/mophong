export default class HD2 extends Phaser.Scene {
    constructor() {
        super({ key: 'HD2' });
    }

    preload() {


    }

    create() {

        const numberOfFrames = 122;

        if (!this.anims.exists('giff')) {
            this.anims.create({
                key: 'giff',
                frames: this.anims.generateFrameNumbers('hd2', { start: 0, end: numberOfFrames - 1 }),
                frameRate: 15,
                repeat: -1
            });

        }
        this.a = this.add.sprite(750, 25, 'hd2').setOrigin(0, 0).setDepth(100).play('giff')

        this.input.keyboard.on('keydown-F', () => {
            this.scene.launch('HD3')

        });

    }

    update() {


    }
}



