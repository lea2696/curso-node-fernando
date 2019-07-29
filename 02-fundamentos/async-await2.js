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
let getEmpleado=async(id)=>{
 

        let empleadoDB =empleados.find(empleado=>empleado.id===id );
        if(!empleadoDB){
            throw new Error(`No existe un empleado con el ID ${id}`);
        }else {
            return empleadoDB
        }
  


};

// getEmpleado(10).then(empleado=>console.log(empleado))
// .catch(err=>console.log(err));

let getSalario=async(empleado)=>{


            let salarioDB=salarios.find(emp=>{
                if(emp.id===empleado.id){
                    return true
                }
            });
            if(!salarioDB){
                throw new Error(`No se encuentra ningun salario asignado al empleado ${empleado.nombre} `)
            }
           
            return ({empleado: empleado.nombre,
            id: empleado.id,
        salario: salarioDB.salario}) 


    };
    getEmpleado(4)
    .then(empleado=>getSalario(empleado))
    .then(salario=>console.log(salario))
    .catch(err=>console.log(err))

    let getInformacion = async (id)=>{
        let empleado = await getEmpleado(id);
        let resp=await getSalario(empleado);
        return `${resp.empleado} tiene un salario de ${resp.salario}$`
    };
    getInformacion(3)
    .then(data=>console.log(data))
    .catch(err=> console.log(err));