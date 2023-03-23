
const objetos=document.querySelector("#objetos")

const computador={
    cpu:"i9",
    ram:"64gb",
    hd:"2tb",
    info:function(){
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        console.log(`HD:${this.hd}`)
    }
}

computador["monitor"]="22pol"
const computadores=[
    {
        cpu:"i9",
        ram:"64gb",
        hd:"2tb"
    },

    {
        cpu:"i8",
        ram:"32gb",
        hd:"1tb"
    },

    {
        cpu:"i7",
        ram:"16gb",
        hd:"2tb"
    }
]

computadores.forEach((c)=>{
    const div=document.createElement("div")
    div.innerHTML=c.cpu+"<br/>"+c.ram+"<br/>"+c.hd+"<br/>"
    div.setAttribute("class","computador")
    objetos.appendChild(div)
})

 //computador.info()
 console.log(computador)
// objetos.innerHTML=JSON.stringify(computadores)
