export default class GuideScene extends Phaser.Scene {
    constructor() {
        super({ key: 'guide' });
    }

    preload() {
        this.load.image('map-zero', 'assets/images/map-IMG/IMG-default/map-zero.png');
        this.load.tilemapTiledJSON('map', 'assets/map/map-zero.json');
        this.load.audio('music1', 'assets/audio/rung.wav');
        this.load.audio('music2', 'assets/audio/jfla.mp3');
        this.load.audio('music3', 'assets/audio/lofi.mp3');
        this.load.audio('music4', 'assets/audio/remix.mp3');
        this.load.audio('music5', 'assets/audio/nghenhutinhyeu.mp3');
        this.load.audio('music6', 'assets/audio/khongthesay.mp3');
        this.load.audio('music7', 'assets/audio/rhyder.mp3');
        this.load.audio('footstep', 'assets/audio/footsteps.wav');
        


        this.load.spritesheet('hd1', 'assets/images/guide-IMG/png/hd1.png', {
            frameWidth: 617,
            frameHeight: 720,
            endFrame: 74
        });
        this.load.spritesheet('hd2', 'assets/images/guide-IMG/png/hd2.png', {
            frameWidth: 617,
            frameHeight: 720,
            endFrame: 122
        });
        this.load.spritesheet('hd3', 'assets/images/guide-IMG/png/hd3.png', {
            frameWidth: 617,
            frameHeight: 720,
            endFrame: 122
        });
        this.load.spritesheet('hd4', 'assets/images/guide-IMG/png/hd4.png', {
            frameWidth: 617,
            frameHeight: 720,
            endFrame: 122
        });
        this.load.spritesheet('hd5', 'assets/images/guide-IMG/png/hd5.png', {
            frameWidth: 617,
            frameHeight: 720,
            endFrame: 122
        });
        this.load.spritesheet('hd6', 'assets/images/guide-IMG/png/hd6.png', {
            frameWidth: 617,
            frameHeight: 720,
            endFrame: 122
        });
        this.load.spritesheet('hd7', 'assets/images/guide-IMG/png/hd7.png', {
            frameWidth: 617,
            frameHeight: 720,
            endFrame: 59
        });


    }

    create() {
        
        this.marksGroup = this.add.group();
        this.currentMarkIndex = 0;
       
        if (window.isMusicPlaying) {
            this.sound.stopByKey('music_start');
            window.isMusicPlaying = false; // Cập nhật trạng thái âm thanh
        }


        let i = this.registry.get('myNumber');
        this.scene.stop('DATA')
        this.scene.remove('Load1')
        this.scene.launch('mus')


        this.scale.resize(1400, 800)
        var sceneWidth = this.scale.width;
        var sceneHeight = this.scale.height;
        this.scale.displaySize.setAspectRatio(sceneWidth / sceneHeight);
        this.scale.refresh();


        //load


        this.scale.resize(1400, 800);
        // this.input.keyboard.on('keydown-P', () => {
        //     this.scene.stop('mus')
        //     this.scene.launch('HD1')

        // });


        //
        this.map = this.make.tilemap({ key: 'map' });

        // Tạo layers từ tilemap
        this.tilebase1 = this.map.addTilesetImage('map-zero', 'map-zero');
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
                this.hitbox = this.add.rectangle(120, 280, 30, 30, { isStatic: true, label: 'hitbox', isSensor: false })
            }
        } else {
            this.hitbox = this.add.rectangle(580, 750, 50, 50, { isStatic: true, label: 'hitbox', isSensor: false })
            this.hitbox.visible = false;
        }

        this.hitbox.setDepth(2)
        this.physics.add.existing(this.hitbox);


        // // Tạo nhân vật
        this.player = this.physics.add.sprite(20, 280, 'player' + i).setDepth(5);
        this.player.setScale(1.5)
        


        this.player.body.collideWorldBounds = true;

        this.physics.world.enable(this.player);
        this.player.body.setImmovable(true);
        // // Bật va chạm giữa nhân vật và layer 'wall'
        this.physics.add.collider(this.player, this.base1layer, () => {

        });


        // // Tạo các sự kiện di chuyển cho nhân vật
        let hd7SceneLaunched = false; // Biến để kiểm tra xem cảnh HD7 đã được khởi chạy hay chưa


        // Khi nhân vật chạm vào hitbox, khởi chạy cảnh HD7
        this.physics.add.overlap(this.player, this.hitbox, () => {
            if (!hd7SceneLaunched) {
                this.scene.launch('HD7');
                hd7SceneLaunched = true;
                //this.scene.stop('HD6')
            }
        });
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        //super.create();

        const speed = 100;
        const playerBody = this.player.body;
        playerBody.setVelocity(0);
        // const footstepSound = this.sound.get('footstep');
        // if (footstepSound) {
        // Bạn có thể thực hiện các hành động với âm thanh 'footstep' ở đây
        // Ví dụ: footstepSound.play(), footstepSound.stop(), footstepSound.pause(), etc.
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
            const markType = ['mark1', 'mark2', 'mark2'][this.currentMarkIndex];
            const mark = this.add.image(currentTile.getCenterX(), currentTile.getCenterY(), markType).setDepth(3);
            this.marksGroup.add(mark);

            // Chuyển đổi giữa mark1, mark2, mark2 theo thứ tự
            this.currentMarkIndex = (this.currentMarkIndex + 1) % 3;
        }

    }
}




