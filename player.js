class Player{
    constructor(){

    }
    getCount(){
        var pCountref=database.ref("playerCount");
        pCountref.on("value",function(data){
            pCount=data.val();
            
        });
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        });
    }
    update(nam){
        var playerIndex="player"+pCount;
        database.ref(playerIndex).set({
            name:nam
        });
    }
}