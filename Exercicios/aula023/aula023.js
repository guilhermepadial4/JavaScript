"use strict"

function soma(...valores){
    let res=0
    for(let v of valores){
        res+=v
    }
    return res
}
console.log(soma(10,5,8,9))