class Tower{
    constructor(x,y,w,h){
        var options ={
            isStatic:true
        }
        this.image=loadImage("tower.png")
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,this.w,this.h,options);
        World.add(world,this.body)
    }

    show(){
       var pos = this.body.position;
       push();
       translate(pos.x,pos.y);
       imageMode(CENTER)
       image(this.image,0,0,this.w,this.h)
    
       pop();


    }


}
