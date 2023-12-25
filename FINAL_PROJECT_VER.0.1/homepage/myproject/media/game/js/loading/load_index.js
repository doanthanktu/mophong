export default class Load_index extends Phaser.Scene {
    constructor() {
        super({ key: 'Load_index' });
    }

    preload() {
        //width: 768px, height: 432px, frames: 150, 
        this.load.spritesheet('gifFrames_index', 'assets/images/load-IMG/scene-load/png/load_index.png', {
            frameWidth: 768,
            frameHeight: 432,
            endFrame: 150
        });

    }

    create() {
        this.scale.resize(791, 480)
        var sceneWidth = this.scale.width;
        var sceneHeight = this.scale.height;
        this.scale.displaySize.setAspectRatio(sceneWidth / sceneHeight);
        this.scale.refresh();
        const numberOfFrames = 150;

        if (!this.anims.exists('gif_index')) {
            this.anims.create({
                key: 'gif_index',
                frames: this.anims.generateFrameNumbers('gifFrames_index', { start: 0, end: numberOfFrames - 1 }),
                frameRate: 15,
                repeat: -1
            });
        }


        this.add.sprite(0, 0, 'gifFrames_index').setOrigin(0, 0).play('gif_index').setDepth(3);
        this.scale.resize(768, 432);


        const delayBeforeReset = 5000; // 

        // Đặt hàm timeout để reset game sau khoảng thời gian đã cho
        setTimeout(() => {
            this.resetGame();
        }, delayBeforeReset);

        // setTimeout(() => {
        //     this.scene.stop('NHANVAT')
        //     this.scene.start('load')

        // }, 5000);
    }
    // resetPreviousScenesData() {
    //     let sceneManager = this.scene.manager;
    //     let scenes = sceneManager.scenes;

    //     // Loop through scenes except the current one ('Load_index')
    //     for (let scene of scenes) {
    //         if (scene.key !== 'Load_index') {
    //             console.log(scene + "tututu")
    //             // Assuming each scene has a reset function or a way to reset its data
    //             if (scene.resetData) {
    //                 scene.resetData(); // Call a reset function within each scene
    //                 console.log(scene)
    //             }
    //             // Or manually reset specific variables or properties in each scene
    //             // scene.data = defaultValue; // Reset a data property
    //             // scene.resetGameState(); // Reset the game state
    //             // ...
    //         }
    //     }
    // }

    // // Khi cần bắt đầu lại trò chơi từ cảnh đầu tiên
    // restartGameFromFirstScene() {
    //     // Đặt lại dữ liệu của các cảnh trước
    //     this.resetPreviousScenesData();

    //     // Khởi động lại cảnh đầu tiên để bắt đầu lại trò chơi
    //     this.scene.start('load');
    // }
    resetGame() {
        window.location.reload();
    }

    update() {
        // Cập nhật
    }
}

