
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,bottom1, bottom2, bottom3, middle1, middle2, up1, polygon, polygon_image, slingShot1;

function preload(){
	polygon_image = loadImage("polygon.png");	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground(440,460,200,20);
	bottom1 = new Box(400,430,40,40);
	bottom2 = new Box(440,430,40,40);
	bottom3 = new Box(480,430,40,40);
	middle1 = new Box(420,390,40,40);
	middle2 = new Box(460,390,40,40);
	up1 = new Box(440,350,40,40);
	polygon = Bodies.circle(20,460,20,{isStatic: true});
	World.add(world,polygon);
	//slingShot1 = new Slingshot(polygon.Body,{X :100,Y :200});
	



	Engine.run(engine);
  
}


function draw() {
  background(0);

  ground1.display();
  bottom1.display();
  bottom2.display();
  bottom3.display();
  middle1.display();
  middle2.display();
  up1.display();
  //slingShot1.display();

  imageMode(CENTER);
  image(polygon_image, polygon.position.x, polygon.position.y, 40, 40);
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    Slingshot.fly();
}



