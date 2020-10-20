//Create variables here
var petImg, x;
var database, position;
function preload()
{
  //load images here
  petImg = loadImage("dogimg.png")
}

function setup() {
	createCanvas(800, 700);
  
  database = firebase.database();
  var petposition = database.ref('pet/position');
  petposition.on("value",readposition,showerror)
}


function draw() {  

  if(keyDown(LEFT_ARROW)){
    readposition(-1,0);
}
else if(keyDown(RIGHT_ARROW)){
   readposition(1,0);
}
else if(keyDown(UP_ARROW)){
   readposition(0,-1);
}
else if(keyDown(DOWN_ARROW)){
    readposition(0,+1);
}

imageMode(CENTER);
  image(petImg, 130, 350, 60, 60);
 

  drawSprites();
  //add styles here

}

function readposition(data) {
  position = data.val();
  petImg.x = position.x;
  petImg.y = position.y;
}

function showerror()  {

}

function writeposition(x,y) {
database.ref('pet/position').set(
   {
       'x':position.x+x,
       'y':position.y+y
   }
)
}


