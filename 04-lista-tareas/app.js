const { argv } = require("./config/yargs");
const {
  crear: porHacer,
  getListado,
  actualizar,
  borrarTarea,
  borrarTodo
} = require("./por-hacer/por-hacer");

let comando = argv._[0];

switch (comando) {
  case "listar":
    let listado = getListado();
    break;
  case "crear":
    let tarea = porHacer(argv.tarea);
    console.log(tarea);
    break;
  case "actualizar":
    actualizar(argv.tarea, argv.completada);
    break;
  case "borrar":
    let estado = borrarTarea(argv.tarea, argv.all);
    console.log(estado);
    break;
  case "borrarTodo":
    let borrar = borrarTodo(argv.todo);
    console.log(borrar);
    break;
  default:
    console.log("Comando no reconocido");
}
