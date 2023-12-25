export default class HD1 extends Phaser.Scene {
    constructor() {
        super({ key: 'HD1' });
    }

    preload() {





    }

    create() {

        const numberOfFrames = 74;

        if (!this.anims.exists('u1')) {
            this.anims.create({
                key: 'u1',
                frames: this.anims.generateFrameNumbers('hd1', { start: 0, end: numberOfFrames - 1 }),
                frameRate: 15,
                repeat: -1
            });
        }


        this.a = this.add.sprite(750, 25, 'hd1').setOrigin(0, 0).play('u1').setDepth(2)

        this.input.keyboard.on('keydown-F', () => {
            this.scene.launch('HD2')

        });

    }

    update() {


    }
}



