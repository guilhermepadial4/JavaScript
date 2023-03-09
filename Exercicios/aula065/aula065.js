
const teclas_Num=[...document.querySelectorAll(".num")]
const teclas_Op=[...document.querySelectorAll(".op")]
const tecla_Res=document.querySelector(".res")
const display=document.querySelector(".display")
const tecla_On=document.querySelector("#ton")
const tecla_Limpar=document.querySelector("#tlimpar")
const tecla_Igual=document.querySelector("#tigual")

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
