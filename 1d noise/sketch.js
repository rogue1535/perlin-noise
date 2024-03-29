var w = 800;
var h = 400;
var angle =0;
function setup() {
  createCanvas(w,h);
  background(20);
}




var t = 50
var mov = 0
var start = 0
var inc = 0.00
function draw() {
  background(20)
  

  noFill()
  strokeWeight(2);
  var inc = map(t,0.00,1000.00,0.002,0.2);
  
  var yoff = start
  frameRate(60)
  
  beginShape();
  for (let x = 0; x < width; x++) {
    stroke(220);
    var y = noise(yoff)*height;
    
    vertex(x,y);
    yoff += inc;
  }
  endShape()
  
  
  start += inc;

  var myVariable = inc;
  document.getElementById("myInput").value = myVariable;
  var slider = document.getElementById("myRange");
  t = float(slider.value)
}
