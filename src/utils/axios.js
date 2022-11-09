import axios from "axios";

const instance = axios.create({
  // baseURL: "https://fraise-backend.herokuapp.com/",
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

export default instance;
