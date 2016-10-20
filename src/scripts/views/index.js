//加载模板
import strTepls from '../tpls/index.string';
import commonUtil from '../util/commonUtil.js';
commonUtil.render('body',strTepls);


//Vue  && Vue-plugins
var Vue = require('../libs/vue.js');
var VueResource = require('../libs/vue-resource.js');
Vue.use(VueResource);

var vm = new Vue({
  el:'#app',
  data:{
    message:'hello vue'
  }
});
