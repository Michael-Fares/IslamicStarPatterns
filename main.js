import patterns from './utils/exportPatterns.js'
import generatePattern from './utils/generators.js'

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















