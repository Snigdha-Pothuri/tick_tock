var hr,min,sec 
var hrangle,minagle,secangle

function setup() {
  createCanvas(800,400);
  angleMode (DEGREES);

}

function draw() {
  background(255,255,255);  
  translate(200,200); 
  rotate(-90) 
  hr = hour();
  sec = second();
  min = minute(); 

  secangle = map(sec,0,60,0,360);
  minangle = map(min,0,60,0,360); 
  hrangle = map(hr%12,0,12,0,360); 

  push() 
  rotate(secangle);
  stroke(255,0,0) 
  strokeWeight(7); 
  line(0,0,100,0);
  pop(); 

  push() 
  rotate(minangle);
  stroke(0,255,0) 
  strokeWeight(7); 
  line(0,0,75,0);
  pop(); 

  push() 
  rotate(hrangle);
  stroke(0,0,255) 
  strokeWeight(7); 
  line(0,0,35,0);
  pop();  

  push() 
  rotate(secangle);
  stroke(255,0,0) 
  strokeWeight(7); 
  line(0,0,35,0);
  pop();

  stroke(255,255,0) 
  point(0,0)  
  strokeWeight(10);
  noFill(); 
  stroke(255,0,0) 
  arc(0,0,300,300,0,secangle) 

  stroke(255,255,0) 
  point(0,0)  
  strokeWeight(10);
  noFill(); 
  stroke(255,0,0) 
  arc(0,0,300,300,0,minangle) 

  stroke(255,255,0) 
  point(0,0)  
  strokeWeight(10);
  noFill(); 
  stroke(255,0,0) 
  arc(0,0,300,300,0,hrangle)
}   