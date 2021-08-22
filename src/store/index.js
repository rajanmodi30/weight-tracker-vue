import { createStore } from "vuex";
import auth from "./modules/auth";
import weight from "./modules/weight";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});
export default createStore({
  modules: {
    auth,
    weight,
  },
  plugins: [vuexLocal.plugin],
});
