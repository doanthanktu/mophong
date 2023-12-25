export default class mus extends Phaser.Scene {
    constructor() {
        super({ key: 'mus' });
    }

    preload() {



    }

    create() {
        this.scene.setVisible(true, 'mus');

        const sceneWidth = this.scale.width;
        const sceneHeight = this.scale.height;
        this.add.image(Math.abs(sceneWidth - 900) / 2, Math.abs(sceneHeight - 800) / 2, 'scene_mus').setDepth(100).setOrigin(0, 0)
        //this.add.image(0, 0, 'scene_mus').setOrigin(0, 0)
        //this.scene.resize(900, 800)

        ///////////////
        this.backgroundMusic = {
            music1: this.sound.add('music1'),
            music2: this.sound.add('music2'),
            music3: this.sound.add('music3'),
            music4: this.sound.add('music4'),
            music5: this.sound.add('music5'),
            music6: this.sound.add('music6'),
            music7: this.sound.add('music7'),
            // music5: this.sound.add('footstep')
        };

        this.footstep = this.sound.add('footstep');

        this.currentMusic = null;

        // Bật/Tắt âm thanh nền khi nhấn phím Q
        this.isBackgroundMusicMuted = false; // Biến để kiểm tra trạng thái âm thanh nền

        // Khi nhấn Q để tắt âm thanh nền
        this.input.keyboard.on('keydown-Q', () => {
            this.isBackgroundMusicMuted = !this.isBackgroundMusicMuted; // Đảo ngược trạng thái tắt/mở
            if (this.isBackgroundMusicMuted) {
                // Nếu tắt, dừng âm thanh nền
                if (this.currentMusic) {
                    this.currentMusic.pause();
                }
            } else {
                // Nếu mở, phát lại âm thanh nền nếu có
                if (this.currentMusic) {
                    this.currentMusic.resume();
                }
            }
        });

        // Bật/Tắt âm thanh bước chân khi nhấn phím W
        this.input.keyboard.on('keydown-W', () => {
            this.footstep.mute = !this.footstep.mute;
        });

        // Nghe âm thanh khi nhấn các phím số từ 1 đến 4
        this.input.keyboard.on('keydown-ONE', () => {
            this.playBackgroundMusic('music1');
        });

        this.input.keyboard.on('keydown-TWO', () => {
            this.playBackgroundMusic('music2');
        });

        this.input.keyboard.on('keydown-THREE', () => {
            this.playBackgroundMusic('music3');
        });

        this.input.keyboard.on('keydown-FOUR', () => {
            this.playBackgroundMusic('music4');
        });
        this.input.keyboard.on('keydown-FIVE', () => {
            this.playBackgroundMusic('music5');
        });
        this.input.keyboard.on('keydown-SIX', () => {
            this.playBackgroundMusic('music6');
        });
        this.input.keyboard.on('keydown-SEVEN', () => {
            this.playBackgroundMusic('music7');
        });

        // Khi nhấn phím P để hoàn tất lựa chọn
        this.input.keyboard.on('keydown-P', () => {
            this.scene.setVisible(false, 'mus');
            this.scene.launch('HD1')
        });
        ////////////////

        // this.input.keyboard.on('keydown-P', () => {
        //     this.scene.setVisible(false, 'mus');
        //     this.scene.launch('HD1')
        // });
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    playBackgroundMusic(key) {
        if (this.currentMusic) {
            this.currentMusic.stop(); // Dừng âm thanh hiện tại nếu có
        }
        this.currentMusic = this.backgroundMusic[key];
        this.currentMusic.volume = 0.3;
        this.currentMusic.play(); // Phát âm thanh mới được chọn
    };


    update() {

        if (this.cursors.up.isDown || this.cursors.down.isDown || this.cursors.left.isDown || this.cursors.right.isDown) {
            if (!this.footstep.isPlaying) {
                this.footstep.play();
                this.footstep.volume = 8;
            }
        } else {
            this.footstep.stop(); // Dừng âm thanh khi không có phím nào được nhấn
        }


    }
}

