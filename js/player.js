class Player{
    constructor(){

    }
    getCount(){
        var playerCountRef=database.ref("playerCount")
        playerCountRef.on("value",function(data){
            playerCount=data.val
            
        })
    
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    update(name){
        var playerIndex="playerCount"+playerCount
        database.ref(playerIndex).set({
            name:name
        })
    }
}