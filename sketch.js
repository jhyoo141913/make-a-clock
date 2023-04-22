function setup() {
  createCanvas(800, 800);
}

function draw() {
  h = hour();
  m = minute();
  s = second();
  print(h,m,s)
  
  background(0);
  ellipse(400,400,500)
  
  
  my_rect(400,400,90,15,30*h-90,color(255,0,0))
  my_rect(400,400,150,10,6*m-90,color(0,255,0))
  my_rect(400,400,200,5,6*s-90,color(0,0,255))
}

function my_rect(x,y,w,h,d,c){
  push();
  fill(c)
  translate(x,y);
  rotate(radians(d));
  rect(0,-h/2,w,h);
  pop();
  ellipse(400,400,30)
  
}