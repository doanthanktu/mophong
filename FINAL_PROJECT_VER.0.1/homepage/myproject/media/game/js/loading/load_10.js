export default class Load10 extends Phaser.Scene {
    constructor() {
        super({ key: 'Load10' });
    }

    preload() {

        this.load.spritesheet('gifFrames10', 'assets/images/load-IMG/scene-load/png/load_10.png', {
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


        if (!this.anims.exists('gif10')) {
            this.anims.create({
                key: 'gif10',
                frames: this.anims.generateFrameNumbers('gifFrames10', { start: 0, end: numberOfFrames - 1 }),
                frameRate: 15,
                repeat: -1
            });
        }


        this.add.sprite(0, 0, 'gifFrames10').setOrigin(0, 0).play('gif10').setDepth(100);
        this.scale.resize(720, 480);

        setTimeout(() => {
            this.scene.launch('map-new-5');
        }, 3000);
    }

    update() {
        // Cập nhật
    }
}

