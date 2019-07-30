const tarea = {
  alias: "d",
  demand: true,
  desc: "Descripcion de la tarea por hacer"
};
const confCrear = {
  tarea
};
const confBorrar = {
  tarea
};
const confBorrarTodo = {
  todo: {
    alias: "a",
    demand: true,
    desc:
      "Borra toda la base de datos, para borrar toda la base de datos tienes que ingresar true"
  }
};
const confActualizar = {
  tarea,
  completada: {
    alias: "c",
    default: true,
    desc:
      "Define si la tarea esta completada o no, el valor por default es true"
  }
};

const argv = require("yargs")
  .command(
    "crear",
    "Crea una tarea por hacer y la añade a la lista de tareas pendientes",
    confCrear
  )
  .command(
    "actualizar",
    "Actualiza una tarea por hacer quitandola de la lista",
    confActualizar
  )
  .command("borrar", "Borra una tarea que el usuario colocque", confBorrar)
  .command("borrarTodo", "Borra toda la base de datos", confBorrarTodo)
  .help().argv;

module.exports = {
  argv
};
