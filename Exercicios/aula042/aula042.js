// const filtroMaior18 = (valor) =>{
//     if (valor >= 18)
//         return valor
// }

const idades = [15, 20, 35, 18, 19, 16]

const maior = idades.filter((valor)=>{
    if (valor >= 18)
    return valor
})

const menor = idades.filter((valor)=>{
    if (valor < 18)
    return valor
})


console.log(idades)
console.log(maior)
console.log(menor)
