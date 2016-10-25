<template>
  <div class="box">
    <div class="index-container">
      <router-view>

      </router-view>
    </div>
    <footer id="footer">
      <ul>
        <li v-bind:class="cur == $index ? 'active' : ''"
            v-for="data in navList"
            v-on:click="changePage($index)"
            v-link="{path:data.path}">
          <i class="iconfont">{{{data.icon}}}</i>
          <p>{{{data.name}}}</p>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
  var Vue = require('../libs/vue.js');
  var VueResource = require('../libs/vue-resource.js');
  Vue.use(VueResource);

  export default {
    data(){
      return {
        cur: 0,
        navList:[
          {path:'/',icon:'&#xe6bb;',name:'主页'},
          {path:'/lee',icon:'&#xe664;',name:'排行榜'},
          {path:'/search',icon:'&#xe65c;',name:'发现'},
          {path:'/my',icon:'&#xe735;',name:'我的'}
        ]
      }
    },
    methods:{
      changePage:function(i){
        this.cur = i;
      }
    }
  }
</script>
