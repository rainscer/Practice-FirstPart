import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count:0
  },
  getters: {
    getCount: (state) =>
    {
      return state.count
    }
  },
  mutations: {
    setCount:(state, count) => state.count = count,
  },
  actions: {},
});
export default store;
