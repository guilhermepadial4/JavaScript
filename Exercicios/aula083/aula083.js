let nome=new String("Guilherme Padial")
let nome2=new String("Guilherme Padial")
let nome3=new String(nome.toUpperCase())
let curso=new String("Javascript")

console.log(nome)
console.log(typeof(nome))

console.log(nome.charAt(0))

console.log(nome.charCodeAt(0))

console.log(nome.concat(curso))

//nome=nome.concat(curso)

console.log(nome)

console.log(nome.indexOf("e"))

console.log(nome.lastIndexOf("e"))

console.log(nome.localeCompare(nome2))

console.log(nome.replace("G","K"))

console.log(nome.search("Padial"))

let sobrenome=nome.slice(10,16)
console.log(sobrenome)

let arr_nome=nome.split(" ")
console.log(arr_nome)

let parte1=nome.substring(0,9)
console.log(parte1)

let parte2=nome.substr(0,9)
console.log(parte2)

console.log(nome.toUpperCase())
console.log(nome3.toLowerCase())

console.log(nome.valueOf())

let num=10
num=num.toString()
console.log(typeof(num))
