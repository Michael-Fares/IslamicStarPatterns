import patterns from './utils/exportPatterns.js'

// Create our primary canvas and fill it with the pattern
window.onload = () => { generatePattern(  options ) }

// handle pattern select
const select = document.getElementById('pattern')
const option = select.options[select.selectedIndex].value


// hard coded options object to be manipulated by DOM and passed into patern generator fuction
// except for pattern which is the value of the select to start out
// need to fully MVC this
let options = {
  scale: 5,
  lineWidth: 2,
  background: '#000000',
  lineColor: '#ffffff',
  pattern: patterns[option]
}

const controls = Object.keys(options)
controls.forEach(control => {
  const el = document.getElementById(control)

  el.addEventListener('change', (e) => {
    console.log(el, e.target.value)
    control === 'pattern' ? options[control] = patterns[e.target.value] : options[control] = e.target.value
    // remove the old canvas before a re-draw
    const oldCanvas = document.querySelector('canvas')
      if(oldCanvas) oldCanvas.remove() 
    generatePattern(options)
  })
})

// generate pattern function:


function generatePattern(options) {
  // destructure the options object
  const { 
    scale,
    lineWidth, 
    background,
    lineColor,
    pattern 
  } = options;

  // Initialise an empty canvas and place it on the page
  const tile = document.createElement("canvas");
  const context = tile.getContext("2d");
  // scale the tile to the side length of the pattern
  tile.width = pattern.tileSideLength * scale;
  tile.height = pattern.tileSideLength * scale;
  // fill the tile with the specified background color
  context.fillStyle = background;           
    // Fill the canvas with a black background to show where it is
  context.fillRect(0, 0, tile.width, tile.height);
  // being the drawing path      
  context.beginPath();

  // map over the coords of the pattern to draw it on the tile

  pattern.coords.forEach(point => {
    const { isMove, x, y } = point
    let x_final = x * scale
    let y_final = y * scale
    isMove ? context.moveTo(x_final,y_final) : context.lineTo(x_final,y_final)
  })

          


    // set lineWidth to options.lineWidth
    context.lineWidth = lineWidth;
    // set line color to options.lineColor
    context.strokeStyle = lineColor;
    // draw
    context.stroke();
  
  const mainCanvas = document.createElement('canvas');
  const ctx = mainCanvas.getContext('2d');
  // might include these in options later
  mainCanvas.width = window.innerWidth;
  mainCanvas.height = 1600;      
  const tesslation = ctx.createPattern(tile, 'repeat');
  ctx.fillStyle = tesslation;
  ctx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
  
  // Add our primary canvas to the webpage
  document.body.appendChild(mainCanvas);
};












