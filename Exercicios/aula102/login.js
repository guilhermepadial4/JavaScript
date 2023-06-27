class Login{
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static endpoint = "https://loginv1padialdev.guilhermepadial.repl.co/";
    //https://loginv1padialdev.guilhermepadial.repl.co/?matricula=123&senha=221
    static login = (mat,pas) => {
        this.endpoint += `?matricula=${mat}&senha=${pas}`;
        fetch(this.endpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado = true;
                this.matlogado = mat;
                this.nomelogado = res.nome;
                this.acessologado = res.acesso;
                console.log(res);
            }else{
                console.log("Usuário não logado.");
            }
        })
    }
}

export{Login};
