<template>
  <section>
    <div class="details-header">
      <img src="/images/lxn/results/back.png" class="search-backicon" v-link="{path:'/search'}"/>
      <span class="results-moni">
        {{desc}}
      </span>
      <img src="/images/lxn/results/search.png" class="results-ser-icon"/>
    </div>
    <div id="detailsScroll-wrap">
      <div>
          <img v-bind:src="imgSrc1" alt="这是一张图片" />
          <p>
            {{desc}}
          </p>
          <img v-bind:src="imgSrc2" alt="这是第二张图片" />
          <p>
            {{text}}
          </p>
      </div>
    </div>
  </section>
</template>
<script type="text/javascript">
import Vue from '../libs/vue.js';
import VueRouter from '../libs/vue-router.js';
import VueResource from '../libs/vue-resource.js';
import utilFuntion from '../libs/utils.js';
import vuex from "../vuex/actions.js";

export default{
  vuex:{
    actions:{
      setDetailsPath:vuex.detailsPath
    }
  },
  data(){
    return {

    }
  },
  ready:function(){

  },
  methods:{

  }
}
</script>
