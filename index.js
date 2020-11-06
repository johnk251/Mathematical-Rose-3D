

//defining and initialising all global variable 

let angle=0;
let hue=0;
//k is an integer,2k petals if k is even
//k petals if k is odd.
//experiment with different k values
let k=4/5;
//defining the  Cartesian coordinate
let x;
let y;

//arrays to store  cartesian coordinates
let arrx=[];
let arry=[];




function setup(){
  
  createCanvas(1500,1000,WEBGL);

//changing the angles from radian to degrees
//not necessary just comfortable working with degree
  angleMode(DEGREES)
  
//set background color in default RGB mode
  background(60,100,105);
 //changing colormode to HSB 
  colorMode(HSB)

  
}

function draw(){
//rotating the whole draw
//experiment with rotating different dimensions
  //rotateY(hue)
  //uncomment to experiment
 // rotateX(hue)
  //rotateZ(hue)
  
//polar coordinate radii
 
let  r1=cos(k*angle);
let  r2=sin(k*angle);

//converting polar to cartesian
 x=cos(k*angle)*cos(angle)*width*0.25;
 y=cos(k*angle)*sin(angle)*height*0.25;

 //pushing each x and y values 

 arrx.push(x);
 arry.push(y);


 
 

//setting the stroke weight
//experiment with different weights
strokeWeight(1); 

//connecting each points to the next set of points 
//can also using builtin beginShape() and endShape()
 for(let i=0;i<arrx.length;i++){
 //setting stroke color according to angle 
stroke(hue,100,100);

line(arrx[i],arry[i],arrx[i+1],arry[i+1])


 }
 

 //experimenting with different shapes
 strokeWeight(1); 
 stroke(hue,100,100)
 noFill()
 push()
 translate(x,y)
 //cone(50)
 //sphere(50)
 //box(50)
pop()

//increment angles values each frame
//here you can experiment with different increment value
angle++; 
hue++;


//remove unused values in the arrays to free up memory
if (arrx.length>4){
  arrx.shift();
  arry.shift(); }
  
 
  


//reset the color hue to 0  
if(hue>=360){
  hue=0
}

// save images after 1000 frames
//can also comment out if statement to save image each frame
if (frameCount%1000==0){
//save(`rose${frameCount}.jpg`)

}}