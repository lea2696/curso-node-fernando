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

let getEmpleado=(id)=>{
    return new Promise((resolve, reject)=>{

        let empleadoDB =empleados.find(empleado=>empleado.id===id );
        if(!empleadoDB){
            reject(`No existe un empleado con el ID ${id}`);
        }else {
            resolve(empleadoDB)
        }
    })


};

// getEmpleado(10).then(empleado=>console.log(empleado))
// .catch(err=>console.log(err));

let getSalario=(empleado)=>{
    return new Promise((resolve, reject)=>{

            let salarioDB=salarios.find(emp=>{
                if(emp.id===empleado.id){
                    return true
                }
            });
            if(!salarioDB){
                reject(`No se encuentra ningun salario asignado al empleado ${empleado.nombre} `)
            }
           
            resolve({empleado: empleado.nombre,
            id: empleado.id,
        salario: salarioDB.salario}) }


    )};
    getEmpleado(4)
    .then(empleado=>getSalario(empleado))
    .then(salario=>console.log(salario))
    .catch(err=>console.log(err))