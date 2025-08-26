const { default: axios } = require("axios");

export const BASE_URL = "http://localhost:8000";

const clientServer = axios.create({
  baseURL: BASE_URL,
});

export default clientServer;
