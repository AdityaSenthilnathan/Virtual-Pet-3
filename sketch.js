var dogIMG, dogIMG2, dog, foodS, foodStock, dataBase, foodObj;
var feedTime = 0;
var feedT = 0;

var hour = 0;
var hourmin = 0;
var garden, washroom, bedroom;
var readState;
var CgameState;
var gameS = "";
var h;
var min; 

//var bark;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const db = firebase.database();
foodS = 0;
function preload() {
  //  soundFormats('mp3', 'ogg');
  dogIMG = loadImage("images/Dog.png");
  dogIMG2 = loadImage("images/happy dog.png");
  garden = loadImage("images/Garden.png");
  washroom = loadImage("images/Wash Room.png");
  bedroom = loadImage("images/Bed Room.png");
  //bark = loadSound("images/chasecog.mp3")


  //dataBase = firebase.database();
  //db = firebase.database().ref();
}

function setup() {
  createCanvas(1000, 500);
  foodObj = new Food(10, 200);
  dog = createSprite(650, 250, 10, 10);
  dog.addImage(dogIMG);
  dog.scale = .1;
  textSize(30);
  fill("green");
  stroke(10);
  feed = createButton("Feed The Dog");
  feed.position(800, 75);

  restock = createButton("Restock your food");
  restock.position(920, 75);
  feedTime = firebase.database().ref("FeedTime");
  feedTime.on("value", readTime);

  foodStock = firebase.database().ref("Food");
  foodStock.on("value", readStock);

  readState = firebase.database().ref("gameState");
  
  readState.on("value", function(data) {
    gameS = data.val();
  });
  
  //database = firebase.database();

}


function draw() {

  //foodObj.bedroom();
  background(46, 139, 87);
  drawSprites();
  gettime();

  //feedT = feedTime.val();

  feed.mousePressed(feedDog);
  restock.mousePressed(restockFood);

  foodObj.display();


  var f = feedT - 12;
  text("Food Avalible: " + foodS, 20, 55);


  if (feedT >= 12) {
    text("Last Fed : " + f + " PM", 20, 85);

  } else if (feedT == 0) {
    text("Last Fed : 12 AM", 20, 85);

  } else {
    text("Last Fed : " + feedT + " AM", 20, 85);

  }
  if (gameS === "Hungry"){
    feed.show();
     restock.show();
  }
if (gameS != "Hungry"){
  feed.hide();
  restock.hide();
  if (hour === (feedT + 1)) {
    update("Playing");
    foodObj.garden();
  }
  else if (hour === (feedT + 2)) {
    update("Sleeping");
    foodObj.bedroom();

  } else if (hour > (feedT + 2) && hour < (feedT + 4)) {
    update("Bathing");
    foodObj.washroom();
  }
  else if  (hour >= (feedT + 4)){
    update("Hungry");
    foodObj.display();
  }
}

   /*
 if (min%4 === 0) {
    update("Playing");
    foodObj.garden();
  }
  else if (min%4 === 1) {
    update("Sleeping");
    foodObj.bedroom();

  } else if (min%4 === 2) {
    update("Bathing");
    foodObj.washroom();
  }
  else {
    update("Hungry");
    foodObj.display();
  }
  */
   
}

function readStock(data) {
  foodS = data.val();
}
function readTime(data) {
  feedT =  parseInt(data.val());
}
function restockFood() {
  dog.addImage(dogIMG);
  foodObj.updateFoodStock(foodS);
}

function feedDog() {
  update("Feed");
  // bark.play();
  feedT = hour;
  firebase.database().ref('/').update({
    FeedTime: feedT
  });

  foodObj.deductFood(foodS);
  dog.addImage(dogIMG2);
}

async function gettime() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles");
  var time = await response.json();
  var dateTime = time.datetime;
  h = dateTime.slice(14, 15);
  //hour = dateTime.slice(11, 13);
  hourmin = dateTime.slice(11, 13);
  hour = parseInt(dateTime.slice(11,13));
  
}


function update(x) {

  firebase.database().ref('/').update({
    gameState: x
  });

}

