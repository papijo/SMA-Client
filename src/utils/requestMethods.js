import axios from "axios";

// const BASE_URL = `http://localhost:8000/api`;
const BASE_URL = `https://fb-clone-sma.herokuapp.com/api`;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
