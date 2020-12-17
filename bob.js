class Bob{
    constructor(x,y,radius){
        var options = {
            'isStatic' : false,
            'restitution' : 1.0,
            //'friction' : 0.5,
            'density' : 1
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        var angle = this.body.angle;

        push();
        translate(position.x, position.y);
        rotate(angle);
        fill(240,248,255)
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}