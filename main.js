/*
      Example 1: Setting up a canvas on the page
    */


  const pattern1 =() => {
   
    // Initialise an empty canvas and place it on the page
     const patternCanvas = document.createElement("canvas");
    const context = patternCanvas.getContext("2d");
    patternCanvas.width = 320;
    patternCanvas.height = 320;
    
    // unappend the pattern canvas to make it "hidden", but it is used as a repeat in the second canvas
    // document.body.appendChild(patternCanvas);

    // Fill the canvas with a black background to show where it is
context.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
  
    // draw the start pattern on the canvas
 context.beginPath();

    context.lineTo(102.5, 160)
    context.lineTo(120, 142.5)
    context.lineTo(120, 16)
    context.lineTo(160, 0)
    
    
    context.moveTo(65, 0)
    context.lineTo(23.5, 88.5)
    context.lineTo(120, 177.5)
    context.lineTo(120, 304)
    context.lineTo(160, 320)
    context.lineTo(200, 304)
    context.lineTo(200, 177.5)
    context.lineTo(291.5, 88.5)
    context.lineTo(255, 0)
    
    context.moveTo(0, 65)
    context.lineTo(88.5, 23.5)
    context.lineTo(177.5, 120)
    context.lineTo(304, 120)
    context.lineTo(320, 160)
    context.lineTo(304, 200)
    context.lineTo(177.5, 200)
    context.lineTo(88.5, 291.5)
    context.lineTo(0, 255)
    
    context.moveTo(0, 160)
    context.lineTo(16, 120)
    context.lineTo(142.5, 120)
    context.lineTo(231.5, 23.5)
    context.lineTo(320, 65)
    
     context.moveTo(0, 160)
    context.lineTo(16, 200)
    context.lineTo(142.5, 200)
    context.lineTo(231.5, 291.5)
    context.lineTo(320, 255)
    
     context.moveTo(0, 255)
    context.lineTo(88.5, 291.5)
    context.lineTo(177.5, 200)
    
    context.moveTo(65, 320)
    context.lineTo(23.5, 231.5)
    context.lineTo(120, 142.5)
    
     context.moveTo(255, 320)
    context.lineTo(291.5, 231.5)
    context.lineTo(200, 142.5)
    context.lineTo(200, 16)
    context.lineTo(160, 0)
    
 
    
context.lineWidth = 2;
// set line color
context.strokeStyle = '#808000';
context.stroke();
    const canvas2 = document.createElement('canvas');
const ctx = canvas2.getContext('2d');
canvas2.width = 1600;
canvas2.height = 1600;      
const pattern = ctx.createPattern(patternCanvas, 'repeat');
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, canvas2.width, canvas2.height);

// Add our primary canvas to the webpage
document.body.appendChild(canvas2);
  };

// Create our primary canvas and fill it with the pattern
window.onload = pattern1()
// parttern 2

const pattern2 = () => {
   const patternCanvas = document.createElement("canvas");
  const context = patternCanvas.getContext("2d");
  patternCanvas.width = 160;
  patternCanvas.height = 160;
  
  // unappend the pattern canvas to make it "hidden", but it is used as a repeat in the second canvas
  // document.body.appendChild(patternCanvas);

  // Fill the canvas with a black background to show where it is
context.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
  
context.beginPath();
context.moveTo(0, 60);
context.lineTo(40, 100);
context.lineTo(40, 140);
context.lineTo(60, 160);
context.lineTo(100, 120);
   context.lineTo(140, 120);
   context.lineTo(160, 100);
  context.lineTo(120, 60);
  context.lineTo(120, 20);
  context.lineTo(100, 0);
  context.lineTo(60, 40);
  context.lineTo(20, 40);
  context.lineTo(0, 60);

  context.moveTo(0, 100);
  context.lineTo(20, 120);
  context.lineTo(60, 120);
  context.lineTo(100, 160);
  context.lineTo(120, 140);
  context.lineTo(120, 100);
  context.lineTo(160, 60);
  context.lineTo(140, 40);
  context.lineTo(100, 40);
  context.lineTo(60, 0);
  context.lineTo(40, 20);
  context.lineTo(40, 60);
  context.lineTo(0, 100);
context.lineWidth = 2;
// set line color
context.strokeStyle = '#808000';
context.stroke();
  const canvas2 = document.createElement('canvas');
const ctx = canvas2.getContext('2d');
canvas2.width = 1600;
canvas2.height = 1600;      
const pattern = ctx.createPattern(patternCanvas, 'repeat');
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, canvas2.width, canvas2.height);

// Add our primary canvas to the webpage
document.body.appendChild(canvas2);
};

const pattern3 = () => {

  // Initialise an empty canvas and place it on the page
   const patternCanvas = document.createElement("canvas");
  const context = patternCanvas.getContext("2d");
  patternCanvas.width = 640;
  patternCanvas.height = 640;
  
  // unappend the pattern canvas to make it "hidden", but it is used as a repeat in the second canvas
  // document.body.appendChild(patternCanvas);

  // Fill the canvas with a black background to show where it is
context.fillRect(0, 0, patternCanvas.width, patternCanvas.height);

  // one quarter
context.beginPath();
context.moveTo(0, 320)
context.lineTo(32, 240)
  context.lineTo(285, 240)
  context.lineTo(320, 205)
  context.lineTo(177, 57)
  context.lineTo(0, 130)
  context.moveTo(130, 0)
  context.lineTo(57, 177)
  context.lineTo(205, 320)
  context.lineTo(240, 285)
  context.lineTo(240, 32)
  context.lineTo(320, 0)
  
  
  context.moveTo(130, 0)
  context.lineTo(57, 177)
  context.lineTo(240, 355)
  context.lineTo(240, 608)
  context.lineTo(320, 640)
  context.lineTo(400, 608)
  context.lineTo(400, 355)
  context.lineTo(583, 177)
  context.lineTo(510, 0)
  
  context.moveTo(0, 130)
  context.lineTo(177, 57)
  context.lineTo(355, 240)
  context.lineTo(608, 240)
  context.lineTo(640, 320)
  context.lineTo(608, 400)
  context.lineTo(355, 400)
  context.lineTo(177, 583)
  context.lineTo(0, 510)
  
  context.moveTo(0, 320)
  context.lineTo(32, 240)
  context.lineTo(285, 240)
  context.lineTo(463, 57)
  context.lineTo(640, 130)
  
   context.moveTo(0, 320)
  context.lineTo(32, 400)
  context.lineTo(285, 400)
  context.lineTo(463, 583)
  context.lineTo(640, 510)
  
   context.moveTo(0, 510)
  context.lineTo(177, 583)
  context.lineTo(355, 400)
  
  context.moveTo(130, 640)
  context.lineTo(57, 463)
  context.lineTo(240, 285)
  
   context.moveTo(510, 640)
  context.lineTo(583, 463)
  context.lineTo(400, 285)
  context.lineTo(400, 32)
  context.lineTo(320, 0) 
context.lineWidth = 2;
// set line color
context.strokeStyle = '#808000';
context.stroke();
  const canvas2 = document.createElement('canvas');
const ctx = canvas2.getContext('2d');
canvas2.width = 1600;
canvas2.height = 1600;      
const pattern = ctx.createPattern(patternCanvas, 'repeat');
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, canvas2.width, canvas2.height);

// Add our primary canvas to the webpage
document.body.appendChild(canvas2);
};
// Create our primary canvas and fill it with the pattern

const pattern4 = () => {

  // Initialise an empty canvas and place it on the page
   const patternCanvas = document.createElement("canvas");
  const context = patternCanvas.getContext("2d");
  patternCanvas.width = 140;
  patternCanvas.height = 140;
  
  // unappend the pattern canvas to make it "hidden", but it is used as a repeat in the second canvas
  // document.body.appendChild(patternCanvas);

  // Fill the canvas with a black background to show where it is
context.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
  
context.beginPath();
context.moveTo(30, 0);
context.lineTo(20,10)
// context.lineTo(20,40)
// context.lineTo(50,70)
// context.lineTo(20,90)
context.lineTo(20,130)
context.lineTo(30,140)
  
  context.moveTo(60,0);
  context.lineTo(80,20)
  context.lineTo(90,20)
  context.lineTo(90,120)
  context.lineTo(80,120)
  context.lineTo(60,140)
  
  context.moveTo(80,0);
  context.lineTo(60,20)
  context.lineTo(50,20)
  context.lineTo(50,120)
  context.lineTo(60,120)
  context.lineTo(80,140)
  
  context.moveTo(110,0);
  context.lineTo(120,10)
  // context.lineTo(120,40)
  // context.lineTo(90,70)
  context.lineTo(120,90)
  context.lineTo(120,130)
  context.lineTo(110,140)
  
  context.moveTo(0,30);
  context.lineTo(10,20)
  context.lineTo(40,20)
  context.lineTo(70,50)
  context.lineTo(100,20)
  context.lineTo(130,20)
  context.lineTo(140,30)
  
  context.moveTo(0, 110);
  context.lineTo(10,120)
  context.lineTo(40,120)
  context.lineTo(70,90)
  context.lineTo(100,120)
  context.lineTo(130,120)
  context.lineTo(140,110)
  

context.lineWidth = 2;
// set line color
context.strokeStyle = '#808000';
context.stroke();
  const canvas2 = document.createElement('canvas');
const ctx = canvas2.getContext('2d');
canvas2.width = 1600;
canvas2.height = 1600;      
const pattern = ctx.createPattern(patternCanvas, 'repeat');
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, canvas2.width, canvas2.height);

// Add our primary canvas to the webpage
document.body.appendChild(canvas2);
};

// Create our primary canvas and fill it with the pattern
const pattern5 = () => {

  // Initialise an empty canvas and place it on the page
   const patternCanvas = document.createElement("canvas");
  const context = patternCanvas.getContext("2d");
  patternCanvas.width = 220;
  patternCanvas.height = 220;
  
  // unappend the pattern canvas to make it "hidden", but it is used as a repeat in the second canvas
  // document.body.appendChild(patternCanvas);

  // Fill the canvas with a black background to show where it is
context.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
  
context.beginPath();

  //draw the octagonal sides
  context.moveTo(0, 40)
  context.lineTo(30,30)
  context.lineTo(40,0)
  
  context.moveTo(0, 180)
  context.lineTo(30,190)
  context.lineTo(40,220)
  
context.moveTo(180, 220)
context.lineTo(190,190)
context.lineTo(220,180)
  
  context.moveTo(220,40)
  context.lineTo(190,30)
  context.lineTo(180,0)
  
  // draww the rosette in a single stoke??
  
context.moveTo(30, 30);
context.lineTo(60,30)
context.lineTo(120,90)
context.lineTo(200,90)
context.lineTo(220,110)
  context.lineTo(200,130)
  context.lineTo(120,130)
  context.lineTo(60,190)
  context.lineTo(30,190)
  context.lineTo(30,160)
  context.lineTo(90,100)
  context.lineTo(90,20)
  context.lineTo(111,0)
  context.lineTo(130,20)
  context.lineTo(130,100)
  context.lineTo(190,160)
  context.lineTo(190,190)
  context.lineTo(160,190)
  context.lineTo(100,130)
  context.lineTo(20,130)
  context.lineTo(0,110)
  context.lineTo(20,90)
  context.lineTo(100,90)
  context.lineTo(160,30)
  context.lineTo(190,30)
  context.lineTo(190,60)
  context.lineTo(130,120)
  context.lineTo(130,200)
  context.lineTo(110,220)
  context.lineTo(90,200)
  context.lineTo(90,120)
  context.lineTo(30,60)
  context.lineTo(30,30)

// // Move to the same starting point but flip x and y coordinates    
// context.moveTo(30, 30);
// context.lineTo(30, 60)
// context.lineTo(90, 120)
// context.lineTo(90, 200)
// context.lineTo(110, 220)
  
  context.moveTo(0, 110)

  
  context.moveTo(30, 90)

  
  context.moveTo(110, 110)
 
  
  context.moveTo(190, 190)
  context.moveTo(190, 190)
  
   context.moveTo(220, 110)
 
  
   context.moveTo(110, 110)
 
  

  

context.lineWidth = 2;
// set line color
context.strokeStyle = '#808000';
context.stroke();
  const canvas2 = document.createElement('canvas');
const ctx = canvas2.getContext('2d');
canvas2.width = 1600;
canvas2.height = 1600;      
const pattern = ctx.createPattern(patternCanvas, 'repeat');
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, canvas2.width, canvas2.height);

// Add our primary canvas to the webpage
document.body.appendChild(canvas2);
};

// Create our primary canvas and fill it with the pattern




const arrayOfFunctions = [pattern1, pattern2, pattern3,pattern4, pattern5]

function random(mn, mx) { 
  return Math.random() * (mx - mn) + mn; 
} 

const RandomPattern = () => {
  const oldCanvas = document.querySelector('canvas')
  oldCanvas.remove() 

  arrayOfFunctions[[Math.floor(random(1, 5))-1]]()
}




