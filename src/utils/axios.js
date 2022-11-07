import axios from "axios";

const instance = axios.create({
  baseURL: "https://fraise-backend.herokuapp.com/",
});

export default instance;
