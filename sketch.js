const World= Matter.World;
const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const body= Matter.body;


var base1;
var divider1, divider2, divider3, divider4, divider5, divider6,
divider7, divider8, divider9;
var plinko1;
var particle1;

var dividers= [];
var plinkos= [];
var particle= [];


function preload() {



}

function setup() {
  createCanvas(800,600);
  engine= Engine.create();
  world= engine.world;

  base1= new ground(400, 590, 800, 15);

  for(var i= 0; i<9; i++) {
      dividers.push(new divider(i*100, 485, 15, 200));
  }


  for(var j= 0; j < 11; j++) {

    plinkos.push(new plinko(j*75, 50));
  }

  for(var j= 0; j < 11; j++) {

    plinkos.push(new plinko(j*75+40, 150));
  }

  for(var j= 0; j < 11; j++) {

    plinkos.push(new plinko(j*75, 250));
  }

Engine.run(engine);


  

  
}

function draw() {
  background(0);
  
  base1.display();
  for(var i= 0; i<9; i++) {
    dividers[i].display();
}


if(frameCount%60===0) {
particle.push(new particles(random(100, 700), 0));

}

for(var j= 0; j<particle.length; j++) {

  particle[j].display();
}

for(var j= 0; j<11; j++) {
  plinkos[j].display();
}

for(var j= 10; j<21; j++) {
  plinkos[j].display();
}
  
for(var j= 21; j<33; j++) {
  plinkos[j].display();
}
}