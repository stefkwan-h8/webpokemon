const body = document.body

function gantiWarnaBulbasaur() {
    body.style.backgroundColor = "darkgreen"
    body.style.color = "white"
}

function gantiWarnaEevee() {
    body.style.backgroundColor = "black"
    body.style.color = "#ffff99"
}

function gantiWarnaPikachu() {
    body.style.backgroundColor = "white"
    body.style.color = "black"
}

function gantiWarna(tipe){
    if (tipe == "Bulbasaur"){
        body.style.backgroundColor = "darkgreen"
        body.style.color = "white"

    } else if (tipe == "Eevee"){
        body.style.backgroundColor = "black"
        body.style.color = "#ffff99"

    } else if (tipe == "Pikachu"){        
        body.style.backgroundColor = "white"
        body.style.color = "black"

    } else {
        body.style.backgroundColor = "darkcyan"
        body.style.color = "aliceblue"
    }
}

function gantiBackground(tipe){
    tipe = tipe.toLowerCase()
    
    body.style.backgroundImage = `url("images/${tipe}.jpg")`
    // body.style.backgroundImage = 'url("images/' + tipe +'.jpg")'

    // document.getElementById("text-container").style.backgroundColor = "black"
}