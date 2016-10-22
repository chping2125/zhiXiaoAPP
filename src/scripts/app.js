//应用入口样式文件
import '../styles/usage/page/app.scss';

//引用component
import index from './components/index.vue';
import index2 from './components/index2.vue';
import main from './components/main.vue';
import lee from './components/lee.vue';
import search from './components/search.vue';
import my from './components/my.vue';
import login from './components/login.vue';
import register from './components/register.vue';
import forget from './components/forget.vue';

//APP route
import Vue from './libs/vue.js';
import VueRouter from './libs/vue-router.js';
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
      }
    }
  },
  '/index2':{
    component: index2,
    name:'index2',
    subRoutes:{
      '/login':{
        name:'login',
        component:login,
        name:'login'
      },
      '/register':{
        component: register
      },
      '/forget':{
        component: forget
      }
    }
  }
});

//启动router
router.start(App,'body');
