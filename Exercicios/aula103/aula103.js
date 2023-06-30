const endpoint = "products.json";

const datagridview = () =>{
    
}

fetch(endpoint)
.then(res => res.json())
.then(res =>{
    console.log(res)
})