export default class Load4 extends Phaser.Scene {
    constructor() {
        super({ key: 'Load4' });
    }

    preload() {

        this.load.spritesheet('gifFrames4', 'assets/images/load-IMG/scene-load/png/load_4.png', {
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


        if (!this.anims.exists('gif4')) {
            this.anims.create({
                key: 'gif4',
                frames: this.anims.generateFrameNumbers('gifFrames4', { start: 0, end: numberOfFrames - 1 }),
                frameRate: 15,
                repeat: -1
            });
        }


        this.add.sprite(0, 0, 'gifFrames4').setOrigin(0, 0).play('gif4').setDepth(100);
        this.scale.resize(720, 480);

        setTimeout(() => {
            this.scene.launch('map2');
            //this.scene.stop('Load4')

        }, 3000);
    }

    update() {
        // Cập nhật
    }
}

