
var w =1000
var h = 600
var start =0
var xinc = 0.04
var yinc = 0.05
var t = 0
var tt = 1
var det = 4
var foff = 0.5
function setup() {
  createCanvas(w,h);
  background(50);
}

function draw() {
  xinc = map(t,0,1000,0.001,.3)
  pixelDensity(1);
  var fof = map(foff,0,100,0,1)
  noiseDetail(det,fof)
  var yoff = start
  loadPixels();
  for (let y = 0; y < height; y++) {
    var xoff = start
    for (let x = 0; x < width; x++) {
      
      var index = (x + y* width )*4
      var r = noise(xoff,yoff) *255;
      pixels [index+ 0] =r;
      pixels [index+ 1] =r;
      pixels [index+ 2] =r;
      pixels [index+ 3] =r; 
      xoff +=xinc
    }
    yoff += xinc
  }
  tt =xinc
  updatePixels();
  

  var myVariable = tt;
  document.getElementById("myInput").value = myVariable;
  
  var slider = document.getElementById("myRange");
  t = float(slider.value)

  var myVariable = det;
  document.getElementById("myInput2").value = myVariable;

  var slider = document.getElementById("myRange2");
  det = float(slider.value)

  var myVariable = foff;
  document.getElementById("myInput3").value = myVariable;

  var slider = document.getElementById("myRange3");
  foff = float(slider.value)
}


function myFunction() {
  start +=100
}