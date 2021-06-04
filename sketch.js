
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200, 100, 20);
	ground = new Ground(400, 500, 1600, 20);
	dustbin1 = new Dustbin(500, 480, 100, 20);
	dustbin2 = new Dustbin(560, 450, 20, 80);
	dustbin3 = new Dustbin(440, 450, 20, 80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  paper.display();
  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body, paper.body.position,{x:45,y:-45})
	}
}

