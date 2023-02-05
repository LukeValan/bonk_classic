function Circle(x,y,r,staticity, team) {
    
    var options = {
      friction: 0,
      restitution: 1.5,
      isStatic: staticity
    };
    
    this.body = Bodies.circle(x,y,r, options);
   
      this.r = r;
      this.rope = 100
  
      World.add(world, this.body);
  
      this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
  
        push();
        strokeWeight(this.r / 5)
        stroke(100);
        textAlign()
        fill(100,110,120);
        if (team == "red"){
          
          
          fill(250,0,0);
        }else if (team == "blue") {
          

          fill(0,0,250);
        }else {
          fill(100,110,120);

        }
        translate(pos.x, pos.y);
        rectMode(CENTER);
        ellipse(0, 0, this.r*2);
        textAlign(CENTER)
        textSize(15)
        fill(250);
        if (team != "none"){text(Math.round(this.rope), 0,0+5)}
       
        
        //line(0,0, this.r, 0)
        pop();
  
      };
      
      this.isOffScreen = function () {
        
        let pos = this.body.position
        
        if (pos.y > height + 100 || pos.y < -100 || pos.x > width + 100 || pos.x < -100) {
          return(true)
        }else {
          return (false)
        }

      }

      this.removeThis = function () {
        World.remove(world, this.body);
      }

      this.move = function (direction, amount) {
        if (direction == "right") {
          this.body.force.x += amount
        }else if (direction == "left") {
         this.body.force.x -= amount
        }
        
        if (direction == "up") {
          this.body.force.y -= amount
        }else if (direction == "down") {
         this.body.force.y += amount
        }
      }

  };