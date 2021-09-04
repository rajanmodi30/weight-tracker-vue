import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.API_KEY,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default apiClient;
