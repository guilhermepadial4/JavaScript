
const palco=document.querySelector("#palco")
const num_objetos=document.querySelector("#num_objetos")
const txt_qtde=document.querySelector("#txt_qtde")
const btn_add=document.querySelector("#btn_add")
const btn_remover=document.querySelector("#btn_remover")

let largura_palco=palco.offsetWidth
let altura_palco=palco.offsetHeight
let bolas=[]
let num_bola=0

window.addEventListener("resize",(evt)=>{
     largura_palco=palco.offsetWidth
     altura_palco=palco.offsetHeight
     console.log(largura_palco)
})

btn_add.addEventListener("click",(evt)=>{
    
})

btn_remover.addEventListener("click",(evt)=>{
    
})