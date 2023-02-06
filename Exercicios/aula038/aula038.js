const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]

console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())


console.log (caixa1.children.length > 0 ? 'Tem filhos' : 'Não tem filhos')

console.log(caixa1.firstElementChild.innerHTML= 'Teste')
