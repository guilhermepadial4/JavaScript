const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById ('btnCursoSelecionado')

cursos.map((el, chave)=>{
    const novoElement = document.createElement ("div")
    novoElement.setAttribute ('id', 'c' + chave)
    novoElement.setAttribute ('class', 'curso c1')
    novoElement.innerHTML = el

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createAttribute ('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)

    novoElement.appendChild(comandos)

    caixaCursos.appendChild(novoElement)
})