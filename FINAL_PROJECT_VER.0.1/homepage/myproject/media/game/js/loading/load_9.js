export default class Load9 extends Phaser.Scene {
    constructor() {
        super({ key: 'Load9' });
    }

    preload() {

        this.load.spritesheet('gifFrames9', 'assets/images/load-IMG/scene-load/png/load_9.png', {
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


        if (!this.anims.exists('gif9')) {
            this.anims.create({
                key: 'gif9',
                frames: this.anims.generateFrameNumbers('gifFrames9', { start: 0, end: numberOfFrames - 1 }),
                frameRate: 15,
                repeat: -1
            });
        }


        this.add.sprite(0, 0, 'gifFrames9').setOrigin(0, 0).play('gif9').setDepth(100);
        this.scale.resize(720, 480);

        setTimeout(() => {
            this.scene.launch('map-new-4');
        }, 3000);
    }

    update() {
        // Cập nhật
    }
}

