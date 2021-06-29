var path,boy;
var pathImg,boyImg;



function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(351,400);

path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale = 1.2;
path.x = 170;

boy = createSprite(20,20);
boy.addAnimation("running",boyImg);
boy.scale=0.08;
boy.y = 350;


  


}

function draw() {
background("blue");
  
boy.x = World.mouseX;
  
edges= createEdgeSprites();
boy.collide(edges);

  //code to reset the background
  if(path.y > 400 ){
    path.y = 0;
  }
  
  drawSprites();
   
  }
  































  