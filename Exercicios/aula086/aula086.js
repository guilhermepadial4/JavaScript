const carro=document.querySelector("#carro")
const btn_esquerda=document.querySelector("#btn_esquerda")
const btn_direita=document.querySelector("#btn_direita")
const btn_parar=document.querySelector("#btn_parar")

const initi=()=>{
    carro.style.position="relative"
    carro.style.left="0px"
}

let anima=null

const mover=(dir)=>{
    let posi=parseInt(carro.style.left)
    posi+=(10*dir)
    carro.style.left=`${posi}px`
}

btn_parar.addEventListener("click",()=>{
    clearInterval(anima)
})

btn_esquerda.addEventListener("click",()=>{
    //carro.style.left=parseInt(carro.style.left) -10 +"px"
    clearInterval(anima)
    anima=setInterval(mover,20,-1)
    
})

btn_direita.addEventListener("click",()=>{
    clearInterval(anima)
    anima=setInterval(mover,20,1)
})

window.onload=initi()
//window.addEventListener("load",initi())
