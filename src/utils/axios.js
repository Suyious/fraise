import axios from "axios";

const baseURL = process.env.NODE_ENV === 'production' ? 
  "https://fraise.onrender.com":
  "http://localhost:8080"

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

console.log(process.env.NODE_ENV);

export default instance;
