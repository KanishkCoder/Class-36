class Form{
    constructor(){

    }
    display(){
        var title=createElement("h2")
        title.html("car Racing game")
        title.position(130,0)
        var input = createInput("name")
        var button=createButton("play")
        var greeting=createElement("h3")
        input.position(350,180)
        button.position(350,220)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            var greeting=createElement("h3")
            greeting.html("hello"+name)
            greeting.position(130,160)
        })
    }
}