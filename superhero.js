class Superhero {
    constructor(x,y,radius) {
        var options = {
            isStatic:false
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
        this.image = loadImage("Superhero.png");
        World.add(world, this.body);
    }
    display() {
        var pos =this.body.position;
        circle(pos.x,pos.y,this.radius)
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 250, 100);
        
    }
}