class Ground
{
    constructor(x,y){
      
      var ground_options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,1200,25,ground_options);
      this.width = 1200;
      this.height = 25;
      World.add(world, this.body);  
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow")
        rect(0,0,this.width,this.height);
        pop();
    }
}