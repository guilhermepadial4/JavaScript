import { Login } from "./login.js";
import { Cxmsg } from "../aula101/cxmsg.js";

const callback_ok = () => {
    
}

const callback_notok = () => {
    const config = {
        cor: "#800",
        tipo:"ok",
        textos:null,
        comando_sn:null,
        
    }
    Cxmsg.mostrar(config,"Erro","Login não efetuado! Username ou Senha incorretos.");   
}

Login.login(callback_ok,callback_notok); 
