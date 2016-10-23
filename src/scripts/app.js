//应用入口样式文件
import '../styles/usage/page/app.scss';

//引用component
import index from './components/index.vue';
import main from './components/main.vue';
import lee from './components/lee.vue';
import search from './components/search.vue';
import my from './components/my.vue';
import results from './components/results.vue';
//APP route
import Vue from './libs/vue.js';
import VueRouter from './libs/vue-router.js';
import VueResource from './libs/vue-resource.js';

Vue.use(VueResource);
Vue.use(VueRouter);

let router = new VueRouter();
let App = Vue.extend({})

router.map({
  '/':{
    component: index,
    subRoutes:{
      '/':{
        component: main
      },
      '/lee':{
        component: lee
      },
      '/search':{
        component: search
      },
      '/my':{
        component: my
      },
      '/results/:key':{
        name:'results',
        component:results
      }
    }
  }
});

//启动router
router.start(App,'body');
