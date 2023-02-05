
function Box(x,y,w,h) {
    
  var options = {
    friction: 0,
    restitution: 1
  };
  
  this.body = Bodies.rectangle(x,y,w,h, options);

    this.w = w;
    this.h = h;

    World.add(world, this.body);

    this.show = function () {
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      strokeWeight(this.w / 20)
      stroke(100)
      fill(250)
      
      translate(pos.x, pos.y);
      rotate((angle));
      rectMode(CENTER);
      rect(0, 0, this.w, this.h);
      pop();

    };

    this.isOffScreen = function () {
        
      let pos = this.body.position
      
      if (pos.y > height + 100 || pos.y < -100 || pos.x > width + 100 || pos.x < -100) {
        return(true)
      }else {
        return (false)
      }

    };

    this.removeThis = function () {
      World.remove(world, this.body);
    }
    
};