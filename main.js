const calcularPorcentaje = (event)=>{
    event.preventDefault()
    
    let porc = document.getElementById("porcentaje")
    let cant =  document.getElementById("cantidad")
    
    let porcValor = porc.value
    let cantValor = cant.value
    let resultado = porcValor * cantValor / 100
    
    let divCon = document.getElementById("divPorcentaje")
    let formCon = document.getElementById("formPorcentaje")
    let mostrar = document.createElement("strong")
    mostrar.classList = "mostrar"
    mostrar.innerHTML = `El resultado es: ${resultado}`
    formCon.appendChild(divCon)
    divCon.appendChild(mostrar)
}

let valorSteam = 0

const calcularSteam = (event)=>{
    event.preventDefault()


    let steam = document.getElementById("steamcitu")
    let steamValor = steam.value
    let valorReal = valorSteam=+steamValor
    let resultado = 75 * steamValor / 100 + valorReal

    let divCon = document.getElementById("divSteam")
    let formCon = document.getElementById("formSteam")
    let mostrar = document.createElement("strong")
    mostrar.classList = "mostrar"
    mostrar.innerHTML = `Valor real del juego: $${resultado}`
    formCon.appendChild(divCon)
    divCon.appendChild(mostrar)
}

