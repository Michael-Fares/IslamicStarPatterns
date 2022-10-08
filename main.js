import PATTERN_SIMPLE from './patterns/pattern1.js';

// Create our primary canvas and fill it with the pattern
window.onload = () => { generatePattern(  options ) }

// hard coded options object to be manipulated by DOM and passed into patern generator fuction
let options = {
  scale: 5,
  background: '#000000',
  lineColor: '#ffffff',
  lineWidth: 2,
  pattern: PATTERN_SIMPLE
}

const generatePattern = ( options  ) => {
  // destructure the options object
  const { 
    scale, 
    background,
    lineColor,
    lineWidth,
    pattern 
  } = options;
        // Initialise an empty canvas and place it on the page
        const tile = document.createElement("canvas");
        const context = tile.getContext("2d");
        context.fillStyle = background;
        tile.width = 32;
        tile.height = 32;
        
        
   
        // Fill the canvas with a black background to show where it is
   context.fillRect(0, 0, tile.width, tile.height);
        
context.beginPath();

for(let point of pattern) {
  // generate the pattern
}

context.moveTo(0, 12);
context.lineTo(8, 20);
context.lineTo(8, 28);
context.lineTo(12, 32);
context.lineTo(20, 24);
context.lineTo(28, 24);
context.lineTo(32, 20);
context.lineTo(24, 12);
context.lineTo(24, 4);
context.lineTo(20, 0);
context.lineTo(12, 8);
context.lineTo(4, 8);
context.lineTo(0, 12);

context.moveTo(0, 20);
context.lineTo(4, 24);
context.lineTo(12, 24);
context.lineTo(20, 32);
context.lineTo(24, 28);
context.lineTo(24, 20);
context.lineTo(32, 12);
context.lineTo(28, 8);
context.lineTo(20, 8);
context.lineTo(12, 0);
context.lineTo(8, 4);
context.lineTo(8, 12);
context.lineTo(0, 20);

    context.lineWidth = lineWidth;
    // set line color
    context.strokeStyle = lineColor;
    context.stroke();
        const mainCanvas = document.createElement('canvas');
  const ctx = mainCanvas.getContext('2d');
  mainCanvas.width = 1600;
  mainCanvas.height = 1600;      
  const tesslation = ctx.createPattern(tile, 'repeat');
  ctx.fillStyle = tesslation;
  ctx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
  
  // Add our primary canvas to the webpage
  document.body.appendChild(mainCanvas);
};















