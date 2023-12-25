import SceneName from './MainScene.js'
import SceneStart from './start.js'
import GuideScene from './GuideScene.js'
import mus from './hd/hd_sound.js'
import HD1 from './hd/hd1.js'
import HD2 from './hd/hd2.js'
import HD3 from './hd/hd3.js'
import HD4 from './hd/hd4.js'
import HD5 from './hd/hd5.js'
import HD6 from './hd/hd6.js'
import HD7 from './hd/hd7.js'
import SceneMap2 from './map/map2.js'
import SceneMap3 from './map/map3.js'
import SceneMap4 from './map/map4.js'
import SceneMap8 from './map/map8.js'
import SceneMapNew1 from './map/map-new-1.js'
import SceneMapNew2 from './map/map-new-2.js'
import SceneMapNew3 from './map/map-new-3.js'
import SceneMapNew4 from './map/map-new-4.js'
import SceneMapNew5 from './map/map-new-5.js'
import SceneMapNew6 from './map/map-new-6.js'
import Load1 from './loading/load_1.js'
import Load2 from './loading/load_2.js'
import Load3 from './loading/load_3.js'
import Load4 from './loading/load_4.js'
import Load5 from './loading/load_5.js'
import Load6 from './loading/load_6.js'
import Load7 from './loading/load_7.js'
import Load8 from './loading/load_8.js'
import Load9 from './loading/load_9.js'
import Load10 from './loading/load_10.js'
import Load11 from './loading/load_11.js'
import Load_N from './loading/load_N.js'
import Load_index from './loading/load_index.js'
import CR1 from './congratulations/congra_1.js'
import CR2 from './congratulations/congra_2.js'
import CR3 from './congratulations/congra_3.js'
import CR4 from './congratulations/congra_4.js'
import CR5 from './congratulations/congra_5.js'
import CR6 from './congratulations/congra_6.js'
import CR7 from './congratulations/congra_7.js'
import CR8 from './congratulations/congra_8.js'
import CR9 from './congratulations/congra_9.js'
import CR10 from './congratulations/congra_10.js'
import CR11 from './congratulations/congra_11.js'
import WIN from './congratulations/winner.js'
import guideMap4 from './hd/guide-map4.js'
import guideMapN4 from './hd/guide-map-new-4.js'
import guideMap8 from './hd/guide-map8.js'
import DATA from './preload.js'
import NHANVAT from './player.js'
import load from './load.js'
import ADMIN from './admin.js'


var config = {
    width: 2048,
    height: 1536,
    backgroundColor: 0x000000,
    scene: [ADMIN, load, SceneStart, DATA, NHANVAT, Load1, GuideScene, mus, HD1, HD2, HD3, HD4, HD5, HD6, HD7,
        Load2, SceneName, CR1, Load3, SceneMapNew1, CR2, Load4,
        SceneMap2, CR3, Load5, SceneMapNew2, CR4, Load6,
        SceneMap3, CR5, Load7, SceneMap4, guideMap4, CR6, Load8,
        SceneMapNew3, CR7, Load9, SceneMapNew4, guideMapN4, CR8, Load10,
        SceneMapNew5, CR9, Load11, SceneMapNew6, CR10, Load_N,
        SceneMap8, guideMap8, CR11, WIN, Load_index],
    pixelArt: true,
    type: Phaser.AUTO,

    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0 }
        }
    },
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH,
        mode: Phaser.Scale.FIT,
        parent: 'phaser-game',
    }

}
var game = new Phaser.Game(config);




