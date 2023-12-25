export default class HD6 extends Phaser.Scene {
    constructor() {
        super({ key: 'HD6' });
    }

    preload() {


    }

    create() {

        const numberOfFrames = 59;
        if (!this.anims.exists('giffffff')) {
            this.anims.create({
                key: 'giffffff',
                frames: this.anims.generateFrameNumbers('hd6', { start: 0, end: numberOfFrames - 1 }),
                frameRate: 15,
                repeat: -1
            });

        }


        this.a = this.add.sprite(750, 25, 'hd6').setOrigin(0, 0).setDepth(100).play('giffffff')

        this.input.keyboard.on('keydown-F', () => {

        });
        const numberOfFramess = 40;

        // Kiểm tra xem animation đã tồn tại hay chưa
        const existingAnimation = this.anims.exists('gifffffffs');

        if (!existingAnimation) {
            this.anims.create({
                key: 'gifffffffs',
                frames: this.anims.generateFrameNumbers('output', { start: 0, end: numberOfFramess - 1 }),
                frameRate: 15,
                repeat: -1
            });
        }

        const sprite = this.add.sprite(430, 580, 'output', 0).setOrigin(0, 0).setDepth(10);
        sprite.setScale(0.4);

        // Kiểm tra xem sprite có đang chạy animation không
        if (!sprite.anims.isPlaying) {
            sprite.play('gifffffffs');
        }




    }

    update() {


    }
}



