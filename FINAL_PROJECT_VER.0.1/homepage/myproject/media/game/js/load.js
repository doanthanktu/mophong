export default class load extends Phaser.Scene {
    constructor() {
        super({ key: 'load' });
        
    }

    preload() {
       


    }

    create() {
        this.scene.stop('ADMIN')
        this.scene.stop('map8')
        this.scene.stop('WIN')
        this.scene.stop('Load_index')
        this.scene.launch('start')// launch qua thằng start

    }

    update() {
        


    }
}



