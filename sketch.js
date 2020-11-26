
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1,rect2,rect3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(200,200,40)
    rect1=new Dustbin(width/2,650,200,20);
	rect1.shapeColor=color("red")
	rect2= new Dustbin(300,560,20,200);
	rect2.shapeColor=color("red");
	rect3= new Dustbin(500,560,20,200);
	rect3.shapeColor=color("red");
	
	

	Engine.run(engine);
  
}


function draw() {
	background(0);
  	rectMode(CENTER);
  Engine.update(engine);
  paper.display();
  
  drawSprites();
 
}



