import { contatos } from "./bancoContatos.js"

let contato={
    getTodosContatos:function(){
        return contatos
    },
    getContato:function(i_cont){
        return contatos[i_cont]
    },
    addContato:function(novoContado,destinoDom){

    }
}

export default contato