const nome=Symbol("nome")
const numero=Symbol("numero")
const corUniforme=Symbol("cor do uniforme")

const Jogador={
    nome:"j1",
}

Jogador[numero]=18,
Jogador[corUniforme]="roxo"

for(p in Jogador){
    console.log(p)
}

console.log(Jogador)
console.log(Jogador.nome)
console.log(Jogador[numero])
console.log(Jogador[corUniforme])
