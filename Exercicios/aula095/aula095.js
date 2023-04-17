const p_temp=document.getElementById("p_temp")
const p_nivel=document.getElementById("p_nivel")
const p_press=document.getElementById("p_press")
const btn_texto=document.getElementById("btn_texto")

const obterDados=()=>{
    const endpoint = "https://lustroustametriggers.guilhermepadial.repl.co"
    fetch(endpoint)
    .then(res=>res.json())
    .then(dados=>{
        console.log(dados)
        p_temp.innerHTML="Temperatura: " + dados.temperatura
        p_nivel.innerHTML="Nivel: " + dados.nivel
        p_press.innerHTML="Pressão: " + dados.pressão
    })
}

// let intervalo=setInterval(obterDados,5000)

let dados={
    nome:"Guilherme",
    curso:"Javascript"
}

let cabecalho={
    method:"POST",
    body:JSON.stringify(dados)
}

const gravarDados=()=>{
    const endpoint="https://lustroustametriggers.guilhermepadial.repl.co"
    fetch(endpoint,cabecalho)
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret)
    })
}

btn_texto.addEventListener("click",(evt)=>{
    gravarDados()
})
