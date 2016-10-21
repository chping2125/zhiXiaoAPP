//应用入口样式文件
import '../styles/usage/page/app.scss';

//引用component
import index from './components/index.vue';

//APP route
import Vue from './libs/vue.js';
import VueRouter from './libs/vue-router.js';
Vue.use(VueRouter);

let router = new VueRouter();
let App = Vue.extend({})

router.map({
  '/':{
    component: index
  }
});

//启动router
router.start(App,'body');
