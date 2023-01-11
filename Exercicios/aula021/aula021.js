"use strict"

function soma(){
   let n1=9
   let n2=3
   let res=n1+n2
   if(res%2 == 0){
    return "Par"
}else{
    return "Impar"  
}
}

let res=soma()

console.log(res)