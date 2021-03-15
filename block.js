class Blocks{

    constructor(x, y){

        var options= {

            resitution: 0.8, 
            //isStatic= true, 
            friction: 2
        }

        this.block= Bodies.rectangle(x, y, 20, 20, options);
        World.add(this.block, world);
    }

    display(){

        var angle= this.block.angle;
        
        push();
        traslate(this.block.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(this.block, 0, 0, 20, 20);
        pop();
    }
    }

   