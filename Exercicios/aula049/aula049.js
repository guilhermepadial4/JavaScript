
const caixa = document.querySelector ("#caixa")

let cores = ["Azul", "Vermelho", "Violeta", ["Claro", "Médio", "Escuro"]]
let cursos = ["HTML", "CSS", "Javascript", cores]

console.log(cursos[3][3][1])

// cursos.push ("C++")
// cursos.unshift("Python")
// cursos.shift()
// cursos.shift()

cursos.map((el)=>{
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})
