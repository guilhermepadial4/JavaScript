const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById ('btnCursosSelecionados')

cursos.map((el, chave)=>{
    const novoElement = document.createElement ("div")
    novoElement.setAttribute ('id', 'c' + chave)
    novoElement.setAttribute ('class', 'curso c1')
    novoElement.innerHTML = el

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement ('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)

    novoElement.appendChild(comandos)

    caixaCursos.appendChild(novoElement)

})


btnCursoSelecionado.addEventListener("click", (evt)=>{
    const todosRadios=[...document.querySelectorAll("input[type=radio]")]
    const radioSelecionado = todosRadios.filter ((ele)=>{
        return ele.checked
    })
    
radioSelecionado = radioSelecionado[0]
//const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent
const cursoSelecionado = radioSelecionado.parentNode.previousSibling.textContent
alert("Curso Selecionado: " + cursoSelecionado)

// console.log(todosRadios)
// console.log(radioSelecionado)
})