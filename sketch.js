
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	tmage = loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);

	
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Tree = new tree(600,650,40,40);
	ground = new Ground(width/2, 675, width, 10 , {isStatic:true});
	stone = new Stone(400,300,70);
	boy = createSprite(200,600,20,130);
	boy.addImage = ("tt",tmage);
	World.add(world, ground);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Tree.display();
  ground.display();
  stone.display();
  drawSprites();
 
}



