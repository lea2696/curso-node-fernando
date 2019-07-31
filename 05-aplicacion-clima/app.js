const { getLugarLatLng } = require("./lugar/lugar");
const { getClima } = require("./clima/clima");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Direccion de la ciudad para obtener el clima",
    demand: true
  }
}).argv;

//Esto permite pasar la url como segura
const obtenerClima = async direccion => {
  try {
    const lugar = await getLugarLatLng(direccion);
    const clima = await getClima(lugar.lat, lugar.lng);
    return {
      lugar,
      clima
    };
  } catch (err) {
    console.log(`Se ha obtenido un error ${err}`);
  }
};
obtenerClima(argv.direccion).then(data => {
  console.log(
    `La temperatura en ${data.lugar.lugar} es ${data.clima - 273.15}`
  );
});
// getLugarLatLng(argv.direccion)
//   .then(data =>
//     console.log(`La temperatura de ${data.lugar} es de ${data.temperatura}`)
//   )
//   .catch(err =>
//     console.log(`No se pudo determinar la temperatura de ${argv.direccion}`)
//   );
