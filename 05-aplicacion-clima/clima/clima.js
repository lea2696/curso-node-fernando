const axios = require("axios");

const getClima = async (lat, lng) => {
  const temp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=bfcfe9ce6c33c48b086ef070a793d311
    `);
  return temp.data.main.temp;
};
module.exports = {
  getClima
};
