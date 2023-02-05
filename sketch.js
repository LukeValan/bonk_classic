//"use strict";

// Short Cuts
var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Constraint = Matter.Constraint;
var Mouse = Matter.Mouse;
var MouseConstraint = Matter.MouseConstraint;

// World Requirements
var world;
var engine;
let mConstraint;

// Creating Bodies
var Boxes = [];
var Circles = [];
var Boundarys = [];
var costraints1 = [];
var costraints2 = [];
var grabs = [];
let n = 0;

let player;
let player2;
let allo = 1;
let allo2 = 1;
let r = true;
let r2 = true;
let done = true;
let done2 = true;

// Sub Physical
let playerMoveX = 0;
let playerMoveY = 0

function setup() {

  // Setting The World

  var cnv = createCanvas(1200, 800);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  engine = Engine.create();
  world = engine.world;
  //var canvasMouse = Mouse.create (canvas.elt)
  //canvasMouse.pixelRatio = pixelDensity();

  //var options = { mouse: canvasMouse }
  //mConstraint = MouseConstraint.create(engine, options)
  // World.add(world, mConstraint)

  // Setting The Static Bodies
  Boundarys.push(new Boundary(width / 2, height-10, width, height / 25, 0, "k"))
  Boundarys.push(new Boundary(width / 2, height-height+ 10, width, height / 25, 0, "k"))

  Boundarys.push(new Boundary(width-width + 10, height / 2, width / 50, height, 0, "k"))
  Boundarys.push(new Boundary(width - 10, height / 2, width / 50, height, 0, "k"))

  Boundarys.push(new Boundary(200, 550, 100, 25, 0))
  Boundarys.push(new Boundary(1000, 550, 100, 25, 0))
  Boundarys.push(new Boundary(1100, 500, 50, 25, -0.523599))
  Boundarys.push(new Boundary(100, 500, 50, 25, 0.523598))
  Boundarys.push(new Boundary(400, 600, 50, 25, 0.523598))
  Boundarys.push(new Boundary(800, 600, 50, 25, -0.523599))
  
  Boundarys.push(new Boundary(600, 700, 50, 25, 0))



  // Creating Interactives
  grabs.push(new Circle (width / 3, 310, 10, true, "none"))
  grabs.push(new Circle (800, 310, 10, true, "none"))
  
  player = new Circle(200, height / 2, 20, false, "blue")
  player2 = new Circle(1000, height / 2, 20, false, "red")


};

function draw() {

  // World

  background(50,50,50);
  rectMode(CENTER);
  Engine.update(engine);

  // Show and outlaw kill


  for (var i = 0; i < Boxes.length; i++) {
    Boxes[i].show();
  };
  for (var i = 0; i < Boundarys.length; i++) {
    Boundarys[i].show();
  };
  for (var i = 0; i < Circles.length; i++) {
    Circles[i].show();
  };
  for (var i = 0; i < costraints2.length; i++) {
    costraints2[i].show()
  };
  for (var i = 0; i < costraints1.length; i++) {
    costraints1[i].show()
  };
  for (var i = 0; i < grabs.length; i++) {
    grabs[i].show()
  };

  player.show()
  player2.show()

  //killOffScreen()
  isMoving(player, 0.0005)
  isMoving(player2, 0.0005)

  if (player2.rope < 0){
    costraints2[0].removeThis(); //costraints2 = []
  }else{
    grapple(player2, 191)
  }
  if (player.rope < 0){
    costraints1[0].removeThis(); //costraints1 = []
  }else{
      grapple(player, 81)
  }
  
  for (let i = 0; i < Boundarys.length-n; i++){
    isColliding(player.body, Boundarys[i].body, true)
    }
    for (let i = 0; i < Boundarys.length-n; i++){
      isColliding(player2.body, Boundarys[i].body, true)
      }

};


function keyReleased () {

}

function keyPressed() {
  // if (keyCode == RIGHT_ARROW) {
  //   playerMoveX = 1
  //   // Matter.Body.applyForce(player.body, { x: player.body.position.x + 140, y: player.body.position.y + 150 }, { x: 0.01, y: 1 })
  // }else
  // if (keyCode == LEFT_ARROW) {
  //   playerMoveX = -1
  //   // Matter.Body.applyForce(player.body, { x: player.body.position.x + 140, y: player.body.position.y + 150 }, { x: 0.01, y: 1 })
  // }
  
  // if (keyCode == UP_ARROW) {
  //   playerMoveX = -1
  //   // Matter.Body.applyForce(player.body, { x: player.body.position.x + 140, y: player.body.position.y + 150 }, { x: 0.01, y: 1 })
  // }else
  // if (keyCode == DOWN_ARROW) {
  //   playerMoveX = 1
  //   // Matter.Body.applyForce(player.body, { x: player.body.position.x + 140, y: player.body.position.y + 150 }, { x: 0.01, y: 1 })
  // }
}