class plinko {
    constructor(x, y) {

        var plinko_options= {


            isStatic:true
        }


        this.body= Bodies.circle(x, y, 10, plinko_options);
        World.add(world, this.body);


        

    }




    display() {

        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, 10, 10);


    }
}