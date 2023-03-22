const btn_alert=document.querySelector("#btn_alert")
const btn_confirm=document.querySelector("#btn_confirm")
const btn_prompt=document.querySelector("#btn_prompt")

btn_alert.addEventListener("click",(evt)=>{
    alert("Olá")
})

btn_confirm.addEventListener("click",(evt)=>{
    const ret=confirm("Você ta bão?")
    if(ret){
        console.log("Botão OK pressionado")
    }else{
        console.log("Botão CANCELAR pressionado")
    }
})

btn_prompt.addEventListener("click",(evt)=>{
    const nome=prompt("Digite seu nome:")
    if(nome==null){
        console.log("Botão CANCELAR pressionado")
    }else{
        console.log("Nome digitado: " +nome)
    }    
})
