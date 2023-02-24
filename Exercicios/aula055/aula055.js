class Carro {
    constructor(pnome,ptipo){
        this.nome = pnome
        this.mecanico="Guilherme"
        if(ptipo==1){
            this.tipo="Esportivo"
            this.velmax=300
        }else if(ptipo==2){
            this.tipo="Utilitário"
            this.velmax=200
        }else if(ptipo==3){
            this.tipo="Popular"
            this.velmax=180
        }else{
            this.tipo="Militar"
            this.velmax=150
        }
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocicade: ${this.velmax}`)
        console.log(`Mecânico: ${this.mecanico}`)
        console.log("--------------")
    }
    getInfo(){
        return [this.nome,this.tipo,this.velmax]
    }
    setNome(nome){
        this.nome=nome
    }
    setTipo(tipo){
        this.tipo=tipo
    }
    setVelocidade(velmax){
        this.velmax=velmax
    }
}

let c1 = new Carro("Rapidão",1)
let c2 = new Carro("Luxinho",2)
let c3 = new Carro("Bombado",4)
let c4 = new Carro("Baratinha",3)

c1.setTipo("Esportivão")

c1.info()

//console.log(c1.getInfo())
