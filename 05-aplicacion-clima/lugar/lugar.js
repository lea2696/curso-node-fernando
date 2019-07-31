const axios = require("axios");

const getLugarLatLng = async direccion => {
  const encodeUrl = encodeURI(direccion);
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers: {
      "x-rapidapi-key": "3533d0c00fmsh91ba97496e78ffbp150deajsnb4bc3be6c5a2"
    }
  });

  const response = await instance.get();

  if (response.data.Results.length === 0) {
    throw new Error(`No hay resultados para ${direccion}`);
  }
  const data = response.data.Results[0];
  const { name: lugar, lat, lon: lng } = data;
  return {
    lugar,
    lat,
    lng
  };
};
module.exports = {
  getLugarLatLng
};
