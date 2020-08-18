class Hurdles{
    constructor(x){
        this.hurdles = [];
        this.hurdle;
        this.x = x;
        this.x2 = x;
        this.y = 170;


    }

    createHurdles(){
       
       // for(var e = 0; e < 2; e++){
            for(var k = 0; k< 5; k++){
             //var ran = random(0,4);
             //var rand = Math.round(ran);
                this.hurdle = createSprite(this.x, this.y + 30, 10,10);
               
                this.hurdle.addImage(Hurdlespng);
                this.hurdle.scale = 0.1;

                this.hurdles[k] = this.hurdle;
                this.x = this.x + 500;


            }
           // this.y = this.y + 300;
           // this.x = 500;
       // }
       

    }

    createtext(x){
        for(var k = 0; k< 5; k++){
            //var ran = random(0,4);
            //var rand = Math.round(ran);
               
               textSize(20);
               text(texts[k],x - 10, this.y);
            
               x = x + 500;


           }
   
    }





}