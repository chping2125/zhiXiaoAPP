import Vue from '../libs/vue.js';
import Vuex from '../libs/vuex.min.js';
Vue.use(Vuex);
const state = {
  loginPrePath:['/'],
  detailsPath:['/'],
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
  },
  DETAILSACTION(state,path){
    state.detailsPath.unshift(path);
  },
  DETAILSACTIONSHIFT(state,path){
    state.detailsPath.shift();
  }
};

export default new Vuex.Store({
  state,
  mutations
})
