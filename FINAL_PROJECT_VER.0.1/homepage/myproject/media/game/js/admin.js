let admin = true
export default class ADMIN extends Phaser.Scene {
    constructor() {
        super({ key: 'ADMIN' });
    }

    preload() {


    }

    create() {
        this.admin = true
        this.registry.set('admin', admin);
        this.scene.launch('load')
    }

    update() {


    }
}



