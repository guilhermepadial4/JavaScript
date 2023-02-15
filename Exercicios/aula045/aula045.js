const p_array = document.querySelector ("#array")
const btnVerificar= document.querySelector("#btnVerificar")
const resultado = document.querySelector ("#resultado")

const elementos_array = [19,95,22,19,20]

p_array.innerHTML="[" + elementos_array + "]"

btnVerificar.addEventListener ("click",(evt)=>{
    const retorno = elementos_array.every((e,i)=>{
        if (e < 18){
            resultado.innerHTML = "Array não conforme na posição: " + i 
        }
        return e >= 18
    })
    if (retorno){
        resultado.innerHTML = "Array esta em conformidade"
    }
    //console.log(retorno)
})
