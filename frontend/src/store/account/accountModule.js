import Vue from "vue";
import Vuex from "vuex";

import actions from "@/store/account/actions.js";

Vue.use(Vuex);

const accountModule = {
  namespaced: true,
  actions,
};

export default accountModule;
