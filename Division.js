class divider{
    constructor(x, y, w, h) {
        var divider_options= {
            isStatic:true
            


        }
        this.body= Bodies.rectangle(x, y, w, h, divider_options);
        World.add(world, this.body);

        

this.w= w;
this.h= h;



    }


    display() {


        
        rectMode(CENTER);
        fill("white");
        rect(this.body.position.x, this.body.position.y, this.w, this.h)
        



    }





}