import axios from "axios";

const api = axios.create({
  baseURL: "https://travel-explorer-backend-1.onrender.com/",
});

export default api;
