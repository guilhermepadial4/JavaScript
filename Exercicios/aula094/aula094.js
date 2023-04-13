const f_texto=document.querySelector("#f_texto");
const p_texto=document.querySelector("#p_texto");
const btn_texto=document.querySelector("#btn_texto");

btn_texto.addEventListener("click",(evt)=>{

});

let num=10;

window.localStorage.setItem("nome","Guilherme");
window.localStorage.setItem("curso","Javascript");
window.localStorage.setItem("numero",num);
//alert(localStorage.length);
//alert(localStorage.getItem(localStorage.key(0)));
// alert(window.localStorage.getItem("nome"));
// alert(window.localStorage.getItem("curso"));
// alert(window.localStorage.getItem("numero"));

localStorage.clear()

sessionStorage.setItem("nome","Guilherme");
sessionStorage.setItem("curso","Javascript");
sessionStorage.setItem("numero",num);
