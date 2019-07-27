let empleados = [{
    id: 1,
    nombre: "Luis"
},
    {id: 2,
    nombre: "Melissa"
    },
    {id: 3,
    nombre: "Juan"
},
];
let salarios= [{
    id: 1,
    salario: 1000
},
{
    id: 2,
    salario: 2000
}];



// let getEmpleado=(id, callback)=>{
//    let empleadoDB =empleados.find(empleado=>empleado.id===id );
//    if(!empleadoDB){
//        callback(`No existe un empleado con el ID ${id}`);
//    }else {
//        callback(null, empleadoDB)
//    }
// }
let getSalario=(id, callback)=>{
    let empleadoDB=empleados.find(empleado=>empleado.id===id);
    if(!empleadoDB){
        return callback("No se ha encontrado el empleado en la base de datos");
    }
    let salarioDB=salarios.find(empleado=>{
        if(empleado.id===empleadoDB.id){
            return true
        }
    });
    if(!salarioDB){
        return callback(`No se encuentra ningun salario asignado al empleado ${empleadoDB.nombre} `)
    }
    let empleados2={
        nombre: empleadoDB.nombre,
        salario: salarioDB.salario
    }
    callback(null, empleados2);


}

// getEmpleado(2, (err, respuesta)=>console.log(err, respuesta));
getSalario(3, (err, response)=>{
    if(err){
       return  console.log(err)
    }else{
        console.log(response);
    }
})
