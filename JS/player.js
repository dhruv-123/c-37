class Player{
    constructor(){
    this.index=null;
    this.name=null;
    this.distance=0;
    }

    getpcount(){
        var pref = database.ref("playercount");
        pref.on("value",function(data){
            pcount = data.val();
        })
    }

    updatepcount(count){
        database.ref('/').update({
            playercount: count
        })  
    }

    updatename(){
        var index = "players/player"+this.index;
        database.ref(index).set({
            name: this.name,
            distance:this.distance
        })
    }

    static getplayerinfo(){
    playerref=database.ref('players')
    playerref.on("value",(data)=>{
        allplayers=data.val()
    })

    }

}