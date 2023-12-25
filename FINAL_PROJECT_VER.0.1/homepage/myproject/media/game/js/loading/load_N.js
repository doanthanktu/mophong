export default class Load_N extends Phaser.Scene {
    constructor() {
        super({ key: 'Load_N' });
    }

    preload() {
        //width: 791px, height: 480px, frames: 76
        this.load.spritesheet('gifFrames_N', 'assets/images/load-IMG/scene-load/png/load_N.png', {
            frameWidth: 791,
            frameHeight: 480,
            endFrame: 76
        });

    }

    create() {
        this.scale.resize(791, 480)
        var sceneWidth = this.scale.width;
        var sceneHeight = this.scale.height;
        this.scale.displaySize.setAspectRatio(sceneWidth / sceneHeight);
        this.scale.refresh();
        const numberOfFrames = 76;

        if (!this.anims.exists('gif_N')) {
            this.anims.create({
                key: 'gif_N',
                frames: this.anims.generateFrameNumbers('gifFrames_N', { start: 0, end: numberOfFrames - 1 }),
                frameRate: 15,
                repeat: -1
            });
        }


        this.add.sprite(0, 0, 'gifFrames_N').setOrigin(0, 0).play('gif_N').setDepth(100);

        this.scale.resize(791, 480);

        setTimeout(() => {
            this.scene.launch('map8');

        }, 3000);
    }

    update() {
        // Cập nhật
    }
}

