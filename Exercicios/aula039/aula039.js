const caixa1 = document.querySelector ('#caixa1')
const btn_c = [...document.querySelectorAll ('.curso')]
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]

cursos.map((el, chave)=>{
const novoElement = document.createElement("div")
novoElement.setAttribute('id', 'c' + chave)
novoElement.setAttribtue('class', 'curso c1')
novoElement.innerHTML = el
caixa1.appendChild(novoElement)
})
