

function killOffScreen() {
    for (var i2 = 0; i2 < costraints.length; i2++) {

        if (costraints[i2].isOffScreen()) {
            costraints[i2].removeThis();
            costraints.splice(i2, 1);
            console.log("1 outStrain killed")
            i--;
        };

    };

    for (var i = 0; i < Circles.length; i++) {

        if (Circles[i].isOffScreen()) {
            Circles[i].removeThis();
            Circles.splice(i, 1);
            console.log("1 outlaw killed");
            i--;

        };
    };


};

function isMoving(who, amounte) {
    // if (playerMoveX == 1) {
    //     who.move("right", 0.0001)
    //  }else if (playerMoveX == -1) {
    //      who.move("left", 0.0001)
    //  }

    //  if (playerMoveY == 1) {
    //     who.move("down", 0.0001)
    //  }else if (playerMoveY == -1) {
    //     who.move("up", 0.0001)
    //  }
    if (who == player2) {
        if (keyIsDown(RIGHT_ARROW)) {
            who.move("right", amounte)
        } else if (keyIsDown(LEFT_ARROW)) {
            who.move("left", amounte)
        }

        if (keyIsDown(DOWN_ARROW)) {
            who.move("down", amounte)
        } else if (keyIsDown(UP_ARROW)) {
            who.move("up", amounte)
        }
    } else {
        if (keyIsDown(68)) {
            who.move("right", amounte)
        } else if (keyIsDown(65)) {
            who.move("left", amounte)
        }

        if (keyIsDown(83)) {
            who.move("down", amounte)
        } else if (keyIsDown(87)) {
            who.move("up", amounte)
        }
    }

}

function isColliding(a, b, c) {
    if (Matter.Collision.collides(a, b) != null) {
        if (c == true) {
            World.remove(world, a)
            if (a == player.body) {
                //console.log("The Winner Is: " + "player 2 (RIGHT)")
            } else {

                //console.log("The Winner Is: " + "player 1 (LEFT)")
            }
        } else {
            return (true)
        }

        //a.removeThis()
    }
}

function closeObjectMid(who) {
    var nearestDistance = 1000000
    let nearestGrab;
    for (let grab of grabs) {
        const d = dist(who.body.position.x, who.body.position.y, grab.body.position.x, grab.body.position.y)
        if (d < nearestDistance){
            nearestDistance = d;
            nearestGrab = grab;
        }
    }

    if (nearestDistance < 200) {
        if (who == player2) {
           if (allo2 == 1){ costraints2.push(new createLink (who.body, nearestGrab.body, nearestDistance-10, 0.008)); allo2 = 0; }

        }
        else {
            if (allo == 1){costraints1.push(new createLink (who.body, nearestGrab.body, nearestDistance-10, 0.008)); allo = 0}
        }; 
        
    };

    
}

function grapple(whoo, num) {
    if (keyIsDown(num)) {
        closeObjectMid(whoo)
        whoo.rope=whoo.rope-0.2
    } else {
        if (whoo == player2) {
            for (var i = 0; i < costraints2.length; i++) {
                costraints2[i].removeThis()
                // costraints2.splice(i, 1);
                // i--;
            }
            
            costraints2 = []
            
            allo2 = 1
            
        } else {
            for (var i = 0; i < costraints1.length; i++) {
                costraints1[i].removeThis()
                // costraints1.splice(i, 1);
                // i--;
            }
           
            costraints1 = []
            
            allo = 1
            
            
        }; 

    }

}


