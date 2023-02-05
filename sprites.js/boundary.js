function Boundary(x, y, w, h, a, t) {

  var options = {
    friction: 0,
    restitution: 0,
    isStatic: true,
    angle: a
  }

  this.body = Bodies.rectangle(x, y, w, h, options);
  //this.body.angle = PI / 4;

  this.w = w;
  this.h = h;

  if (t == "k") {}else {n++}

  World.add(world, this.body);

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    strokeWeight(5)
    noStroke(200)
    if (t == "k"){
      fill(0)
    }else {
      fill(160)
      
    }

    translate(pos.x, pos.y);
    rotate((angle));
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();

  };

};