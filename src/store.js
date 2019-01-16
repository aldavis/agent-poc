import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPolicy: null
  },
  mutations: {
    SET_CURRENT_POLICY(state, policy) {
      state.currentPolicy = policy;
    }
  },
  actions: {
    setCurrentPolicy(context, policy) {
      context.commit("SET_CURRENT_POLICY", policy);
    }
  }
});
