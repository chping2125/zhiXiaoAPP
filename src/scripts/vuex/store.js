import Vue from '../libs/vue.js';
import Vuex from '../libs/vuex.min.js';
Vue.use(Vuex);
const state = {
  loginPrePath:['/']
};
const mutations ={
  LOGINPREPATH(state,path){
    state.loginPrePath.unshift(path);
  },
  LOGINPREPATHSHIFT(state){
    state.loginPrePath.shift();
  }
};

export default new Vuex.Store({
  state,
  mutations
})
