let nome=new String("Guilherme Padial")
let nome2=new String("Guilherme Padial")
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
