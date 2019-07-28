let getNombre= ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Luis")
        }, 3000);
    })
}
//En este caso se utiliza una funcion directamente y no un await porque el return que daria el setTimeOut seria del callback y no de la promesa
let saludo = async()=>{
    let nombre= await getNombre();
    return `El nombre es ${nombre}`
}

saludo().then(mensaje=>{
    console.log(mensaje)
})
