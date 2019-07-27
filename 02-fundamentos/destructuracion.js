 let deadpool={
     nombre: "wade",
     apellido: "winston",
     poder: "regeneracion",
     getNombre: function(){
         let hola=()=>{

         
         return `${this.nombre} ${this.apellido} - poder:${this.poder}`
         }//Es interesante recalcar que cuando se tiene un objeto con una funcion y adentro se tiene otra funcion el this de la segunda funcion apunta al objeto global con lo cual se deberia utilizar un this o una funciones de flecha para poder resolver este problema.
         return hola();
     }
 };
 console.log(deadpool.getNombre())
 //Destructuracion: 
 let {nombre, apellido, poder} = deadpool;
 console.log(nombre, apellido, poder);
 //Si se desea cambiar una variable el nombre que no sea el mismo nombre de la propiedad se hace de la siguiente manera

let {nombre:nombreDeadpool}=deadpool;
console.log(nombreDeadpool);