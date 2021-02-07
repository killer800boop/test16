var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");


}

function setup() {
	createCanvas(800, 750);



	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	fairy.setCollider("rectangle",0,0,1080,1080)

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	box = createSprite(650,510,10,10)
	box.visible = false

	box.setCollider("rectangle",0,0,30,30)

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  star.x = starBody.position.x
  star.y = starBody.position.y
  drawSprites();

  if (star.y >500 && starBody.position.y >500) {
	Matter.Body.setStatic(starBody,true)	  
	  
  }
}

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 15 
	}
	if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x - 15 
	}
	if(keyCode === DOWN_ARROW){
		Matter.Body.setStatic(starBody,false)
	}

}
