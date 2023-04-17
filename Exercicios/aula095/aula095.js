const endpoint = "https://lustroustametriggers.guilhermepadial.repl.co"
fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
    console.log(dados)
})
