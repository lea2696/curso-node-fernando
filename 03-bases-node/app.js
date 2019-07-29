const { argv } = require("./config/yargs");
const colors = require("colors");
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
/*
En node existen varios objetos globales como en el navegador, hasta ahora hemos visto el objeto process y el objeto
module. El yargs permite pasar parametros y comandos y poder acceder a ellos de manera simple, tiene varios valores
que se le puede poner como si son necesarios si son por defecto alias etc. Si no es un parametro sino un comando 
se obtiene en el primer elemento del objeto con el nombre de la propiedad _
*/
let argv2 = process.argv;
let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite);
    break;
  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then(archivo =>
        console.log(`Se ha creado el archivo de nombre ${archivo}`.red)
      )
      .catch(err => console.log(err));

    break;
  default:
    console.log("Comando no reconocido");
}
// let parametros = argv[2]; //Los 2 primeros parametros son la ubicacion de instalacion de node y de la carpeta en la que estamos
