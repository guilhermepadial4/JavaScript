
const calc=document.querySelector("#calc")
const display=document.querySelector(".display")
const teclas_Num=[...document.querySelectorAll(".num")]
const teclas_Op=[...document.querySelectorAll(".op")]
const tecla_Res=document.querySelector(".res")
const tecla_Cpy=document.querySelector("#tcpy")
const tecla_Limpar=document.querySelector("#tlimpar")
const tecla_Igual=document.querySelector("#tigual")
const tecla_Aba=document.querySelector("#calc_aba")
const img_Calc=document.querySelector("#img_aba_calc")

let sinal=false
let decimal=false

teclas_Num.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal=false
        if(evt.target.innerHTML==","){
            if(!decimal){
                decimal=true
                if(display.innerHTML=="0"){
                    display.innerHTML="0,"
                }else{
                    display.innerHTML+=evt.target.innerHTML
                }
            }
        }else{
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            display.innerHTML+=evt.target.innerHTML
        }
    })
})

teclas_Op.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        if(!sinal){
            sinal=true
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            if(evt.target.innerHTML=="x"){
                display.innerHTML+="*"
            }else{
            display.innerHTML+=evt.target.innerHTML
            }
        }
    })
})

tecla_Limpar.addEventListener("click",()=>{
    sinal=false
    decimal=false
    display.innerHTML="0"
})

tecla_Igual.addEventListener("click",()=>{
    sinal=false
    decimal=false
    const res=eval(display.innerHTML)
    display.innerHTML=res
})


tecla_Cpy.addEventListener("click",(evt)=>{
    navigator.clipboard.writeText(display.innerHTML)
})


tecla_Aba.addEventListener("click",(evt)=>{
    calc.classList.toggle("calc_exibir")
    console.log(evt.target)
    if(calc.classList.contains("calc_exibir")){
        img_Calc.setAttribute("src","seta_esquerda.svg")
    }else{
        img_Calc.setAttribute("src","seta_direita.svg")
    }
})
