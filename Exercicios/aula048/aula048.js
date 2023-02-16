const valores = [1,2,3,4,5,6,7,8]
const it_val = valores[Symbol.iterator]()

const texto = "Guilherme"
const it_text = texto[Symbol.iterator]()
console.log(texto)
console.log(it_text.next())
console.log(it_text.next())
console.log(it_text.next())
console.log(it_text.next())
console.log(it_text.next())
console.log(it_text.next())
console.log(it_text.next())
console.log(it_text.next())
console.log(it_text.next())
console.log(it_text.next())
