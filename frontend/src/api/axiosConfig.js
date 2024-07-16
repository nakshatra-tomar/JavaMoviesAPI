import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-54-242-49-73.compute-1.amazonaws.com:8081",
});

export default api;
