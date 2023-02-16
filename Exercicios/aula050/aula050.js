let valores = [1,2]
const op = [
    (val)=>{
        let res = 0
        for (let v of val){
            res += val
            
        }
        return res
    },
    (val)=>{
        let res = 0
        for (let v of val){
            res *= val
            
        }
        return res
    },
    (val)=>{
        for (let v of val){
            console.log(v)
        }
    }
]

console.log(op)