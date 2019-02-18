import 'phaser';
import backgroundImg from "./assets/space3.png";
import dockerImg from "./assets/docker.png";
import particleImg from "./assets/blue.png";
import prImg from "./assets/pr.png";
import adockerImg from "./assets/a-docker.png";
import rickImg from "./assets/rick.png";


var width = window.innerWidth - 10;
var height = window.innerHeight - 10;

var config = {
    type: Phaser.AUTO,
    width: width,
    height: height,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', backgroundImg);
    this.load.image('logo', dockerImg);
    this.load.image('red', particleImg);
}

function create ()
{
    //game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    var bg = this.add.image(width / 2, height / 2, 'sky');
    //bg.displayWidth = width;
    //bg.displayHeight = height;
    bg.setDisplaySize(width, height);

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 50,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 250);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
}
