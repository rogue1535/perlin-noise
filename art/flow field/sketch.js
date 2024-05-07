var points = []
var angle
var time=0

var rotationspeed 
var RSslider

var ang = 720

var Alph
var Aslider


var strk = 30
var Sslider

var density = 30
var Dslider

var ndetail = 1

var NDslider
var space

var r
var g
var b
var adv =0

var toph = document.getElementById('modifiers')
var tophh = toph.offsetHeight
var to

var tt = 0

function newp() {
  for (let x = 0; x < width; x+= space) {
    for (let y = 0; y < height; y+= space) {
      var p = createVector(x + random(-10,10),y + random(-10,10))
      points.push(p)
    }
    
  }
}

function reset() {
  time = 0
  noiseSeed(adv)
  adv+=10
  noiseDetail(ndetail)
  points = []
  space = width / density
  background(25)
  newp()
}




function setup() {
  
  createCanvas(windowWidth-5, windowHeight-tophh-5);
  //createCanvas(300, 300);
  
  
  angleMode(DEGREES)
  
  reset();
}

function draw() {
  var RSslider = document.getElementById("rotationspeed");
  rotationspeed = map(float(RSslider.value),0,100,0.001,0.02)

  var Aslider = document.getElementById("alpha");
  Alph = float(Aslider.value)

  var Sslider = document.getElementById("stroke");
  strk = map(float(Sslider.value),0,200,0,20)

  var Dslider = document.getElementById("density");
  density = int(Dslider.value)

  var NDslider = document.getElementById("ndetail");
  ndetail = int(NDslider.value)

  var ANslider = document.getElementById("angle");
  ang = map(float(ANslider.value),0,4,360,1800)

  noStroke()
  //var inc = map(t,0.000,1000.00,0.002,0.2);
      
      
  for (var i = 0; i < points.length; i++){
        
  //var r = map(points[i].x, 0 , width,0,255)
  //var g = map(points[i].y, 0 , width,0,255)
  //var b = map(points[i].x, 0 , width,255,0)
  
  //var r = random(0 , 255)
  //var g = random(0,80)
  //var b = random(0,255)
  //var r = map(points[i].x + random(-100, +100), 0+100 , width-100,0,255)
  //var g = map(points[i].y + random(-100, +100) , 0+100 , width-100,0,255)
  //var b = map(points[i].x+ random(-100, +100) , 0+100 , width-100,255,0)
      
  if (0<points[i].x && points[i].x<width && 0<points[i].y && points[i].y<height) {
    flow(points[i])
    }
    
  }
      
  time +=0.1
  
  tt +=0.1
  
  if (tt >70 ){
    newp()
    tt=0
  }
}

function flow(point){
  r = Math.round(map(point.x, 0 , width,50,255))
  g = Math.round(map(point.y, 0 , height,50,255))
  b = Math.round(map(point.x, 0 , width,255,50))
  fill(r ,g ,b,Alph+time)

  angle = map(noise(point.x * rotationspeed, point.y * rotationspeed), 0,1,0,ang)

  point.add(createVector(cos(angle), sin(angle)))
  ellipse(point.x, point.y, strk)

  


}







function mouseClicked() {
  console.log(points[30])
  reset()
  //if (mstop == true) {
    //mstop = !mstop
    //noLoop()
  //} else {
  //  mstop = !mstop
  //  loop()
 // }
}



