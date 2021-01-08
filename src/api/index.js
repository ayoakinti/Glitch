import axios from "axios";
import config from "../config/config";

const instance = axios.create({
  baseURL: config.baseURL,
  headers: {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*'
  },
});

export default instance;