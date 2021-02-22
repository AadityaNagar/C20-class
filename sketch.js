var sprite1
var sprite2



function setup() {
  createCanvas(800,400);
  sprite1=createSprite(40, 200, 50, 80);
  sprite1.velocityX=10
  sprite2=createSprite(400, 200, 80, 50);
  sprite2.velocityX=-10
  sprite1.debug=true
  sprite2.debug=true

}

function draw() {
  background("black");  
  drawSprites();
  //sprite2.x=World.mouseX
  //sprite2.y=World.mouseY
  if(sprite2.x-sprite1.x <= sprite2.width/2+sprite1.width/2 && sprite1.x-sprite2.x <= sprite1.width/2+sprite2.width/2 &&
    sprite2.y-sprite1.y <= sprite2.height/2+sprite1.height/2 && sprite1.y-sprite2.y <= sprite1.height/2+sprite2.height/2  ){
  sprite1.velocityX=-sprite1.velocityX
  sprite2.velocityX=-sprite2.velocityX


  }else{
sprite2.shapeColor="grey"
sprite1.shapeColor="grey"
  }
  
}