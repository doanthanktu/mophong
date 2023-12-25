let myNumber = -1;
var checker = 0
export default class DATA extends Phaser.Scene {
    constructor() {
        super({ key: 'DATA' });
    }

    preload() {

        //width: 960px, height: 720px, frames: 86,

        this.load.spritesheet('Sce_Player', 'assets/images/player-IMG/PLAYER/Scene_Player.png', {
            frameWidth: 960,
            frameHeight: 720,
            endFrame: 86
        }); //load các Scene
        this.load.spritesheet('output', 'assets/images/next-IMG/output.png', {
            frameWidth: 800,
            frameHeight: 600,
            endFrame: 40
        });
        //load nhân vật
        this.load.spritesheet('player0', 'assets/images/player-IMG/PLAYER/player_0.png', {
            frameWidth: 960,
            frameWidth: 32,
            frameHeight: 32,
        })

        this.load.spritesheet('player1', 'assets/images/player-IMG/PLAYER/player_1.png', {
            frameWidth: 32,
            frameHeight: 32,
        })

        this.load.spritesheet('player2', 'assets/images/player-IMG/PLAYER/player_2.png', {
            frameWidth: 32,
            frameHeight: 32,
        })

        this.load.spritesheet('player3', 'assets/images/player-IMG/PLAYER/player_3.png', {
            frameWidth: 32,
            frameHeight: 32,
        })

        this.load.spritesheet('player4', 'assets/images/player-IMG/PLAYER/player_4.png', {
            frameWidth: 32,
            frameHeight: 32,
        })

        this.load.spritesheet('player5', 'assets/images/player-IMG/PLAYER/player_5.png', {
            frameWidth: 32,
            frameHeight: 32,
        })

        this.load.spritesheet('player6', 'assets/images/player-IMG/PLAYER/player_6.png', {
            frameWidth: 32,
            frameHeight: 32,
        })

        this.load.spritesheet('player7', 'assets/images/player-IMG/PLAYER/player_7.png', {
            frameWidth: 32,
            frameHeight: 32,
        })

        this.load.spritesheet('player8', 'assets/images/player-IMG/PLAYER/player_8.png', {
            frameWidth: 32,
            frameHeight: 32,
        })

        this.load.spritesheet('player9', 'assets/images/player-IMG/PLAYER/player_9.png', {
            frameWidth: 32,
            frameHeight: 32,
        })




    }

    create() {
        this.scene.stop('start')
        
        this.registry.set('myNumber', -1);
        checker = 0;
        this.scale.resize(960, 720)
        var sceneWidth = this.scale.width;
        var sceneHeight = this.scale.height;
        this.scale.displaySize.setAspectRatio(sceneWidth / sceneHeight);
        this.scale.refresh();
        const numberOfFrames = 86;

        if (!this.anims.exists('gif_Player')) {
            this.anims.create({
                key: 'gif_Player',
                frames: this.anims.generateFrameNumbers('Sce_Player', { start: 0, end: numberOfFrames - 1 }),
                frameRate: 15,
                repeat: -1
            });
        }

        const numberOfFr = 40;

        if (!this.anims.exists('pre')) {
            this.anims.create({
                key: 'pre',
                frames: this.anims.generateFrameNumbers('output', { start: 0, end: numberOfFr - 1 }),
                frameRate: 15,
                repeat: -1
            });
        }

        this.add.sprite(0, 0, 'Sce_Player').setOrigin(0, 0).play('gif_Player').setDepth(100);
        ///////////////////////////////////
        this.input.keyboard.on('keydown', function (event) {
            var keyCode = event.code;
            if (keyCode === 'Digit0') {
                // this.add.sprite(0, 0, 'player0').setName('player');
                myNumber = 0;
                this.registry.set('myNumber', myNumber);

                checker = 1
            }
            else if (keyCode === 'Digit1') {
                //this.add.sprite(0, 0, 'player1').setName('player');
                myNumber = 1;
                this.registry.set('myNumber', myNumber);

                checker = 1
            }
            else if (keyCode === 'Digit2') {
                // this.add.sprite(0, 0, 'player2').setName('player');
                myNumber = 2;
                this.registry.set('myNumber', myNumber);

                checker = 1
            }
            else if (keyCode === 'Digit3') {
                //this.add.sprite(0, 0, 'player3').setName('player');
                myNumber = 3;
                this.registry.set('myNumber', myNumber);

                checker = 1
            }
            else if (keyCode === 'Digit4') {
                this.add.sprite(0, 0, 'player4').setName('player');
                myNumber = 4;
                this.registry.set('myNumber', myNumber);

                checker = 1
            }
            else if (keyCode === 'Digit5') {
                // this.add.sprite(0, 0, 'player5').setName('player');
                myNumber = 5;
                this.registry.set('myNumber', myNumber);

                checker = 1
            }
            else if (keyCode === 'Digit6') {
                // this.add.sprite(0, 0, 'player6').setName('player');
                myNumber = 6;
                this.registry.set('myNumber', myNumber);

                checker = 1
            }
            else if (keyCode === 'Digit7') {
                //this.add.sprite(0, 0, 'player7').setName('player');
                myNumber = 7;
                this.registry.set('myNumber', myNumber);

                checker = 1
            }
            else if (keyCode === 'Digit8') {
                //this.add.sprite(0, 0, 'player8').setName('player');
                myNumber = 8;
                this.registry.set('myNumber', myNumber);

                checker = 1
            }
            else if (keyCode === 'Digit9') {
                //this.add.sprite(0, 0, 'player9').setName('player');
                myNumber = 9;
                this.registry.set('myNumber', myNumber);

                checker = 1
            }

        }, this);

    }

    update() {

        if (checker == 1) {
            setTimeout(() => {
                this.scene.launch('Load1')
                this.scene.start('NHANVAT')
            }, 1000);

        }
        // Cập nhật
    }
}





