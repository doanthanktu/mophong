export default class WIN extends Phaser.Scene {
    constructor() {
        super({ key: 'WIN' });
    } // width: 864px, height: 720px, frames: 122

    preload() {
        this.load.audio('mp3_winner', 'assets/audio/winner.mp3');

    }

    create() {
        this.Music_WIN = this.sound.add('mp3_winner');

        // Phát âm thanh
        this.Music_WIN.play();
        //this.Music_WIN.volume = 1.5;


        const numberOfFrames = 122;

        this.anims.create({
            key: 'win',
            frames: this.anims.generateFrameNumbers('winner', { start: 0, end: numberOfFrames - 1 }),
            frameRate: 15,
            repeat: -1
        });

        const sceneWidth = this.scale.width;
        const sceneHeight = this.scale.height;

        this.a = this.add.sprite(Math.abs(sceneWidth - 864 * 2) / 2, Math.abs(sceneHeight - 720 * 2) / 2, 'winner').setOrigin(0, 0).setDepth(3).play('win')


        const elementsToScale = this.children.getAll();
        elementsToScale.forEach(element => {
            element.setScale(2);
        });

        this.input.keyboard.on('keydown-F', () => {
            //this.scene.stop('map8')
            this.scene.remove('mus')
            this.scene.launch('Load_index')
        });

    }

    update() {


    }
}



