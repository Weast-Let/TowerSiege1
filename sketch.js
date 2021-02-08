const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform1,platform2,ground;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;

function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    platform1 = new Ground(390,245,200,5);
    platform2 = new Ground(590,140,200,5);
    ground = new Ground(600,400,1200,20);

    block1 = new Box(620,120,30,40)
    block2 = new Box(590,120,30,40)
    block3 = new Box(560,120,30,40)
  
    block4 = new Box(605,80,30,40)
    block6 = new Box(575,80,30,40)

    block7 = new Box(580,40,30,40)

    block8 = new Box(330,235,30,40)
    block9 = new Box(360,235,30,40)
    block10 = new Box(390,235,30,40)
    block11 = new Box(420,235,30,40)
    block12 = new Box(450,235,30,40)

    block13 = new Box(360,195,30,40)
    block14 = new Box(390,195,30,40)
    block15 = new Box(420,195,30,40)
    
    block16 = new Box(390,155,30,40)

}

function draw() {
background("white")
Engine.update(engine);

ground.display()
platform1.display()
platform2.display()

block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
block15.display()
block16.display()

block1.display()
block2.display()
block3.display()
block4.display()
//block5.display()
block6.display()
block7.display()





}