import Phaser from "phaser";


var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

const game = new Phaser.Game(config);

var red = 0xff0000;
var blue = 0x0000ff;
var green = 0x00ff00;
var yellow = 0xffff00;
var orange = 0xff8000;
var white = 0xffffff;

function preload() {

}

function create() {
    var offset = 50;
    var offsetf = 0;

    for (var f = 1; f <= 6; f++) {
        for (var x = 1; x <= 3; x++) {
            for (var y = 1; y <= 3; y++) {
                this.add.rectangle((x * offset) + offsetf, y * offset, offset-5, offset-5, color(f));
            }
        }
        offsetf = offsetf + (offset * 3) + 10;
    }
}

function color(face) {
    if(face == 1){
        return red;
    }
    else if(face == 2){
        return blue;
    }
    else if(face == 3){
        return green;
    }
    else if(face == 4){
        return yellow;
    }
    else if(face == 5){
        return orange;
    }
    else if(face == 6){
        return white;
    }
}

