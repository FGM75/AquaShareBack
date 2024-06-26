require("dotenv").config();
const fetch = require("node-fetch");

const urlAPI = process.env.API_URL_OPENDATA;

const getDatosAPIOpenData = async () => {
  const resp = await fetch(urlAPI);
  const { features } = await resp.json();
  return features;
};

module.exports = {
  getDatosAPIOpenData,
};
