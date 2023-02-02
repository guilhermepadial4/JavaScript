
const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const botao = document.querySelector('#btn_transferir')
const cursos = [...document.querySelectorAll('.curso')]

cursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const curso = evt.target
       curso.classList.toggle('selecionado')
    })
})

botao.addEventListener('click',()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    const cursosNaoSelecionados = [...document.querySelectorAll('.curso:not(.selecionado)')]
    console.log(cursosNaoSelecionados)
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})
