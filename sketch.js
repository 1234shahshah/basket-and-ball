
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=createSprite(50,650)
ball = new Paper(50,650)
var ground = createSprite(400,700,800,30)
var side1 = createSprite(700,650,20,150)
var side2 = createSprite(550,650,20,150)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  function keyPressed
{
if (keyCode === UP_ARROW)
{
	Matter.Body.applyForce(ball.body, ball.body.position, {x:85,y:-85})


}
	  
	  }
	
  drawSprites();
 
	}



