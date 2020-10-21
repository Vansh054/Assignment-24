
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall, paperBallS, boxP1, boxP2, boxP3, ground;

function setup() {
	createCanvas(1200, 400);
    background(255,255,255)

	engine = Engine.create();
	world = engine.world;
	
	var ball_options ={
		isStatic:false,
		restitution:0.3,
		friction:1,
		density:10
	}

	paperBall = Bodies.circle(100,300,25,ball_options);
	boxP1 = new Box(1000,300,200,20)
	boxP2 = new Box(900,250,20,100)
    boxP3 = new Box(1100,250,20,100)
	
	ground = new Ground(600,325)

	World.add(world,boxP1)
	World.add(world,boxP2)
	World.add(world,boxP3)
	World.add(world,ground)
	World.add(world,paperBall)

	console.log(paperBall)

  
}


function draw() {
  
  background("black");

  Engine.update(engine)
  
  rectMode(CENTER);
  boxP1.display();
  boxP2.display();
  boxP3.display();
  ground.display();

  var angle = paperBall.angle
  push();
  ellipseMode(CENTER);
  rotate(angle)
  fill("pink")
  ellipse(paperBall.position.x,paperBall.position.y,25)
  pop();

  keyPressed();

  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW && paperBall.position.x < 350){
	Matter.Body.applyForce(paperBall, paperBall.position,{x:85,y:-50})
	} 
	if (paperBall.position.x > 350)
	{
	Matter.Body.applyForce(paperBall, paperBall.position,{x:2,y:10})	
	}
	
	if (paperBall.position.x > 900 && paperBall.position.x < 1125)
	{
	if (paperBall.position.y > 263.5 && paperBall.position.y < 272.5)
	{	
	Matter.Body.setStatic(paperBall, true)	
	}
	}
}


