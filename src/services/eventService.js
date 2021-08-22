import axios from "axios";

const apiClient = axios.create({
  baseURL: "localhost:8000/api/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getWeights(perPage, page) {
    console.log("perPage", perPage, "page", page);
    return apiClient.get("/users/weights");
  },

  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
};
