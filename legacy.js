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
    window.onload = () => { pattern2() }
    // parttern 2
    
    const pattern2 = () => {
            // Initialise an empty canvas and place it on the page
            const patternCanvas = document.createElement("canvas");
            const context = patternCanvas.getContext("2d");
            patternCanvas.width = 320;
            patternCanvas.height = 320;
            
            // unappend the pattern canvas to make it "hidden", but it is used as a repeat in the second canvas
            // document.body.appendChild(patternCanvas);
      
            // Fill the canvas with a black background to show where it is
       context.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
            
         context.beginPath();
        context.moveTo(0, 120);
        context.lineTo(80, 200);
        context.lineTo(80, 280);
        context.lineTo(120, 320);
        context.lineTo(200, 240);
             context.lineTo(280, 240);
             context.lineTo(320, 200);
            context.lineTo(240, 120);
            context.lineTo(240, 40);
            context.lineTo(200, 0);
            context.lineTo(120, 80);
            context.lineTo(40, 80);
            context.lineTo(0, 120);
        
            context.moveTo(0, 200);
            context.lineTo(40, 240);
            context.lineTo(120, 240);
            context.lineTo(200, 320);
            context.lineTo(240, 280);
            context.lineTo(240, 200);
            context.lineTo(320, 120);
            context.lineTo(280, 80);
            context.lineTo(200, 80);
            context.lineTo(120, 0);
            context.lineTo(80, 40);
            context.lineTo(80, 120);
            context.lineTo(0, 200);
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
      patternCanvas.width = 320;
      patternCanvas.height = 320;
      
      // unappend the pattern canvas to make it "hidden", but it is used as a repeat in the second canvas
      // document.body.appendChild(patternCanvas);
    
      // Fill the canvas with a black background to show where it is
    context.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
    
    
      // one quarter
    context.beginPath();
    
      context.lineTo(102.5, 160)
      context.lineTo(120, 142.5)
      context.lineTo(120, 16)
      context.lineTo(140, 16)
      context.lineTo(160, 0)
      
      
      context.moveTo(65, 0)
      context.lineTo(23.5, 85)
      context.lineTo(120, 177.5)
      context.lineTo(120, 304)
       context.lineTo(140, 304)
    context.lineTo(160, 320)
      context.lineTo(180, 304)
      context.lineTo(200, 304)
      context.lineTo(200, 177.5)
      context.lineTo(291.5, 88.5)
      context.lineTo(255, 0)
      
      context.moveTo(0, 65)
      context.lineTo(85, 23.5)
      context.lineTo(177.5, 120)
      context.lineTo(304, 120)
      context.lineTo(305,140)
      context.lineTo(320, 160)
      context.lineTo(304,180)
      context.lineTo(304, 200)
      context.lineTo(177.5, 200)
      context.lineTo(88.5, 291.5)
      context.lineTo(0, 255)
      
      context.moveTo(16, 120)
      context.lineTo(16, 140)
      context.lineTo(0, 160)
      context.moveTo(16,120)
      context.lineTo(142.5, 120)
      context.lineTo(231.5, 23.5)
      context.lineTo(320, 65)
      
       context.moveTo(0, 160)
      context.lineTo(16, 180)
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
      context.lineTo(180, 16)
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
    
    const pattern4 = () => {
    
      // Initialise an empty canvas and place it on the page
      const patternCanvas = document.createElement("canvas");
      const context = patternCanvas.getContext("2d");
      patternCanvas.width = 280;
      patternCanvas.height = 280;
      
      // unappend the pattern canvas to make it "hidden", but it is used as a repeat in the second canvas
      // document.body.appendChild(patternCanvas);
    
      // Fill the canvas with a black background to show where it is
    context.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
      
    context.beginPath();
    // context.moveTo(30, 0);
    // context.lineTo(20,10)
    // context.lineTo(20,40)
    // context.lineTo(50,70)
    // context.lineTo(20,90)
    // context.lineTo(20,130)
    // context.lineTo(30,140)
      
      context.moveTo(120,0);
      context.lineTo(160,40)
      context.lineTo(180,40)
      context.lineTo(180,240)
      context.lineTo(160,240)
      context.lineTo(120,280)
      
      context.moveTo(160,0);
      context.lineTo(120,40)
      context.lineTo(100,40)
      context.lineTo(100,240)
      context.lineTo(120,240)
      context.lineTo(160,280)
      
      // context.moveTo(110,0);
      // context.lineTo(120,10)
      // context.lineTo(120,40)
      // context.lineTo(90,70)
      // context.lineTo(120,90)
      // context.lineTo(120,130)
      // context.lineTo(110,140)
      
      context.moveTo(0,60);
      context.lineTo(20,40)
      context.lineTo(80,40)
      context.lineTo(140,100)
      context.lineTo(200,40)
      context.lineTo(260,40)
      context.lineTo(280,60)
      
      context.moveTo(0, 220);
      context.lineTo(20,240)
      context.lineTo(80,240)
      context.lineTo(140,180)
      context.lineTo(200,240)
      context.lineTo(260,240)
      context.lineTo(280,220)
      
    
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
          patternCanvas.width = 320;
          patternCanvas.height = 320;
          
          // unappend the pattern canvas to make it "hidden", but it is used as a repeat in the second canvas
          // document.body.appendChild(patternCanvas);
    
          // Fill the canvas with a black background to show where it is
     context.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
    
        
          // one quarter
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
          
          context.moveTo(142.5, 120)
          context.lineTo(177.5, 120)
           context.moveTo(142.5, 200)
          context.lineTo(177.5, 200)
          
          context.moveTo(16, 120)
          context.lineTo(0, 120)
           context.moveTo(16, 200)
          context.lineTo(0, 200)
          
          context.moveTo(355, 120)
          context.lineTo(0, 120)
           context.moveTo(355, 200)
          context.lineTo(0, 200)
          
       
          
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
     
    }
    
    
    // Create our primary canvas and fill it with the pattern
    
    
    
    
    const arrayOfFunctions = [pattern1, pattern2, pattern3, pattern4, pattern5]
    
    function random(mn, mx) { 
      return Math.random() * (mx - mn) + mn; 
    } 
    
    const RandomPattern = () => {
      const oldCanvas = document.querySelector('canvas')
      oldCanvas.remove() 
    
      arrayOfFunctions[[Math.floor(random(1, 6))-1]]()
    }
    
    
    
    
    