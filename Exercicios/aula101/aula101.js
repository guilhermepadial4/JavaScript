const config={
    titulo:"Teste",
    texto:"Curso de Javascript",
    cor:"#42a"
}
const cxmsg=new Cxmsg(config)

const btn_mostrarcxmsg=document.getElementById("btn_mostrarcxmsg")

btn_mostrarcxmsg.addEventListener("click",()=>{
    cxmsg.mostrar()
})
