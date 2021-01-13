class particles {
    constructor(x, y) {

        var particles_options= {
          restitution:0.5,
          isStatic:false


        }

        this.body= Bodies.circle(x, y, 5, particles_options);
        this.color= color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);


        
    }



 
display() {

    push();
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, 5);
    pop();


}

}