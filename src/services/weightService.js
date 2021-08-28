import apiClient from "./axiosManage";

export default {
  getWeights(perPage, page) {
    console.log("perPage", perPage, "page", page);
    return apiClient.get("/users/weights");
  },

  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
};
