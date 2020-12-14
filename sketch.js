var mousePos,
    pos,
    target,
    vel,
    ctx,
    rad,
    drag,
    speed;

var diam1=25;

function setup() {
  ctx = createCanvas(windowWidth, windowHeight);  

  noStroke();
  background(16, 21, 30); 
  
  mousePos = createVector(0,0);
  pos = createVector(0,0);
  target = createVector(0,0);
  vel = createVector(0,0);
  
  drag = 0.25; 
  strength = 0.10; 
  
  r = 300; 
}

function draw() {
  // clear();
  background('rgb(10, 59, 107)');  
    
  mousePos.set(mouseX, mouseY);
  target = mousePos;

  var force = p5.Vector.sub(target, pos);
  force = force.mult(strength);
  vel = vel.mult(drag);
  vel = vel.add(force);  
  pos = pos.add(vel);
  text("Goodbye Moon",40,diam1)
  textFont("Georgia")
  fill("255, 35, 255 ");
  
  ellipse(pos.x, pos.y, r);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




