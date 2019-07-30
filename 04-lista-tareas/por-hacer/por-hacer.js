const fs = require("fs");
const colors = require("colors");
let listadoPorHacer = [];

//Guardar todos los cambiamos que hemos hechos a listadoPorHacer al JSON
const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);
  fs.writeFile("./DB/data.json", data, err => {
    if (!err) {
      return console.log("Se ha enviado a la base de datos exitosamente");
    } else {
      console.log(err);
    }
  });
};
//Carga la base de datos desde el json y que se almacene en la variable listadoPorHacer
const cargarDB = () => {
  try {
    listadoPorHacer = require("../DB/data.json");
  } catch (error) {
    listadoPorHacer = [];
  }
};
getListado = () => {
  cargarDB();
  for (let i = 0; i < listadoPorHacer.length; i++) {
    console.log("=======Por hacer========".green);
    console.log(listadoPorHacer[i].descripcion);
    console.log("Estado:" + listadoPorHacer[i].completado);
    console.log("========================".green);
  }
};
const crear = descripcion => {
  cargarDB();
  let porHacer = {
    descripcion,
    completado: false
  };
  listadoPorHacer.push(porHacer);
  guardarDB();
  return porHacer;
};

const actualizar = (descripcion, completado = true) => {
  cargarDB();
  let index = listadoPorHacer.findIndex(
    data => data.descripcion == descripcion
  );
  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDB();
  }
};
borrarTarea = descripcion => {
  cargarDB();

  let index = listadoPorHacer.findIndex(
    data => data.descripcion == descripcion
  );
  if (index >= 0) {
    listadoPorHacer.splice(index, 1);
    guardarDB();
    return true;
  } else {
    console.log(
      `No se ha encontrado ninguna tarea almacenada con el nombre ${descripcion} `
    );
    return false;
  }
};
borrarTodo = todo => {
  cargarDB();
  if (todo == "true") {
    listadoPorHacer = [];
    guardarDB();
    return true;
  } else {
    return false;
  }
};

module.exports = {
  crear,
  getListado,
  actualizar,
  borrarTodo,
  borrarTarea
};
