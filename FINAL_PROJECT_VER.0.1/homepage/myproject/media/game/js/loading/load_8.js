export default class Load8 extends Phaser.Scene {
    constructor() {
        super({ key: 'Load8' });
    }

    preload() {

        this.load.spritesheet('gifFrames8', 'assets/images/load-IMG/scene-load/png/load_8.png', {
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

        if (!this.anims.exists('gif8')) {
            this.anims.create({
                key: 'gif8',
                frames: this.anims.generateFrameNumbers('gifFrames8', { start: 0, end: numberOfFrames - 1 }),
                frameRate: 15,
                repeat: -1
            });
        }


        this.add.sprite(0, 0, 'gifFrames8').setOrigin(0, 0).play('gif8').setDepth(100);
        this.scale.resize(720, 480);

        setTimeout(() => {
            this.scene.launch('map-new-3')
            //this.scene.stop('Load8')
        }, 3000);
    }

    update() {
        // Cập nhật
    }
}

