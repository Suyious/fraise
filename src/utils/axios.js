import axios from "axios";

const baseURL = process.env.NODE_ENV === 'production' ? 
  "https://fraise.onrender.com":
  // "https://fraise.up.railway.app":
  "http://localhost:8080"

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export default instance;
