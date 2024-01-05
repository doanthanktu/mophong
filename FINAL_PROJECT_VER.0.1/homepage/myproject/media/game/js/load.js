export default class load extends Phaser.Scene {
    constructor() {
        super({ key: 'load' });
        
    }

    preload() {
        this.load.image('mark1', 'assets/images/mark1.png');
        this.load.image('mark2', 'assets/images/mark2.png');
       


    }

    create() {
        this.scene.stop('ADMIN')
        this.scene.stop('map8')
        this.scene.stop('WIN')
        this.scene.stop('Load_index')
        this.scene.launch('start')// launch qua thằng start {debug} => Scene

    }

    update() {
        


    }
}



