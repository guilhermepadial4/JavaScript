const div_data=document.querySelector("#div_data")
const div_relogio=document.querySelector("#div_relogio")
const btn_ativar=document.querySelector("#btn_ativar")
const btn_parar=document.querySelector("#btn_parar")
const tmp_alarme=document.querySelector("#tmp_alarme")
const hora_alarme=document.querySelector("#hora_alarme")
const timer=document.querySelector("#timer")

let som_alarme=new Audio("alarme_bolado.mp3")
som_alarme.loop=-1



const data=new Date()

let dia=data.getDate()
dia=dia<10?"0"+dia:dia
let mes=data.getMonth()
mes=mes<10?"0"+mes:mes
const data_r=dia+"/"+mes+"/"+data.getFullYear()
div_data.innerHTML=data_r

const relogio=()=>{
    const data=new Date()
    let horas=data.getHours()
    horas=horas<10?"0"+horas:horas
    let minutos=data.getMinutes()
    minutos=minutos<10?"0"+minutos:minutos
    let segundos=data.getSeconds()
    segundos=segundos<10?"0"+segundos:segundos
    const hora_completa=horas+":"+minutos+":"+segundos
    div_relogio.innerHTML=hora_completa
}

const intervalo=setInterval(relogio,1000)

relogio()