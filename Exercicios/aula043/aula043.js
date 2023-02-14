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

const tirarSelecao = ()=>{
    const cursoSelecionado = [...document.querySelectorAll (".selecionado")]
    cursoSelecionado.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso = (curso)=>{
    const novoElement = document.createElement ("div")
    novoElement.setAttribute ('id', 'c' + indice)
    novoElement.setAttribute ('class', 'curso c1')
    novoElement.innerHTML = curso
    novoElement.addEventListener("click", (evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })
    return novoElement
}

cursos.map((el, chave)=>{
    const novoElement = criarNovoCurso (el)
    caixaCursos.appendChild(novoElement)
    indice++
})

const cursoSelecionado = () =>{
    const cursoSelecionado = [...document.querySelectorAll (".selecionado")]
    return cursoSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evt)=>{
    try{
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert("Curso Selecionado: " + cursoSelecionado().innerHTML)
    }catch(ex){
        alert("Selecione um curso")
    }
})

    btnRemoveCurso.addEventListener("click", (evt)=>{
        const cs = cursoSelecionado()
        if(cs!=undefined){
            cs.remove()
        }else{
            alert("Selecione um curso")
        }
})
   
btnAntes.addEventListener("click", (evt)=>{
    try{
        if(nomeCurso.value != ""){
            const novoCurso = criarNovoCurso (nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado())
        }else{
            alert ("Digite um novo curso.")
        }    
    }catch(ex){
        alert("Selecione um curso")
    }
})

btnDepois.addEventListener("click", (evt)=>{
    try{
        if (nomeCurso.value != ""){
            const novoCurso = criarNovoCurso (nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado().nextSibling)
        }else{
            alert ("Digite um novo Curso.")
        }
    }catch(ex){
        alert("Selecione um curso")
    }
})
