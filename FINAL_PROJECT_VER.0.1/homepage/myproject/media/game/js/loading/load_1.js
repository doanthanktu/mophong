export default class Load1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Load1' });
    }

    preload() {
        
        this.load.spritesheet('gifFramess', 'assets/images/load-IMG/scene-load/png/load_1.png', {
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
        if (!this.anims.exists('gif_1')) {
            this.anims.create({
                key: 'gif_1',
                frames: this.anims.generateFrameNumbers('gifFramess', { start: 0, end: numberOfFrames - 1 }),
                frameRate: 15,
                repeat: -1
            });

        }
        this.add.sprite(0, 0, 'gifFramess').setOrigin(0, 0).play('gif_1').setDepth(100);
        this.scale.resize(720, 480);

        setTimeout(() => {
            this.scene.launch('guide')
            // this.scene.launch('logic_move')
        }, 3000);
    }

    update() {
        // Cập nhật
    }
}

