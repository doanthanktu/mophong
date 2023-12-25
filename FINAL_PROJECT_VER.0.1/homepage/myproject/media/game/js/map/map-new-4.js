import { TimeCounter } from '../timer.js';
let h1 = 0;
let h2 = 0;
let h3 = 0;
let h4 = 0;
let CR8SceneLaunched = false;

export default class SceneMapNew4 extends Phaser.Scene {
    constructor() {
        super({ key: 'map-new-4' });
        this.timeCounter = null;
        this.printedTime = false;
        this.textObject = null;
    }

    preload() {

        this.load.image('map-new-4', 'assets/images/map-IMG/IMG-edit/map-new-4.png');
        this.load.tilemapTiledJSON('map-n-4', 'assets/map/map-new-4.json');

        this.load.spritesheet('skip8', 'assets/images/next-IMG/congratulations-IMG/skip/png/skip4-S.png', {
            frameWidth: 630,
            frameHeight: 540,
            endFrame: 44
        });
    }

    create() {
        // $('#phaser-game').css('margin-top', '10px')
        // this.scale.resize(886, 886)
        let i = this.registry.get('myNumber');
        this.scene.remove('map-new-3')
        this.scene.remove('CR7')
        this.scene.remove('Load9')

        this.scale.resize(1180, 1180)
        var sceneWidth = this.scale.width;
        var sceneHeight = this.scale.height;
        this.scale.displaySize.setAspectRatio(sceneWidth / sceneHeight);
        this.scale.refresh();


        this.input.keyboard.on('keydown-F11', function (event) {
            if (!this.scale.isFullscreen) {
                this.scale.fullscreenTarget = document.querySelector('#phaser-game');
                this.scale.startFullscreen(Phaser.ScaleModes.SHOW_ALL);
            } else {
                this.scale.stopFullscreen();
            }
        }, this);

        setTimeout(() => {
            this.scene.launch('guideMapN4')
        }, 1000);

        // Hiển thị hình ảnh trong scene
        // this.add.image(400, 300, 'logo'); // Thay đổi vị trí và tên hình ảnh tùy theo cần thiết
        this.map = this.make.tilemap({ key: 'map-n-4' });

        // Tạo layers từ tilemap
        this.tilebase1 = this.map.addTilesetImage('map-new-4', 'map-new-4');
        this.base1layer = this.map.createLayer('backgr', this.tilebase1, 0, 0).setDepth(1)
        this.base2layer = this.map.createLayer('road', this.tilebase1, 0, 0).setDepth(0)

        //this.base3layer = this.map.createLayer('wall', this.tilebase1, 0, 0).setDepth(1)
        // Xử lý va chạm cho layer 'wall'
        this.base1layer.setCollisionByProperty({ collides: true })
        // // Hiển thị debug cho va chạm
        const debugGraphics = this.add.graphics().setAlpha(0.75);
        this.base1layer.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
            faceColor: new Phaser.Display.Color(40, 39, 37, 255),
        });

        // // va chạm hitbox

        if (this.registry.values.hasOwnProperty('admin')) {
            let isAdmin = this.registry.get('admin');

            if (isAdmin) {
                this.hitbox1 = this.add.rectangle(100, 430, 30, 30, { isStatic: true, label: 'hitbox1', isSensor: false })
                this.hitbox2 = this.add.rectangle(200, 430, 30, 30, { isStatic: true, label: 'hitbox2', isSensor: false })
                this.hitbox3 = this.add.rectangle(300, 430, 30, 30, { isStatic: true, label: 'hitbox3', isSensor: false })
                this.hitbox4 = this.add.rectangle(400, 430, 30, 30, { isStatic: true, label: 'hitbox4', isSensor: false })
            }
        } else {
            this.hitbox1 = this.add.rectangle(35, 35, 30, 30, { isStatic: true, label: 'hitbox1', isSensor: false })
            this.hitbox2 = this.add.rectangle(35, 1140, 30, 30, { isStatic: true, label: 'hitbox2', isSensor: false })
            this.hitbox3 = this.add.rectangle(1140, 35, 30, 30, { isStatic: true, label: 'hitbox3', isSensor: false })
            this.hitbox4 = this.add.rectangle(1140, 1140, 30, 30, { isStatic: true, label: 'hitbox4', isSensor: false })
            this.hitbox1.visible = false;
            this.hitbox2.visible = false;
            this.hitbox3.visible = false;
            this.hitbox4.visible = false;
            // this.hitbox1.visible = true;
            // this.hitbox2.visible = true;
            // this.hitbox3.visible = true;
            // this.hitbox4.visible = true;
        }

        this.hitbox1.setDepth(2)
        this.hitbox2.setDepth(2)
        this.hitbox3.setDepth(2)
        this.hitbox4.setDepth(2)
        this.physics.add.existing(this.hitbox1);
        this.physics.add.existing(this.hitbox2);
        this.physics.add.existing(this.hitbox3);
        this.physics.add.existing(this.hitbox4);

        this.output1 = this.add.sprite(-50, -45, 'output', 0).setOrigin(0, 0).setDepth(10).play('pre')
        this.output1.setScale(0.2);

        this.output2 = this.add.sprite(-50, 1050, 'output', 0).setOrigin(0, 0).setDepth(10).play('pre')
        this.output2.setScale(0.2);

        this.output3 = this.add.sprite(1080, -45, 'output', 0).setOrigin(0, 0).setDepth(10).play('pre')
        this.output3.setScale(0.2);

        this.output4 = this.add.sprite(1080, 1050, 'output', 0).setOrigin(0, 0).setDepth(10).play('pre')
        this.output4.setScale(0.2);


        // // Tạo nhân vật
        this.player = this.physics.add.sprite(380, 380, 'player' + i).setDepth(1);
        this.player.setScale(1)


        this.player.body.collideWorldBounds = true;

        this.physics.world.enable(this.player);
        this.player.body.setImmovable(true);
        // // Bật va chạm giữa nhân vật và layer 'wall'
        this.physics.add.collider(this.player, this.base1layer, () => {

        });




        // // Tạo các sự kiện di chuyển cho nhân vật
        // Biến để kiểm tra xem cảnh HD7 đã được khởi chạy hay chưa

        // Khi nhân vật chạm vào hitbox, khởi chạy cảnh HD7


        this.physics.add.overlap(this.player, this.hitbox1, () => {
            this.output1.setVisible(false);
            h1 = 1;
        });
        this.physics.add.overlap(this.player, this.hitbox2, () => {
            this.output2.setVisible(false);
            h2 = 1;
        });
        this.physics.add.overlap(this.player, this.hitbox3, () => {
            this.output3.setVisible(false);
            h3 = 1;
        });
        this.physics.add.overlap(this.player, this.hitbox4, () => {
            this.output4.setVisible(false);
            h4 = 1;
        });
        this.cursors = this.input.keyboard.createCursorKeys();


        this.input.keyboard.on('keydown', (event) => {
            if (!this.timeCounter && event.key.includes('Arrow')) {
                this.timeCounter = new TimeCounter(this);
                this.timeCounter.startCounting();
            }
        });

        this.physics.add.overlap(this.player, this.hitbox, () => {

        });


    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes} phút ${remainingSeconds} giây`;
    }

    printTime(formattedTime) {
        this.textObject = this.add.text(777, 335, `${formattedTime}`, {
            font: '22px Arial',
            fill: '#ffffff',
        }).setScrollFactor(0).setDepth(5);
    }

    update() {
        if (h1 == 1 && h2 == 1 && h3 == 1 && h4 == 1) {
            if (!CR8SceneLaunched) {
                const numberOfFrames = 44;

                this.anims.create({
                    key: 'skipgif8',
                    frames: this.anims.generateFrameNumbers('skip8', { start: 0, end: numberOfFrames - 1 }),
                    frameRate: 15,
                    repeat: -1
                });

                const sceneWidth = this.scale.width;
                const sceneHeight = this.scale.height;

                this.a = this.add.sprite(Math.abs(sceneWidth - 630) / 2, Math.abs(sceneHeight - 540) / 2, 'skip8').setOrigin(0, 0).setDepth(3).play('skipgif8')
                this.input.keyboard.on('keydown-F', () => {
                    this.scene.launch('Load10')
                });
                CR8SceneLaunched = true;
            }
            if (this.timeCounter && !this.printedTime) {
                this.timeCounter.stopCounting();
                const timeInSeconds = this.timeCounter.getTimeInSeconds();
                const formattedTime = this.formatTime(timeInSeconds);
                this.printTime(formattedTime)
                this.printedTime = true;
            }
        }
        // Cập nhật trạng thái cho scene này (nếu có)
        // Di chuyển nhân vật với phím mũi tên
        const speed = 100;
        const playerBody = this.player.body;
        playerBody.setVelocity(0);

        if (this.cursors.up.isDown) {
            playerBody.setVelocityY(-speed);
            if (this.cursors.left.isDown) {
                playerBody.setVelocityX(-speed);
                if (this.player.anims) this.player.anims.play('walkLeft', true);
            } else if (this.cursors.right.isDown) {
                playerBody.setVelocityX(speed);
                if (this.player.anims) this.player.anims.play('walkRight', true);
            } else {
                playerBody.setVelocityX(0);
                if (this.player.anims) this.player.anims.play('walkUp', true);
            }
        } else if (this.cursors.down.isDown) {
            playerBody.setVelocityY(speed);
            if (this.cursors.left.isDown) {
                playerBody.setVelocityX(-speed);
                if (this.player.anims) this.player.anims.play('walkLeft', true);
            } else if (this.cursors.right.isDown) {
                playerBody.setVelocityX(speed);
                if (this.player.anims) this.player.anims.play('walkRight', true);
            } else {
                playerBody.setVelocityX(0);
                if (this.player.anims) this.player.anims.play('walkDown', true);
            }
        } else if (this.cursors.left.isDown) {
            playerBody.setVelocityX(-speed);
            if (this.player.anims) this.player.anims.play('walkLeft', true);
        } else if (this.cursors.right.isDown) {
            playerBody.setVelocityX(speed);
            if (this.player.anims) this.player.anims.play('walkRight', true);
        } else {
            playerBody.setVelocity(0);
            if (this.player.anims) this.player.anims.stop();
        }
        const currentTile = this.base2layer.getTileAtWorldXY(this.player.x, this.player.y);

    }
}


