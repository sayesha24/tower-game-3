class Launcher{

    constructor(bodyA, pointB){

var options={

    bodyA: bodyA,
    pointB: pointB,
    isStatic: true,
    resitution: 0.8, 
    friction: 2
}

this.launcher= Constraint.create(options);
pointB= pointB;
World.add(world, this.launcher);

    }

    display(){

if(this.launcher.bodyA){

   var pointA= this.launcher.bodyA.position;
   var pointB= this.pointB;

    line(pointA.x, pointA.y, pointB.x, pointB.y);
}



        
    }
}