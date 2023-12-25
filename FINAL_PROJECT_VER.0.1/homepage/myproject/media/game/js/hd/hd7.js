export default class HD7 extends Phaser.Scene {
    constructor() {
        super({ key: 'HD7' });
    }

    preload() {




    }

    create() {

        const numberOfFrames = 59;

        if (!this.anims.exists('gifffffff')) {
            this.anims.create({
                key: 'gifffffff',
                frames: this.anims.generateFrameNumbers('hd7', { start: 0, end: numberOfFrames - 1 }),
                frameRate: 15,
                repeat: -1
            });

        }



        this.a = this.add.sprite(750, 25, 'hd7').setOrigin(0, 0).setDepth(100).play('gifffffff')

        this.input.keyboard.on('keydown-F', () => {
            this.scene.launch('Load2')


        });




    }

    update() {


    }
}



