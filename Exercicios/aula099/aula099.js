const timer=document.getElementById("timer")

const tmpini=Date.now()

const contador=()=>{
    const tmpatual=Date.now()
    let cont=tmpatual-tmpini
    let seg=Math.floor((tmpatual-tmpini)/1000)
    timer.innerHTML=converter(seg)
}

const converter=(seg)=>{
    const hora=Math.floor(seg/3600)

    return  hora
}

setInterval(contador,1000)
