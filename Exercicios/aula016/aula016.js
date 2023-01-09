"use strict"

const objs=document.getElementsByTagName("div")

let num=[10,20,30,40,50]

for(let o of objs){
    console.log(o.innerHTML="Curso bolado")
}

for(let o in objs){
    console.log(objs[o].innerHTML)
}