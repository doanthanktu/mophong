export default class CR11 extends Phaser.Scene {
    constructor() {
        super({ key: 'CR11' });
    }

    preload() {
        // this.load.spritesheet('skip4', 'assets/images/next-IMG/congratulations-IMG/skip/png/skip4.png', {
        //     frameWidth: 840,
        //     frameHeight: 720,
        //     endFrame: 61
        // });
    }

    create() {

        // const numberOfFrames = 61;

        // this.anims.create({
        //     key: 'skipgif4',
        //     frames: this.anims.generateFrameNumbers('skip4', { start: 0, end: numberOfFrames - 1 }),
        //     frameRate: 15,
        //     repeat: -1
        // });

        // this.a = this.add.sprite(750, 25, 'skip4').setOrigin(0, 0).setDepth(100).play('skipgif4')
        // this.input.keyboard.on('keydown-F', () => {
        //     this.scene.launch('HD3')
        // });

    }

    update() {


    }
}



