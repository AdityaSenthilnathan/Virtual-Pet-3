class Form{
    constructor(){
        this.inputbox = createInput("Name");
        this.button = createButton("Enter");


    }

    display(){
        this.inputbox.position(displayWidth/2 - 100, displayHeight/2 - 100);
        this.button.position(displayWidth/2- 50, displayHeight/2);
        
        this.button.mousePressed(()=>{
            player.name = this.inputbox.value();

            this.inputbox.hide();
            this.button.hide();
            player.giveImages();
        





            
            playercount++;
            player.index = playercount;
            player.updateplayercount(playercount);
            player.updateplayerinfo();
            
            
            
           
            

        });
    }


}