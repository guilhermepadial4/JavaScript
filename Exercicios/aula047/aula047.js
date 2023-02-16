const p_array = document.querySelector ("#array")
const btnReduzir= document.querySelector("#btnReduzir")
const resultado = document.querySelector ("#resultado")

const elementos_array = [1,2,3,4,5]
let ant = []
let atu = []
let dobro = []
p_array.innerHTML = "[" + elementos_array + "]"

btnReduzir.addEventListener("click",(evt)=>{
    resultado.innerHTML = elementos_array.reduce((ante, atual, pos)=>{
        ant.push (ante)
        atu.push (atual)
        dobro.push (atual*2)
        return atual + ante
    })
    resultado.innerHTML += "<br/> Anterior: " +ant+ "<br/> Atual: " + atu + "<br/> Dobro: " + dobro
})