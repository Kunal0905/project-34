//Create variables here
var dog,dogImg,hDogImg,db,food,foodStock;
var remaining;
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  hDogImg = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,300,10,5);
  dog.addImage(dogImg);
  dog.scale = 0.19;
  db = firebase.database();
  foodStock = db.ref("Food").on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(hDogImg);
  }
  drawSprites();
  textSize(20)
  fill("white")
  text("Note : Press UP_ARROW Key To Feed Drago Milk!",20,20);
  text("Food remaining : "+food,180,200);
  //add styles here

}
function readStock(data){
  food = data.val();
}
function writeStock(x){
  if(x <= 0){
    x = 0;
  }else{
    x = x-1;
  }
  //food = food - 1;
  db.ref("/").update({Food : x});
}



