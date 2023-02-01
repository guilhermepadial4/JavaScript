
//const c1 = document.querySelector('#c1')
// const cursos = [...document.querySelectorAll ('.curso')]

 cursos.map((el)=>{
     el.addEventListener('click', (evt)=>{
         const el = evt.target
         el.classList.add('destaque')
         console.log(el.id + ' foi clicado')
    })
 })

// const msg = ()=>{
//     alert('CLICOUU')
// }

// c1.addEventListener('click', (evt)=>{
//     const el = evt.target
//     el.classList.add("destaque")
// })
