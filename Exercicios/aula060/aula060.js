
const pessoa={
    nome:"Guilherme",
    idade: 19,
    curso:"Javascript",
    aulas:{
        modulo01:"Introdução",
        modulo02:"Variaveis",
        modulo03:"Condicional"
    }
}

const s_json=JSON.stringify(pessoa)
const o_json=JSON.parse(s_json)

console.log(pessoa)
console.log(s_json)
console.log(o_json)
