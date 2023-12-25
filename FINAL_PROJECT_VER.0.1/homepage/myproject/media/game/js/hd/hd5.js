export default class HD5 extends Phaser.Scene {
    constructor() {
        super({ key: 'HD5' });
    }

    preload() {





    }

    create() {

        const numberOfFrames = 122;

        if (!this.anims.exists('gifffff')) {
            this.anims.create({
                key: 'gifffff',
                frames: this.anims.generateFrameNumbers('hd5', { start: 0, end: numberOfFrames - 1 }),
                frameRate: 15,
                repeat: -1
            });

        }



        this.a = this.add.sprite(750, 25, 'hd5').setOrigin(0, 0).setDepth(100).play('gifffff')
        this.input.keyboard.on('keydown-F', () => {
            // this.scene.stop('HD5')
            this.scene.launch('HD6')

        });

    }

    update() {


    }
}



