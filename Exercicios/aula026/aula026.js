"use strict"

const somar=val=>{
    let res=0
    for(let v of val)
        res+=v
    return res
}
const soma=(...valores)=>{

    return somar(valores)
}

console.log(soma(10,5,15))
 let valor=[10,5,15]
console.log(soma(...valor))
