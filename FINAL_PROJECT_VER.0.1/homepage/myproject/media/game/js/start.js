export default class SceneStart extends Phaser.Scene {
    constructor() {
        super({ key: 'start' });
    }

    preload() {
        this.load.spritesheet('gifFrames', 'assets/images/next-IMG/framess.png', {
            frameWidth: 1200, // Chiều rộng của mỗi frame
            frameHeight: 675, // Chiều cao của mỗi frame
            endFrame: 31 // Số lượng frame trong sprite sheet
        });
        this.load.audio('music_start', 'assets/audio/start.mp3');
       

    }

    create() {
        this.Music_ST = this.sound.add('music_start');
        this.Music_ST.on('complete', () => {
            this.Music_ST.play(); 
        });

        this.Music_ST.play();
        window.isMusicPlaying = true;

        this.scene.stop('mus')

        if (this.registry.values.hasOwnProperty('admin')) {
            let isAdmin = this.registry.get('admin');

            if (isAdmin) {
                console.log('MODE: ADMIN')

            }
        } else {
            console.log('MODE: PLAYER')

        }

        this.scale.resize(1200, 675);
        var sceneWidth = this.scale.width;
        var sceneHeight = this.scale.height;
        this.scale.displaySize.setAspectRatio(sceneWidth / sceneHeight);
        this.scale.refresh();

        




        const numberOfFrames = 31;

        if (!this.anims.exists('gifAnimation')) {
            this.anims.create({
                key: 'gifAnimation',
                frames: this.anims.generateFrameNumbers('gifFrames', { start: 0, end: numberOfFrames - 1 }),
                frameRate: 15,
                repeat: -1 // -1 để lặp vô hạn, hoặc chỉ định số lần lặp
            });
        }

        this.add.sprite(0, 0, 'gifFrames').setOrigin(0, 0).play('gifAnimation');




        this.input.keyboard.on('keydown-F', () => {
            setTimeout(() => {
                this.scene.launch('DATA')
            }, 1000);

        });
    }

    update() {

    }
}



