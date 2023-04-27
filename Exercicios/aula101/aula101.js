import { Cxmsg } from "./cxmsg.js"

const config={
    cor:"#48f",
    tipo:"ok",
    textos:["SIM","NÃO"],
    comando_sn:()=>{}

 }

 const fsim=()=>{
    console.log("Botão SIM Pressionado")
 }

const btn_mostrarcxmsg=document.getElementById("btn_mostrarcxmsg")
const btn_mostrarcxmsg2=document.getElementById("btn_mostrarcxmsg2")
const btn_mostrarcxmsg3=document.getElementById("btn_mostrarcxmsg3")

btn_mostrarcxmsg.addEventListener("click",()=>{
    config.tipo="ok"
    Cxmsg.mostrar(config,"Aluno","Guilherme Padial")
})

btn_mostrarcxmsg2.addEventListener("click",()=>{
    config.tipo="sn"
    config.comando_sn=()=>{fsim()}
    Cxmsg.mostrar(config,"Curso","Javascript")
})

btn_mostrarcxmsg3.addEventListener("click",()=>{
    config.tipo="sn"
    config.textos=["OK","CANCELA"]
    config.comando_sn=()=>{}
    Cxmsg.mostrar(config,"Matricula","25647822")
})
