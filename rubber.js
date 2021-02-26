class Rubber{
    constructor(x,y){
        var options={
            //isStatic: true
            'restitution':0.5,
            'density':2,
            'friction':1
            
        }
        this.body=Bodies.ellipse(x,y, 20, 20);
        this.width=50;
        this.height=50;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        pos.x=mouseX;
        pos.y=mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(2);
        stroke("blue")
        fill("green");

        rect(0,0,this.width,this.height);
        pop();
    }
}