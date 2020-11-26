class Dustbin
{
  constructor(x,y,width,height)
  {
      var option={
          isStatic:false
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height= height;
      World.add(world,this.body);
  }
}
display();{
    var pos =this.body.position;

   push();
   translate(pos.x,pos.y);
   rect1=createSprite(width/2,650,200,20);
rect1.shapeColor=color("red");
rect2=createSprite(300,560,20,200);
rect2.shapeColor=color("red");
rect3=createSprite(500,560,20,200);
rect3.shapeColor=color("red");
}

 