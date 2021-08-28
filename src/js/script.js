let form     = document.querySelector("form")
let textarea = document.querySelector("textarea")
let feed = document.querySelector(".feed__listPost")

form.addEventListener("submit", pegarTweet)

function pegarTweet(evt){
    evt.preventDefault();
    let tweetTexto = textarea.value
    

    criarTweet(tweetTexto)
}

function criarTweet(tweetTexto){
    let Data =  new Date()
    let hora = Data.getHours()
    let minuto = Data.getMinutes()
  
    const tweet = {
        nome: "Daniel",
        foto:"./src/img/ProfilePic.png",
        usuario:"@danielkenzie",
        tempo:`${hora}:${minuto}`,
        texto:tweetTexto
    }

    listarTweet(tweet)
}

function listarTweet(tweet){

    const {nome, foto, usuario, tempo ,texto} = tweet

    let li = document.createElement("li")
    li.classList.add("feed__listPost__post")

    let img = document.createElement("img")
    let div = document.createElement("div")
    let h3 = document.createElement("h3")
    let span = document.createElement("span")
    let p = document.createElement("p")

    img.src        = foto
    h3.innerText   = nome
    span.innerText = usuario+" "+tempo
    p.innerText    = texto



    div.appendChild(h3)
    div.appendChild(span)
    div.appendChild(p)

    li.appendChild(img)
    li.appendChild(div)

    feed.appendChild(li)
    console.log(li)
    textarea.value = ""
}