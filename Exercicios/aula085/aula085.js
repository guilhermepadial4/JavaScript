let nome=new String("Guilherme Padial 2012")
let email="123@teste.com"
let numeros="1,10,100,1000"

console.log(nome)

console.log(nome.search(/padial/i))

console.log(nome.match(/l/g))

console.log(nome.replace(/l/ig,"Teste"))

// Metacaracteres
console.log(nome.match(/\d/ig)) //Números
console.log(nome.match(/\s/ig)) //Espaços
console.log(nome.match(/\b/ig)) //DWORD

//Quantificadores
console.log(nome.match(/i+|l+/ig))
console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))
