const f_nome=document.querySelector("#f_nome")
const f_nota=document.querySelector("#f_nota")
const f_msg=document.querySelector("#f_msg")

document.querySelector("#btn_validar").addEventListener("click",(evt)=>{
    let estadoValidacao=f_nota.validity

    if(estadoValidacao.valueMissing){
        f_nota.setCustomValidity("Este campo é obrigatório")
    }else if(estadoValidacao.rangeOverFlow){
        f_nota.setCustomValidity("Nota inválida, digite uma nota de 0 a 10")
    }else if(estadoValidacao.rangeUnderflow){
        f_nota.setCustomValidity("Nota inválida, digite uma nota de 0 a 10")
    }

    f_nota.reportValidity()
    //f_msg.innerHTML=f_nota.validationMessage()
    evt.preventDefault()
})
