class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("green.png")
     }

     display(){
       super.display(this.image);
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
  //     rotate(angle);
  //     rectMode(CENTER);
  //     fill("brown");
  //     rect(0,0, this.body.width, this.body.height);
      pop();

     }
};
