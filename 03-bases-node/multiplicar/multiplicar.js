const fs = require("fs");
const colors = require("colors");

let listarTabla = (base, limite) => {
  console.log(`=================`.green);
  console.log(`Tabla del ${base}`.green);
  console.log(`=================`.green);
  for (let i = 1; i <= limite; i++) {
    console.log(`${i} * ${base} = ${i * base}`);
  }
};

let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject("ERROR: No es un numero");
      return false;
    }
    let data = "";
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i} \n`;
    }
    fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, data, err => {
      if (err) reject(err);
      else resolve(`tablas/tabla-del-${base}-al-${limite}.txt`);
    });
  });
};
module.exports = {
  crearArchivo,
  listarTabla
};
