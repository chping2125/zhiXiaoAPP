//应用入口样式文件
import '../styles/usage/page/app.scss';

//引用component
import index from './components/index.vue';
import index2 from './components/index2.vue';
import main from './components/main.vue';
import lee from './components/lee.vue';
import hotUser from './components/hotuser.vue';
import search from './components/search.vue';
import my from './components/my.vue';
import ssys from './components/ssys.vue';
import results from './components/results.vue';
import login from './components/login.vue';
import register from './components/register.vue';
import forget from './components/forget.vue';

//APP route
import Vue from './libs/vue.js';
import VueRouter from './libs/vue-router.js';
import VueResource from './libs/vue-resource.js';

Vue.use(VueResource);
Vue.use(VueRouter);

//Vuex
import store from './vuex/store.js';

let router = new VueRouter();
let App = Vue.extend({
  store: store
});

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
  },
  '/qqq':{
    component:ssys
  },
  '/hotuser':{
		component: hotUser
	}
});

//启动router
router.start(App,'body');
