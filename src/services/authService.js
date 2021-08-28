import apiClient from "./axiosManage";

export default {
  login(credentials) {
    return apiClient.post("/users/login", credentials);
  },
  register(credentials) {
    return apiClient.post("/users/register", credentials);
  },
  logOut() {
    return apiClient.get("/users/log/out");
  },
  setBearerToken(bearerToken) {
    apiClient.interceptors.request.use(function(config) {
      config.headers.Authorization = bearerToken;
      return config;
    });
  },
  removeBearerToken() {
    apiClient.interceptors.request.use(function(config) {
      config.headers.Authorization = null;
      return config;
    });
  },
};
