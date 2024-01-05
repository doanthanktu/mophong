export default class NHANVAT extends Phaser.Scene {
    constructor() {
        super({ key: 'NHANVAT' });
    }
    preload() {


        this.load.image('scene_mus', 'assets/audio/Scene_sound.png')

        


    }

    create() {
        let i = this.registry.get('myNumber');
        if (!this.anims.exists('walkDown')) {
            this.anims.create({
                key: 'walkDown',
                frames: this.anims.generateFrameNumbers('player' + i, { start: 0, end: 2 }),
                frameRate: 5,
                repeat: -1
            });
        }

        if (!this.anims.exists('walkLeft')) {
            this.anims.create({
                key: 'walkLeft',
                frames: this.anims.generateFrameNumbers('player' + i, { start: 3, end: 5 }),
                frameRate: 5,
                repeat: -1
            });
        }

        if (!this.anims.exists('walkRight')) {
            this.anims.create({
                key: 'walkRight',
                frames: this.anims.generateFrameNumbers('player' + i, { start: 6, end: 8 }),
                frameRate: 5,
                repeat: -1
            });
        }

        if (!this.anims.exists('walkUp')) {
            this.anims.create({
                key: 'walkUp',
                frames: this.anims.generateFrameNumbers('player' + i, { start: 9, end: 11 }),
                frameRate: 5,
                repeat: -1
            });
        }


    }

    update() {


    }
}