## P5 JS Library 
used for creative coding. install P5.vscode extension. To create a project just type this in the top bar `>p5`

### Creating random circles with no overlap 
- circle packing algorithm 
```bash
var circles = [];

function setup(){
    //creating canvas here of 640 x 360 dimension 
    createCanvas(640, 360);
    
    //generating 25 circles 
    for (var i=0; i<25; i++){
        var x = random(width);
        var y = random(height);
        //radius of circle
        var r = 48;
        var circle = {
            //3 variables 
            x: random(width),
            y: random(height),
            r: 36
        }

        
        //you can identify if 2 circles are overlapping by identifying the distance between the radii of both circles lts call it r1 and r2

        //if r1+r2 < actual diameter then they are overlapping
        var overlapping = false;
        for(var j=0; j<circles.length; j++){

        var other = circles[j];
        var d = dist(circle.x, circle.y, other.x, other.y);
        if(d < circle.r + other.r){
          //they are overlapping, thats why we need to break out of the loop 
          overlapping = true;
          break;
        }
        }

        if(!overlapping){
        //we pushed this object in the array 
        circles.push(circle);
        }
    }

    //draw from each element of the array 
    for(var i = 0; i<circles.length; i++){
        fill(255, 0, 150, 100);
        //The noStroke() function is an inbuilt function in p5. js which is used to remove the outline which is used to draw lines and borders around shapes
        noStroke();
        ellipse(circles[i].x, circles[i].y, circles[i].r*2, circles[i].r*2);
    }
    }
    
```