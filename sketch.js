var database;
var game;
var gameState = 0;
var form,player;
var pcount=0;

var allplayers;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");

    if(pcount===4){
        game.update(1)
    }
     if(gameState===1){
        clear ()
        game.play()
    }
    
}


//now < 1623868200000",  // 2021-6-17
//".write": "now < 1623868200000",  // 2021-6-17
//now < 1627410600000

