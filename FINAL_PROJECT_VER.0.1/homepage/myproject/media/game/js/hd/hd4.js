export default class HD4 extends Phaser.Scene {
    constructor() {
        super({ key: 'HD4' });
    }

    preload() {




    }

    create() {

        const numberOfFrames = 122;

        if (!this.anims.exists('giffff')) {
            this.anims.create({
                key: 'giffff',
                frames: this.anims.generateFrameNumbers('hd4', { start: 0, end: numberOfFrames - 1 }),
                frameRate: 15,
                repeat: -1
            });

        }



        this.a = this.add.sprite(750, 25, 'hd4').setOrigin(0, 0).setDepth(100).play('giffff')
        this.input.keyboard.on('keydown-F', () => {
            //this.scene.stop('HD4')
            this.scene.launch('HD5')

        });

    }

    update() {


    }
}



