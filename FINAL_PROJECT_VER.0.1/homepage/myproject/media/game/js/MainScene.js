import { TimeCounter } from './timer.js';
export default class SceneName extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
        this.timeCounter = null;
        this.printedTime = false;
        this.textObject = null;
    }

    preload() {

        let i = this.registry.get('myNumber');

        this.load.image('map1', 'assets/images/map-IMG/map1.png');
        this.load.tilemapTiledJSON('mapp', 'assets/map/map1.json');
        this.load.spritesheet('skip1', 'assets/images/next-IMG/congratulations-IMG/skip/png/skip1.png', {
            frameWidth: 840,
            frameHeight: 720,
            endFrame: 74
        });

    }

    create() {
        this.marksGroup = this.add.group();
        this.currentMarkIndex = 0;
        let i = this.registry.get('myNumber');
        //this.scene.stop('mus')
        this.scene.remove('guide')
        this.scene.remove('HD1')
        this.scene.remove('HD2')
        this.scene.remove('HD3')
        this.scene.remove('HD4')
        this.scene.remove('HD5')
        this.scene.remove('HD6')
        this.scene.remove('HD7')
        this.scene.remove('Load2')
        this.scale.resize(1250, 1250)
        //$('#phaser-game').css('margin-top', '0px')

        var sceneWidth = this.scale.width;
        var sceneHeight = this.scale.height;
        this.scale.displaySize.setAspectRatio(sceneWidth / sceneHeight);
        this.scale.refresh();



        this.input.keyboard.on('keydown-F11', function (event) {
            if (!this.scale.isFullscreen) {
                this.scale.fullscreenTarget = document.querySelector('#phaser-game'); // Thay '#phaser-game' bằng ID hoặc selector của phần tử chứa game của bạn
                this.scale.startFullscreen(Phaser.ScaleModes.SHOW_ALL);
            } else {
                this.scale.stopFullscreen();
            }
        }, this);
        ///////////////




        //////////////////////////////////

        // Hiển thị hình ảnh trong scene
        // this.add.image(400, 300, 'logo'); // Thay đổi vị trí và tên hình ảnh tùy theo cần thiết
        this.map = this.make.tilemap({ key: 'mapp' });

        // Tạo layers từ tilemap
        this.tilebase1 = this.map.addTilesetImage('map1', 'map1');
        this.base1layer = this.map.createLayer('backgr', this.tilebase1, 0, 0).setDepth(1)
        this.base2layer = this.map.createLayer('road', this.tilebase1, 0, 0).setDepth(0)
        //console.log(this.map)

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

        this.output = this.add.sprite(1020, 470, 'output', 0).setOrigin(0, 0).setDepth(10).play('pre')
        this.output.setScale(0.35);

        // // va chạm hitbox

        if (this.registry.values.hasOwnProperty('admin')) {
            let isAdmin = this.registry.get('admin');

            if (isAdmin) {
                this.hitbox = this.add.rectangle(200, 620, 50, 50, { isStatic: true, label: 'hitbox', isSensor: false })
            }
        } else {
            this.hitbox = this.add.rectangle(1150, 620, 50, 50, { isStatic: true, label: 'hitbox', isSensor: false })
            this.hitbox.visible = false;
        }

        this.hitbox.setDepth(2)
        this.physics.add.existing(this.hitbox);


        // // Tạo nhân vật
        this.player = this.physics.add.sprite(80, 630, 'player' + i).setDepth(10);
        this.player.setScale(1.3)


        this.player.body.collideWorldBounds = true;

        this.physics.world.enable(this.player);
        this.player.body.setImmovable(true);
        // // Bật va chạm giữa nhân vật và layer 'wall'
        this.physics.add.collider(this.player, this.base1layer, () => {

        });

        let CR1SceneLaunched = false; // Biến để kiểm tra xem cảnh HD7 đã được khởi chạy hay chưa
        // Khi nhân vật chạm vào hitbox, khởi chạy cảnh HD7
        this.physics.add.overlap(this.player, this.hitbox, () => {
            if (!CR1SceneLaunched) {
                const numberOfFrames = 74
                this.anims.create({
                    key: 'skipgif1',
                    frames: this.anims.generateFrameNumbers('skip1', { start: 0, end: numberOfFrames - 1 }),
                    frameRate: 15,
                    repeat: -1
                });
                this.a = this.add.sprite(205, 265, 'skip1').setOrigin(0, 0).setDepth(3).play('skipgif1')
                this.input.keyboard.on('keydown-F', () => {
                    this.scene.launch('Load3')
                });
                CR1SceneLaunched = true;

            }
        });

        this.cursors = this.input.keyboard.createCursorKeys();


        this.input.keyboard.on('keydown', (event) => {
            if (!this.timeCounter && event.key.includes('Arrow')) {
                this.timeCounter = new TimeCounter(this);
                this.timeCounter.startCounting();
            }
        });
        this.physics.add.overlap(this.player, this.hitbox, () => {
            if (this.timeCounter && !this.printedTime) {
                this.timeCounter.stopCounting();
                const timeInSeconds = this.timeCounter.getTimeInSeconds();
                const formattedTime = this.formatTime(timeInSeconds);
                this.printTime(formattedTime) // Hiển thị thời gian
                this.printedTime = true;
            }
        });


    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes} phút ${remainingSeconds} giây`;
    }

    printTime(formattedTime) {
        this.textObject = this.add.text(875, 285, `${formattedTime}`, {
            font: '28px Arial',
            fill: '#ffffff',
        }).setScrollFactor(0).setDepth(5);
    }




    update() {
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




        // Trong hàm update hoặc xử lý di chuyển
        const currentTile = this.base2layer.getTileAtWorldXY(this.player.x, this.player.y);

        const existingMark = this.marksGroup.getChildren().find(mark => {
            const markTile = this.base2layer.getTileAtWorldXY(mark.x, mark.y);
            return markTile.x === currentTile.x && markTile.y === currentTile.y;
        });

        if (!existingMark) {
            // Nếu tile hiện tại chưa được đánh dấu
            const markType = ['mark1', 'mark1', 'mark1'][this.currentMarkIndex];
            const mark = this.add.image(currentTile.getCenterX(), currentTile.getCenterY(), markType).setDepth(3);
            this.marksGroup.add(mark);

            // Chuyển đổi giữa mark1, mark2, mark2 theo thứ tự
            this.currentMarkIndex = (this.currentMarkIndex + 1) % 3;
        }


    }
}


