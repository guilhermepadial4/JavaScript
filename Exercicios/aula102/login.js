class Login{
    
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static stylecss = null
    static acessologado = null;
    static config = {
        cor: "#048",
        img: "./logo.png"
    };

    


    static endpoint = "https://loginv1padialdev.guilhermepadial.repl.co/";
    

    static login = (config=null) => {
        if(config != null){
            this.config = config;
        }

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
            `background-color: ${this.config.cor};`+
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

        const body = document.body;

        const backLogin = document.createElement("div");
        backLogin.setAttribute("id", "back-login");
        backLogin.setAttribute("class", "back-login"); 
        document.body.prepend(backLogin); 

        const baseLogin = document.createElement("div");
        baseLogin.setAttribute("id", "base-login");
        baseLogin.setAttribute("class", "base-login"); 
        backLogin.appendChild(baseLogin); 

        const elementsLogin = document.createElement("div");
        elementsLogin.setAttribute("id", "elements-login");
        elementsLogin.setAttribute("class", "elements-login"); 
        baseLogin.appendChild(elementsLogin); 

        const campLoginUsername = document.createElement("div");
        campLoginUsername.setAttribute("id", "campLoginUsername");
        campLoginUsername.setAttribute("class", "camp-login"); 
        elementsLogin.appendChild(campLoginUsername); 

        const LabelUsername = document.createElement("label");
        LabelUsername.setAttribute("id", "LabelUsername");
        LabelUsername.innerHTML = "Username";
        campLoginUsername.appendChild(LabelUsername); 

        const inputUsername = document.createElement("input");
        inputUsername.setAttribute("id", "inputUsername");
        inputUsername.setAttribute("type", "text")
        inputUsername.setAttribute("name", "f_username")
        campLoginUsername.appendChild(inputUsername); 

        const campLoginPassword = document.createElement("div");
        campLoginPassword.setAttribute("id", "campLoginPassword");
        campLoginPassword.setAttribute("class", "camp-login"); 
        elementsLogin.appendChild(campLoginPassword); 

        const LabelPassword = document.createElement("label");
        LabelPassword.setAttribute("id", "LabelUsername");
        LabelPassword.innerHTML = "Senha";
        campLoginPassword.appendChild(LabelPassword); 

        const inputPassword = document.createElement("input");
        inputPassword.setAttribute("id", "inputPassword");
        inputPassword.setAttribute("type", "password")
        inputPassword.setAttribute("name", "f_password")
        campLoginPassword.appendChild(inputPassword); 
        
        const ButtonsLogin = document.createElement("div");
        ButtonsLogin.setAttribute("id", "ButtonsLogin");
        ButtonsLogin.setAttribute("class", "buttons-login"); 
        elementsLogin.appendChild(ButtonsLogin); 

        const btnLogin = document.createElement("button");
        btnLogin.setAttribute("id", "btn-login");
        btnLogin.innerHTML = "Login";
        btnLogin.addEventListener("click",()=>{
            this.checkLogin();
        });
        ButtonsLogin.appendChild(btnLogin); 

        const btnCancel = document.createElement("button");
        btnCancel.setAttribute("id", "btn-cancel");
        btnCancel.innerHTML = "Cancel";
        btnCancel.addEventListener("click",()=>{
            this.closeLogin();
        });
        ButtonsLogin.appendChild(btnCancel); 

        const soonLogin = document.createElement("div");
        soonLogin.setAttribute("id", "soon-login");
        soonLogin.setAttribute("class", "soon-login"); 
        baseLogin.appendChild(soonLogin); 

        const imgLogin = document.createElement("img");
        imgLogin.setAttribute("src", this.config.img);
        imgLogin.setAttribute("title", "padialdev");
        soonLogin.appendChild(imgLogin); 

        
     }

     static checkLogin = () =>{
        const mat = document.querySelector("#inputUsername").value;
        const pas = document.querySelector("#inputPassword").value;

        const endpoint = `https://loginv1padialdev.guilhermepadial.repl.co/?matricula=${mat}&senha=${pas}`
        
        fetch(endpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado = true;
                this.matlogado = mat;
                this.nomelogado = res.nome;
                this.acessologado = res.acesso;
                this.closeLogin();
            }else{
                this.logado = false;
                this.matlogado = null;
                this.nomelogado = null;
                this.acessologado = null;
                alert("Login não efetuado! Username ou Senha incorretos.");
            }
        })


        // if(mat == "123" && pas == "321"){
        //     return true;
        // }else {
        //     return false;
        // }
     }

     static closeLogin = () => {
        const back_login = document.querySelector("#back-login");
        back_login.remove(); 

        const id_styleLogin = document.querySelector("#id_styleLogin");
        id_styleLogin.remove();

     }
 }
 
export{Login};
