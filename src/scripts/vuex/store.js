import Vue from '../libs/vue.js';
import Vuex from '../libs/vuex.min.js';
Vue.use(Vuex);
const state = {
  loginPrePath:['/'],
  indexCurPage:0,
  user:{}
};
const mutations ={
  LOGINPREPATH(state,path){
    state.loginPrePath.unshift(path);
  },
  LOGINPREPATHSHIFT(state){
    state.loginPrePath.shift();
  },
  SETINDEXCURPAGE(state,index){
    state.indexCurPage = index;
  },
  SETUSER(state,user){
    state.user = user;
  }
};

export default new Vuex.Store({
  state,
  mutations
})
