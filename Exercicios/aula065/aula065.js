
const teclas_Num=[...document.querySelectorAll(".num")]
const teclas_Op=[...document.querySelectorAll(".op")]
const tecla_Res=document.querySelector(".res")
const display=document.querySelector(".display")
const tecla_On=document.querySelector("#ton")
const tecla_Limpar=document.querySelector("#tlimpar")

teclas_Num.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        display.innerHTML+=evt.target.innerHTML
    })
})

teclas_Op.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        display.innerHTML+=evt.target.innerHTML
    })
})

tecla_Limpar.addEventListener("click",()=>{
    display.innerHTML="0"
})
