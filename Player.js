class Player{

    constructor(){
        this.name = null;
        this.hurdlesPassed = 0;
        this.distance = 0;
        this.level = 0;
        this.player = createSprite( 200,200,50,50);
        this.player.visible = false;
        this.player.veliocityY = 1
        this.index = 0;
      


    }

    giveImages(){
        this.player.visible = true;
        this.player.addAnimation("mario", mario);
        this.player.scale = 0.5;



    }

    getPlayerCount(){
        var playecountref = database.ref("PlayerCount");
        playecountref.on("value",(data)=>{

            playercount = data.val();

        })


    }

    storePlayerDetails(){




    }

    updateplayerlevel(){
        var playerlevelref = database.ref("players/player" + this.index)
     playerlevelref.update({
           Level: this.level
        

     });



    }


    static getplayersFinished(){
        database.ref("PlayersFinished").on("value", (data) => {
           this.level = data.val();
        });
    }   

    updateplayercount(count){

        var playercountref = database.ref('/');
            playercountref.update({
            playerCount: count
        });

    }


    updateplayer(count){

        var playercountref = database.ref('/');
            playercountref.update({
            players: count
        });

    }

    static updateplayersFinished(count){

        var PlayersFinishedref = database.ref('/');
             PlayersFinishedref.update({
            PlayersFinished: count
        });

    }
    

    updateplayerinfo(){
        var playerindex = "players/player" + this.index;
        var playerindexref = database.ref(playerindex);
        playerindexref.set({
            name: this.name,
            distance: this.player.x,
            yposition: this.player.y,
            Level: this.level
        });


    }

    updateplayerrankinfo(playerrank){
        var playerindex = "players/player" + this.index;
        var playerindexref = database.ref(playerindex);
        playerindexref.set({
            distance: this.player.x,
            name: this.name,
            level: playerlevel
            
        });


    }

    static getallplayerinfo(){
        var playerinforef = database.ref("players");
        playerinforef.on("value", (data) => {
            allplayers = data.val();

          });


    }    






}



