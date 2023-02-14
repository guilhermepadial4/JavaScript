const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById ('btnCursosSelecionados')
const btnRemoveCurso = document.getElementById ('btnRemoverCurso')
const btnAntes = document.getElementById ('btnAdicionarCursoAntes')
const btnDepois = document.getElementById ('btnAdicionarCursoDepois')
const nomeCurso = document.getElementById ('nomeCurso')

let indice = 0

const criarNovoCurso = (curso)=>{
    const novoElement = document.createElement ("div")
    novoElement.setAttribute ('id', 'c' + indice)
    novoElement.setAttribute ('class', 'curso c1')
    novoElement.innerHTML = curso

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement ('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)

    novoElement.appendChild(comandos)

    return novoElement
}

cursos.map((el, chave)=>{
    const novoElement = criarNovoCurso (el)
    caixaCursos.appendChild(novoElement)
    indice++
})

const radioSelecionado = () =>{
    const todosRadios=[...document.querySelectorAll("input[type=radio]")]
    const radioSelecionado = todosRadios.filter ((ele)=>{
        return ele.checked
    })
    
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
    try{
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert("Curso Selecionado: " + cursoSelecionado)
    }catch(ex){
        alert("Selecione um curso")
    }
})

    btnRemoveCurso.addEventListener("click", (evt)=>{
        const rs = radioSelecionado()
        if(rs!=undefined){
            const cursoSelecionado = rs.parentNode.parentNode
            cursoSelecionado.remove()
        }else{
            alert("Selecione um curso")
        }
})
   
btnAntes.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
    try{
        if(nomeCurso.value != ""){
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso = criarNovoCurso (nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado)
        }else{
            alert ("Digite um novo curso.")
        }    
    }catch(ex){
        alert("Selecione um curso")
    }
})

btnDepois.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
    try{
        if (nomeCurso.value != ""){
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso = criarNovoCurso (nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado.nextSibling)
        }else{
            alert ("Digite um novo Curso.")
        }
    }catch(ex){
        alert("Selecione um curso")
    }
})
