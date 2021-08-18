const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var backgroundImage



function preload() {
  towerImage = loadImage("./assets/tower.png");
  backgroundImage = loadImage("assets/background.gif")
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  var angle = -PI/4
  ground = new Ground(0, height - 1, width * 2, 1);
  //tower = new Tower(150, 350, 160, 310);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Canon(150, 110, 100, 50, angle)
  console.log(tower.body.position.x);

}

function draw() {
  background(189);
  image(backgroundImage, 0, 0, 1200, 600)
  Engine.update(engine);

  ground.display();
  
  tower.display();
  cannon.display();

  
 
}
