const config={
    cor:"#42a"
}
const cxmsg=new Cxmsg(config)

const btn_mostrarcxmsg=document.getElementById("btn_mostrarcxmsg")
const btn_mostrarcxmsg2=document.getElementById("btn_mostrarcxmsg2")
const btn_mostrarcxmsg3=document.getElementById("btn_mostrarcxmsg3")

btn_mostrarcxmsg.addEventListener("click",()=>{
    cxmsg.mostrar("Aluno","Guilherme Padial")
})

btn_mostrarcxmsg2.addEventListener("click",()=>{
    cxmsg.mostrar("Curso","Javascript")
})

btn_mostrarcxmsg3.addEventListener("click",()=>{
    cxmsg.mostrar("Matricula","25647822")
})
