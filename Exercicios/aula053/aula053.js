
const caixa = document.querySelector("#caixa")

const carros = ["Grand Siena", "Golf", "Jetta"]

let ul = `<ul>`
carros.map((el)=>{
    ul += `<li>${el}</li>`
})
ul+`</ul>`

caixa.innerHTML = ul
