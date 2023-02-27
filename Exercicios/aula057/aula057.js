const Pessoa = {
    nome,
    idade,
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },
    setNome:function(nome){
        return this.nome=nome
    },
    setIdade:function(idade){
        return this.idade=idade
    }
}

const p2 = Pessoa
const p3 = Pessoa

p3.nome = "GuilhermeP"
p2["nome"]="GuilhermeM"
Pessoa.setNome("GuilhermePM")

console.log(Pessoa.nome)
console.log(p2.nome)
console.log(p3.nome)
