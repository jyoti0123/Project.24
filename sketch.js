const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubbe,rubb,rub,ru,r,re,rebb,rebber;
var stone;
var metal
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
   
    rubbe = new Rubber(200,200,10,10)
    rubb = new Rubber(200,200,10,10)
    rub = new Rubber(200,200,10,10)
    ru = new Rubber(200,200,10,10)
    r = new Rubber(200,200,10,10)
    re = new Rubber(200,200,10,10)
    rebb = new Rubber(200,200,10,10)
    rebber = new Rubber(200,200,10,10)
    
    stone = new Stone(600,300,50,50);
    
    metal = new Metal(500,400,50,50)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    rubbe.display();
    rubb.display();
    rub.display();
    ru.display();
    r.display();
    re.display();
    rebb.display();
    rebber.display();
    
    
    plane.display();
    hammer.display();
    stone.display();
    metal.display();
 
}