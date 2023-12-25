let h1 = 0;
let h2 = 0;
let h3 = 0;
let WINSceneLaunched = false;
export default class SceneMap8 extends Phaser.Scene {
    constructor() {
        super({ key: 'map8' });
    }

    preload() {

        this.load.image('map8', 'assets/images/map-IMG/map8.png');
        this.load.tilemapTiledJSON('map-8', 'assets/map/map8.json');
        this.load.spritesheet('winner', 'assets/images/next-IMG/winner-IMG/winner.png', {
            frameWidth: 864,
            frameHeight: 720,
            endFrame: 122
        });

        //this.load.tilemapTiledJSON('map', 'assets/map/map8.1.json');
        // this.load.spritesheet('player', 'assets/images/player-IMG/Male/Male 04-2.png', {
        //     frameWidth: 32,
        //     frameHeight: 32,
        // })
    }

    create() {
        let i = this.registry.get('myNumber');
        // $('#phaser-game').css('margin-top', '0px')
        // this.scale.resize(1025, 769)
        this.scene.remove('map-new-6')
        this.scene.remove('CR10')
        this.scene.remove('Load_N')

        this.scale.resize(2048, 1536)
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
            this.scene.launch('guideMap8')
        }, 2000);

        // Hiển thị hình ảnh trong scene
        // this.add.image(400, 300, 'logo'); // Thay đổi vị trí và tên hình ảnh tùy theo cần thiết
        this.map = this.make.tilemap({ key: 'map-8' });

        // Tạo layers từ tilemap
        this.tilebase1 = this.map.addTilesetImage('map8', 'map8');
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

        // // va chạm hitbox 1

        if (this.registry.values.hasOwnProperty('admin')) {
            let isAdmin = this.registry.get('admin');

            if (isAdmin) {
                this.hitbox1 = this.add.rectangle(250, 580, 30, 30, { isStatic: true, label: 'hitbox1', isSensor: false })
                this.hitbox2 = this.add.rectangle(350, 580, 30, 30, { isStatic: true, label: 'hitbox2', isSensor: false })
                this.hitbox3 = this.add.rectangle(450, 580, 30, 30, { isStatic: true, label: 'hitbox3', isSensor: false })
            }
        } else {
            this.hitbox1 = this.add.rectangle(480, 80, 30, 30, { isStatic: true, label: 'hitbox1', isSensor: false })
            this.hitbox2 = this.add.rectangle(1050, 485, 30, 30, { isStatic: true, label: 'hitbox2', isSensor: false })
            this.hitbox3 = this.add.rectangle(1355, 1300, 30, 30, { isStatic: true, label: 'hitbox3', isSensor: false })
            this.hitbox1.visible = false;
            this.hitbox2.visible = false;
            this.hitbox3.visible = false;
        }
        this.hitbox1.setDepth(2)
        this.physics.add.existing(this.hitbox1);
        this.hitbox2.setDepth(2)
        this.physics.add.existing(this.hitbox2);
        this.hitbox3.setDepth(2)
        this.physics.add.existing(this.hitbox3);
        // // va chạm hitbox1 1270,785


        this.output1 = this.add.sprite(400, -40, 'output', 0).setOrigin(0, 0).setDepth(10).play('pre')
        this.output1.setScale(0.25);

        this.output2 = this.add.sprite(930, 370, 'output', 0).setOrigin(0, 0).setDepth(10).play('pre')
        this.output2.setScale(0.25);

        this.output3 = this.add.sprite(1230, 1180, 'output', 0).setOrigin(0, 0).setDepth(10).play('pre')
        this.output3.setScale(0.25);


        // // Tạo nhân vật
        this.player = this.physics.add.sprite(100, 590, 'player' + i).setDepth(1);
        this.player.setScale(1.4)


        this.player.body.collideWorldBounds = true;

        this.physics.world.enable(this.player);
        this.player.body.setImmovable(true);
        // // Bật va chạm giữa nhân vật và layer 'wall'
        this.physics.add.collider(this.player, this.base1layer, () => {

        });

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


        // // Tạo các sự kiện di chuyển cho nhân vật





        this.cursors = this.input.keyboard.createCursorKeys();


    }

    update() {
        if (h1 == 1 && h2 == 1 && h3 == 1) {
            if (!WINSceneLaunched) {
                const winScene = this.scene.get('WIN');
                if (winScene) {
                    this.scene.launch('WIN');
                    //this.scene.stop('map8')
                    WINSceneLaunched = true;
                }
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


