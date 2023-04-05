const carro=document.querySelector("#carro")
const btn_esquerda=document.querySelector("#btn_esquerda")
const btn_direita=document.querySelector("#btn_direita")
const btn_parar=document.querySelector("#btn_parar")

const initi=()=>{
    carro.style.position="relative"
    carro.style.left="0px"
    carro.style.width="100px"
    tamMax=window.innerWidth - parseInt(carro.style.width)
}

let anima=null

let tamMax=null

const mover=(dir)=>{
    if(dir > 0){
        if(parseInt(carro.style.left) <= tamMax){
            let posi=parseInt(carro.style.left)
             posi+=(10*dir)
            carro.style.left=`${posi}px`
             anima=setTimeout(mover,20,dir)
        }else{
            clearTimeout(anima)
        }
    }else if(dir < 0){
        if(parseInt(carro.style.left) >= 0){
            let posi=parseInt(carro.style.left)
             posi+=(10*dir)
            carro.style.left=`${posi}px`
             anima=setTimeout(mover,20,dir)
        }else{
            clearTimeout(anima)
        }
    }
}

btn_parar.addEventListener("click",()=>{
    clearTimeout(anima)
})

btn_esquerda.addEventListener("click",()=>{
    //carro.style.left=parseInt(carro.style.left) -10 +"px"
    clearTimeout(anima)
    mover(-1)
})

btn_direita.addEventListener("click",()=>{
    clearTimeout(anima)
    mover(1)
})

//window.onload=initi()
window.addEventListener("load",initi())
window.addEventListener("resize",()=>{
    tamMax=window.innerWidth - parseInt(carro.style.width)
})
