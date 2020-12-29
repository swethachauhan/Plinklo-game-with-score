const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;

var particles=[];
var pinklo=[];
var divisions=[];
var divisionHeight= 300;
var world,engine;
var score=0;
var particle,turn=0;
var gameState="play";
function setup() {
  createCanvas(480,800);

engine=Engine.create();
world=engine.world;

  ground=new Ground(240,790,480,20);
  for(var d=0;d<=width;d=d+80){
    divisions.push(new Ground(d,height-divisionHeight/2,10,divisionHeight));
  }

  for(var p=15;p<=width;p=p+50){
    pinklo.push(new Pinklo(p,75));
    pinklo.push(new Pinklo(p+25,175));
    pinklo.push(new Pinklo(p,275));
    pinklo.push(new Pinklo(p+25,375));
  }
}

function draw() {
  background(0);  
  text("Score : "+score,390,50);
  Engine.update(engine);

  // if(frameCount%90===0){
  //   particles.push(new Particle(random(230,250),10,10))
  // }
  ground.display();

  
  for(var d=0;d<divisions.length;d++){
    divisions[d].display();
  }
  for(var p=0;p<pinklo.length;p++){
    pinklo[p].display();
  }

  // for(var i=0;i<particles.length;i++){
  //   particles[i].display();
  // }

  if(particle!==undefined && particle!==null){
    particle.display();

    if(particle.body.position.y>760){
      if(particle.body.position.x<200){
        score=score+500 ;
        particle=null;
      }else if(particle.body.position.x>200||particle.body.position.x<600){
        score=score+500 ;
        particle=null;
      }
      if(turn>=5)gameState="end";
    }
  }

  if(gameState==="end"){
    textSize(30);
    text("Game Over",200,300);
  }
  
}
function mousePressed(){
  if(gameState!=="end"){

    turn++;
    particle=new Particle(mouseX,10,10);
  }

}