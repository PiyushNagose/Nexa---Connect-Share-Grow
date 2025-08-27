const { default: axios } = require("axios");

export const BASE_URL = "https://nexa-connect-share-grow.onrender.com";

const clientServer = axios.create({
  baseURL: BASE_URL,
});

export default clientServer;
