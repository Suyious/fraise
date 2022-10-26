import axios from "axios";

const instance = axios.create({
  baseURL: "https://fraise-backend.herokuapp.com/",
});

const instanc = axios.create({
  baseURL: "https://newsapi.org/v2/"
})

const requests = {}

export default instance;
