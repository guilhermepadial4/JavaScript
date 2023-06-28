class Login{
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static stylecss = null
    static acessologado = null;
    static endpoint = "https://loginv1padialdev.guilhermepadial.repl.co/";
    //https://loginv1padialdev.guilhermepadial.repl.co/?matricula=123&senha=221
    static login = (mat,pas) => {
         this.endpoint += `?matricula=${mat}&senha=${pas}`;

         this.stylecss =

         '.back-login{'+
            'display: flex;'+
            'justify-content: center;'+
            'align-items: center;'+
            'width: 100%;'+
            'height: 100vh;'+
            'position: absolute;'+
            'top: 0px;'+
            'left: 0px;'+
            'background-color: rgba(0, 0, 0, 0.75);'+
            'box-sizing: border-box;'+
        '}'+
        
        '.base-login{'+
            'display: flex;'+
            'justify-content: center;'+
            'align-items: stretch;'+
            'width: 50%;'+
            'box-sizing: inherit;'+
        '}'+
        
        '.elements-login{'+
            'display: flex;'+
            'justify-content: center;'+
            'align-items: flex-start;'+
            'flex-direction: column;'+
            'width: 50%;'+
            'background-color: #eee;'+
            'padding: 10px;'+
            'border-radius: 10px 0px 0px 10px;'+
            'box-sizing: inherit;'+
        '}'+
        
        '.soon-login{'+
            'display: flex;'+
            'justify-content: center;'+
            'align-items: center;'+
            'width: 50%;'+
            'background-color: #bbb;'+
            'padding: 10px;'+
            'border-radius: 0px 10px 10px 0px;'+
            'box-sizing: inherit;'+
        '}'+
        
        '.soon-login img{'+
            'width: 90%;'+
            'box-sizing: inherit;'+
        '}'+
        
        '.camp-login{'+
            'display: flex;'+
            'justify-content: flex-start;'+
            'align-items: flex-start;'+
            'flex-direction: column;'+
            'box-sizing: inherit;'+
            'margin-bottom: 8px;'+
        '}'+
        
        '.camp-login label{'+
            'font-size: 18px;'+
        '}'+
        
        '.camp-login input{'+
            'font-size: 18px;'+
            'padding: 5px;'+
            'background-color: #fff;'+
            'border-radius: 5px;'+
        '}'+
        
        '.buttons-login{'+
            'display: flex;'+
            'justify-content: space-around;'+
            'align-items: center;'+
            'width: 100%;'+
            'box-sizing: inherit;'+
        '}'+
        
        '.buttons-login button{'+
            'cursor: pointer;'+
            'background-color: #048;'+
            'color: #fff;'+
            'border-radius: 5px;'+
            'padding: 10px;'+
            'width: 100px;'+
            'box-sizing: inherit;'+
        '}'

        const linkStyle = document.createElement("style");
        linkStyle.setAttribute("id", "id_styleLogin");
        linkStyle.setAttribute("rel", "stylesheet");
        linkStyle.setAttribute("type", "text/css");
        linkStyle.innerHTML = this.stylecss;
        document.head.appendChild(linkStyle);

        // fetch(this.endpoint)
        // .then(res=>res.json())
        // .then(res=>{
        //     if(res){
        //         this.logado = true;
        //         this.matlogado = mat;
        //         this.nomelogado = res.nome;
        //         this.acessologado = res.acesso;
        //         console.log(res);
        //     }else{
        //         console.log("Usuário não logado.");
        //     }
        // })
     }
 }

export{Login};
