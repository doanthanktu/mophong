export default class Load3 extends Phaser.Scene {
    constructor() {
        super({ key: 'Load3' });
    }

    preload() {

        this.load.spritesheet('gifFrames3', 'assets/images/load-IMG/scene-load/png/load_3.png', {
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

        if (!this.anims.exists('gif3')) {
            this.anims.create({
                key: 'gif3',
                frames: this.anims.generateFrameNumbers('gifFrames3', { start: 0, end: numberOfFrames - 1 }),
                frameRate: 15,
                repeat: -1
            });
        }


        this.add.sprite(0, 0, 'gifFrames3').setOrigin(0, 0).play('gif3').setDepth(100);
        this.scale.resize(720, 480);

        setTimeout(() => {
            this.scene.launch('map-new-1');
            //this.scene.launch('map8')
        }, 3000);
    }

    update() {
        // Cập nhật
    }
}

