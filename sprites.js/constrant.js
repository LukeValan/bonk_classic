

function createLink(p1, p2, norm, elasticity) {

    var options = {
        bodyA: p1,
        bodyB: p2,
        length: norm,
        stiffness: elasticity
    };

    var Link = Constraint.create(options);
    World.add(world, Link);

    this.show = function () {
        
        push();
        noFill(250, 250, 250);
        stroke(250, 250, 250);
        strokeWeight(1);

        line(p1.position.x, p1.position.y, p2.position.x, p2.position.y);
        pop();

    };

    this.isOffScreen = function () {
        let amount = 50;
        if (p1.position.x > width+amount || p1.position < -amount || p1.position.y > height+amount || p1.position.y < -amount || p2.position.x > width+amount || p2.position < -amount || p2.position.y > height+amount || p2.position.y < -amount) {
            return(true)
        }else {
            return(false)
        };

    };

    this.removeThis = function () {
        World.remove(world, Link)
    }

};