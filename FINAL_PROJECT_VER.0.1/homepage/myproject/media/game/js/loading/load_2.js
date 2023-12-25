export default class Load2 extends Phaser.Scene {
    constructor() {
        super({ key: 'Load2' });
    }

    preload() {

        this.load.spritesheet('gifFramesss', 'assets/images/load-IMG/scene-load/png/load_2.png', {
            frameWidth: 720,
            frameHeight: 480,
            endFrame: 42
        });

    }

    create() {
        this.scale.resize(720, 480)
        var sceneWidth = this.scale.width;
        var sceneHeight = this.scale.height;
        this.scale.displaySize.setAspectRatio(sceneWidth / sceneHeight);
        this.scale.refresh();
        const numberOfFrames = 42;

        if (!this.anims.exists('gif2')) {
            this.anims.create({
                key: 'gif2',
                frames: this.anims.generateFrameNumbers('gifFramesss', { start: 0, end: numberOfFrames - 1 }),
                frameRate: 15,
                repeat: -1
            });
        }


        this.add.sprite(0, 0, 'gifFramesss').setOrigin(0, 0).play('gif2').setDepth(100);
        this.scale.resize(720, 480);

        setTimeout(() => {

            this.scene.launch('MainScene')


        }, 3000);
    }

    update() {
        // Cập nhật
    }
}

