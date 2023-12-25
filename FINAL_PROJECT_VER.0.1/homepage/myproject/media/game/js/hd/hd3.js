export default class HD3 extends Phaser.Scene {
    constructor() {
        super({ key: 'HD3' });
    }

    preload() {





    }

    create() {

        const numberOfFrames = 122;

        if (!this.anims.exists('gifff')) {
            this.anims.create({
                key: 'gifff',
                frames: this.anims.generateFrameNumbers('hd3', { start: 0, end: numberOfFrames - 1 }),
                frameRate: 15,
                repeat: -1
            });

        }



        this.a = this.add.sprite(750, 25, 'hd3').setOrigin(0, 0).setDepth(100).play('gifff')
        this.input.keyboard.on('keydown-F', () => {
            //this.scene.stop('HD3')
            this.scene.launch('HD4')

        });

    }

    update() {


    }
}



