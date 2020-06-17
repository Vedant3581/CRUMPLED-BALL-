class Paper extends BaseClass{
    constructor(x, y, width, height) {
      super(x,y,50,50)
      this.image = loadImage("sprites/paper.png");
    }    

    display(){
      super.display();
    }
}