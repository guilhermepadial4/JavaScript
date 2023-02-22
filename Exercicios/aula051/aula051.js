
const caixa1 = document.querySelector ("#caixa")

let mapa = new Map()

mapa.set("curso","Javascript")
mapa.set(10,"Guilherme")
mapa.set("guilherme",10)
mapa.set(1,100)

mapa.delete(1)

console.log(mapa)

let pes = 10
let res = ""
if(mapa.has(pes)){
    res = "A chave existe na coleção, com o valor: " + mapa.get(pes)
}else{
    res = "A chave não existe na coleção"
}

res += "<br/> O tamanho da coleção é: " + mapa.size

caixa1.innerHTML=res

mapa.forEach((el)=>{
    console.log(el)
})