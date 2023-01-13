"use strict"

function* cores(){
    yield 'Roxo'
    yield 'Azul'
    yield 'Preto'
    yield 'Cinza'
    yield 'Amarelo'
}

const itc=cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
