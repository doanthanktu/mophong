import { TimeCounter } from '../timer.js';
export default class SceneMapNew5 extends Phaser.Scene {
    constructor() {
        super({ key: 'map-new-5' });
        this.timeCounter = null;
        this.printedTime = false;
        this.textObject = null;
    }

    preload() {

        this.load.image('map-new-5', 'assets/images/map-IMG/IMG-edit/map-new-5.png');
        this.load.tilemapTiledJSON('map-n-5', 'assets/map/map-new-5.json');

        this.load.spritesheet('skip9', 'assets/images/next-IMG/congratulations-IMG/skip/png/skip2-S.png', {
            frameWidth: 700,
            frameHeight: 600,
            endFrame: 44
        });
    }

    create() {
        this.marksGroup = this.add.group();
        this.currentMarkIndex = 0;
        let i = this.registry.get('myNumber');
        this.scene.remove('map-new-4')
        this.scene.remove('CR8')
        this.scene.remove('Load10')

        this.scale.resize(836, 836)
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

        // Hiển thị hình ảnh trong scene
        // this.add.image(400, 300, 'logo'); // Thay đổi vị trí và tên hình ảnh tùy theo cần thiết
        this.map = this.make.tilemap({ key: 'map-n-5' });

        // Tạo layers từ tilemap
        this.tilebase1 = this.map.addTilesetImage('map-new-5', 'map-new-5');
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

        this.output = this.add.sprite(750, -20, 'output', 0).setOrigin(0, 0).setDepth(10).play('pre')
        this.output.setScale(0.15);

        // // va chạm hitbox
        if (this.registry.values.hasOwnProperty('admin')) {
            let isAdmin = this.registry.get('admin');

            if (isAdmin) {
                this.hitbox = this.add.rectangle(100, 820, 50, 50, { isStatic: true, label: 'hitbox', isSensor: false })
            }
        } else {
            this.hitbox = this.add.rectangle(815, 40, 30, 30, { isStatic: true, label: 'hitbox', isSensor: false })
            this.hitbox.visible = false;
        }

        this.hitbox.setDepth(2)
        this.physics.add.existing(this.hitbox);


        // // Tạo nhân vật
        this.player = this.physics.add.sprite(50, 790, 'player' + i).setDepth(5);
        this.player.setScale(0.65)


        this.player.body.collideWorldBounds = true;

        this.physics.world.enable(this.player);
        this.player.body.setImmovable(true);
        // // Bật va chạm giữa nhân vật và layer 'wall'
        this.physics.add.collider(this.player, this.base1layer, () => {

        });


        // // Tạo các sự kiện di chuyển cho nhân vật
        let CR9SceneLaunched = false; // Biến để kiểm tra xem cảnh HD7 đã được khởi chạy hay chưa

        // Khi nhân vật chạm vào hitbox, khởi chạy cảnh HD7
        this.physics.add.overlap(this.player, this.hitbox, () => {
            if (!CR9SceneLaunched) {
                const numberOfFrames = 44;

                this.anims.create({
                    key: 'skipgif9',
                    frames: this.anims.generateFrameNumbers('skip9', { start: 0, end: numberOfFrames - 1 }),
                    frameRate: 15,
                    repeat: -1
                });

                const sceneWidth = this.scale.width;
                const sceneHeight = this.scale.height;

                this.a = this.add.sprite(Math.abs(sceneWidth - 700) / 2, Math.abs(sceneHeight - 600) / 2, 'skip9').setOrigin(0, 0).setDepth(3).play('skipgif9')
                this.input.keyboard.on('keydown-F', () => {
                    this.scene.launch('Load11')
                });
                CR9SceneLaunched = true;
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
        this.textObject = this.add.text(625, 133, `${formattedTime}`, {
            font: '24px Arial',
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
        const markTypes = ['mark1', 'mark2'];
        const markType = markTypes[this.currentMarkIndex];
        const mark = this.add.image(currentTile.getCenterX(), currentTile.getCenterY(), markType).setDepth(3);
        
        if (markType === 'mark1') {
            mark.setScale(0.6); // Điều chỉnh kích thước cho mark1
        } else if (markType === 'mark2') {
            mark.setScale(0.05); // Điều chỉnh kích thước cho mark2, ví dụ là 70% so với kích thước mặc định
        }
        
        this.marksGroup.add(mark);
    
        this.currentMarkIndex = (this.currentMarkIndex + 1) % markTypes.length;
    }
    
    }
}


