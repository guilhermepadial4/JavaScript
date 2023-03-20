
const palco=document.querySelector("#palco")
const num_objetos=document.querySelector("#num_objetos")
const txt_qtde=document.querySelector("#txt_qtde")
const btn_add=document.querySelector("#btn_add")
const btn_remover=document.querySelector("#btn_remover")

let largura_palco=palco.offsetWidth
let altura_palco=palco.offsetHeight
let bolas=[]
let num_bola=0

class Bola{
     constructor(){
          this.tam=Math.floor(Math.random()*15)+10
          this.r=Math.floor(Math.random()*255)
          this.g=Math.floor(Math.random()*255)
          this.b=Math.floor(Math.random()*255)
          this.px=Math.floor(Math.random()*(largura_palco-this.tam))
          this.px=Math.floor(Math.random()*(altura_palco-this.tam))
     }

}

window.addEventListener("resize",(evt)=>{
     largura_palco=palco.offsetWidth
     altura_palco=palco.offsetHeight
     console.log(largura_palco)
})

btn_add.addEventListener("click",(evt)=>{
     const qtde=txt_qtde.value
     for(let i=0;i<qtde;i++){

     }
})

btn_remover.addEventListener("click",(evt)=>{
     bolas.map((b)=>{

     })
})