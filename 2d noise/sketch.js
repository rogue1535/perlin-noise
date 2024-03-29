var w = 400;
var h = 400;
var angle =0;
function setup() {
  createCanvas(w,h);
  background(20);
}

var angle = 0;
var pix = 0
var xoff = 0
var yoff =10000
var t = 0
var t2 = 0
function draw() {
  background(20)
  var tt = map(t,0,1000,0.002,0.05);
  var tt2 = map(t2,0,1000,0.00,0.5);
  
  var x = map(noise(xoff),0,1,0,w);
  var y = map(noise(yoff),0,1,0,h);
  noStroke()
  ellipse(x,y,25,25);
 
  
  xoff += 0.00;
  xoff += tt;
  yoff += 0.00;
  yoff +=tt;


  var myVariable = tt;
  document.getElementById("myInput").value = myVariable;
  
  var slider = document.getElementById("myRange");
  t = float(slider.value)
  
}
