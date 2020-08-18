class Game{
    constructor(){



    }

    start(){
  
            //player = new Player();
            player.getPlayerCount();
            //form = new Form();
            form.display();
        
        //image(img1, 50, 50);

  

        if (playercount === 2){

            gameState = 1;
            this.updategameState(gameState);

        }

         
    }

    play(){
     
        Player.getallplayerinfo();
        Player.getplayersFinished();

         index = 0;

        for(var plr in allplayers){
             if (plr === "player" + player.index){
              fill("red");
         }
         else{
              fill("blue");
              player.player.x = allplayers[plr]["distance"];
              player.player.y = allplayers[plr]["yposition"];
              
       
          players[index].position.x = xposition;
          //players[index].y = yposition;
         }
        
          index = index + 1;
        
        /*  if (index === player.index){
              cars[index - 1].shapeColor = "red";
              camera.position.x =  cars[index - 1].y
              camera.position.y = displayHeight/2 
              


          }*/
        }
        /*if(player.index != null && person != null){
        for (var i = 0; i < hurdles.sprites.length; i++) {
            if (person.isTouching(hurdles.sprites[i])){
                gameState = 4;
            }

        }
    }*/

        for (var i = 0; i < 4; i++){
            index = index + 1;
            
            
        }

        
        

        if (player.player.x === 3000){
            
            player.level++;
            strokeWeight(30);
            player.updateplayerlevel();
            //Player.updateplayersFinished(player.rank);
            //player.updateplayerrankinfo(player.rank);
           
        }
    }
    end(){
       console.log("Game Ended! Thanks for Playing!");
        

    }
    
    getGameState() {
     var gamestateref = database.ref("gameState");
            gamestateref.on("value", function(data){
            gamestate = data.val();
    
     });
    
    }

    updategameState(state){
        var gamestateref = database.ref('/');
        gamestateref.update({
             gameState: state
        });


    }
}
/*
    start(){

        if (gamestate === 0){
            player = new Player();
            player.getplayercount();
            form = new Form();
            form.display();

        }

        car1 = createSprite(displayWidth - 900, displayHeight - 180);
        car1.addImage(carIMG1);

        car2 = createSprite(displayWidth - 500, displayHeight - 180);
        car2.addImage(carIMG2);
        
        cars = [car1, car2];
    }

    play(){
        form.hide();
        text("Press the UP arrow to go forward", 250, 30);
        Player.getallplayerinfo();
        if (allplayers !==undefined){
            var yposition = 130;
            var index = 0;
            var x = 500;
            image(track, 0, -displayHeight * 4, displayWidth, displayHeight * 8);

            for(var plr in allplayers){

              /* if (plr === "player" + player.index){
                fill("red");

           }
           else{
                fill("blue");
           }/
            yposition = displayHeight - allplayers[plr].distance
   
       

            cars[index].x = x
            cars[index].y = yposition
            //console.log(cars[index].y);
            index = index + 1
          
            if (index === player.index){
                //cars[index - 1].shapeColor = "red";
                camera.position.x =  displayWidth/2
                camera.position.y =  cars[index - 1].y
                


            }
            x = x + 440;
            }
        }
        if (keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 20;
            player.updateplayerinfo();


        }

        if (player.distance === 4100){
            gamestate = 2;


        }

    }

    end(){
        console.log("Game Over!");

        game.updategameState(2);



    }
    */
