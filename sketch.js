var database;
var gState=0;
var pCount;
var form,player,game;

function setup(){
  database = firebase.database();
  createCanvas(400,400);
  game=new Game();
  game.getState();
  game.start();
}

function draw(){
  
}

