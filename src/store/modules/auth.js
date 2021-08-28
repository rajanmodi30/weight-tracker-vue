import axios from "axios";
import authService from "../../services/authService";
const state = {
  bearerToken: null,
  user: null,
};
const getters = {
  deviceName: () => {
    return (
      navigator.platform +
      navigator.userAgent +
      navigator.appVersion +
      navigator.vendor
    );
  },
  isLoggedIn: (state) => {
    return state.user ? true : false;
  },
};
const actions = {
  async login({ commit, getters }, payload) {
    let response = await authService.login({
      email: payload.email,
      password: payload.password,
      token_name: getters.deviceName,
    });
    let data = response.data;
    let user = data.data;
    let token = data.token;
    commit("SET_USER_DATA", user);
    commit("SET_BEARER_TOKEN", token);
    authService.setBearerToken("Bearer " + token);
  },
  async register({ commit }, payload) {
    let response = await authService.register({
      name: payload.name,
      email: payload.email,
      password: payload.password,
      token_name:
        navigator.platform +
        navigator.userAgent +
        navigator.appVersion +
        navigator.vendor,
    });
    let data = response.data;
    let user = data.data;
    let token = data.token;
    commit("SET_USER_DATA", user);
    commit("SET_BEARER_TOKEN", token);
    authService.setBearerToken("Bearer " + token);
  },
  async logOut({ commit }) {
    await authService.logOut();
    authService.removeBearerToken();
    commit("LOGOUT");
  },
};
const mutations = {
  SET_USER_DATA(state, userData) {
    console.log("updating user to", userData);
    state.user = userData;
  },
  SET_BEARER_TOKEN(state, bearerToken) {
    console.log("updating token to", bearerToken);

    state.bearerToken = bearerToken;
  },
  LOGOUT(state) {
    axios.defaults.headers.common["Authorization"] = null;
    state.user = null;
    state.bearerToken = null;
  },
};

const auth = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default auth;
