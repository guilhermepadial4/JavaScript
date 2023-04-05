const carro=document.querySelector("#carro")
const btn_esquerda=document.querySelector("#btn_esquerda")
const btn_direita=document.querySelector("#btn_direita")

const initi=()=>{
    carro.style.position="relative"
    carro.style.left="0px"
}

btn_esquerda.addEventListener("click",()=>{
    //carro.style.left=parseInt(carro.style.left) -10 +"px"
    let posi=parseInt(carro.style.left)
    posi+=-10
    carro.style.left=`${posi}px`
})

btn_direita.addEventListener("click",()=>{
    let pos=parseInt(carro.style.left)
    pos+=10
    carro.style.left=`${pos}px`
    console.log(pos)
})

window.onload=initi()
//window.addEventListener("load",initi())
