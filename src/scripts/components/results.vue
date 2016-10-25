<template>
  <section class="results-container">
    <div class="results-ser">
      <img src="/images/lxn/results/back.png" class="search-backicon" v-link="{path:'/search'}"/>
      <span class="results-moni">
        <input type="text" v-bind:placeholder="isDel ? '' : key" autofocus="autofocus"/>
        <img src="/images/lxn/results/delete_interest.png" class="close-intere" v-on:click="delAction"/>
      </span>
      <img src="/images/lxn/results/search.png" class="results-ser-icon"/>
    </div>
    <div class="results-scroll" id="results-scroll">
      <div class="results-scroll-wrap">
        <ul>
          <li v-for="items in findAll">
            <div class="results_left">
              <p>{{items.contain}}</p>
              <div>
                <span>{{items.from}}</span>
                <span>阅读<em>{{items.readNum}}</em></span>
              </div>
            </div>
            <div class="results-right">
              <img v-bind:src="items.img"/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script type="text/javascript">
import Vue from '../libs/vue.js';
import VueRouter from '../libs/vue-router.js';
import VueResource from '../libs/vue-resource.js';
import utilFuntion from '../libs/utils.js';
Vue.use(VueResource);
Vue.use(VueRouter);
export default{
  data(){
    return {
      key:'',
      id:0,
      isDel:false,
      findAll:[]
    }
  },
  ready:function(){
    var that=this;
    this.key=this.$route.params.key;
    console.log(this.key);
    this.$http.get("/mock/lxn/list.json").then(
      (res)=>{
        that.findAll=utilFuntion.serAction(that.key,res.data);
      }
    )
    setTimeout(function(){
      new IScroll("#results-scroll");
    },500);
  },
  methods:{
    delAction(){
      this.isDel=true;
    }
  }
}
</script>
