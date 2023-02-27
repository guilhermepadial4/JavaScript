const Pessoa = {
    nome:"Guilherme"
}

const p2 = Pessoa
const p3 = Pessoa

p3.nome = "Guizin"

console.log(Pessoa.nome)
console.log(p2.nome)
console.log(p3.nome)
