import Vue from "vue";
import Vuex from "vuex";

import accountModule from "@/store/account/accountModule.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    accountModule: accountModule,
  },
});

export default store;
