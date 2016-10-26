<template>
  <section>
    <div class="details-header">
      <img src="/images/lxn/results/back.png" class="details-search-backicon" v-on:click="backBtnAction"/>
      <p class="details-moni">
        {{perContain.desc}}
      </p>
      <img src="/images/lxn/details/share.png" class="share-ser-icon"/>
    </div>
    <div id="detailsScroll-wrap">
      <div class="detais-core">
          <p class="title-p">
            {{perContain.desc}}
          </p>
          <img v-bind:src="perContain.img" alt="这是一张图片" />
          <p>
            {{perContain.contain}}
          </p>
          <img v-bind:src="perContain.img1" alt="这是第二张图片" />
          <p>
            {{perContain.contain}}
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
import getVuex from '../vuex/getters.js';
export default{
  vuex:{
    actions:{
      detailsPathShift:vuex.detailsPathShift
    },
    getters:{
      detailsPath:getVuex.detailsPath
    }
  },
  data(){
    return {
      perContain:{},
      id:this.$route.query.id
    }
  },
  ready:function(){
    this.$http.get("/mock/lxn/list.json",{id:this.id}).then(
      (res)=>{
        setTimeout(function(){
          new IScroll("#detailsScroll-wrap",{
              bounce:false,
              click:true,
              mouseWheel:true,
              probeType:3
          });
        },500);
        for(var i=0;i<res.data.length;i++){
          if(res.data[i].id==this.id){
            this.perContain=res.data[i];
            return;
          }
        }
      }
    )
  },
  methods:{
    backBtnAction(){
      console.log(0);
      var path = this.detailsPath[0].path;
      this.detailsPathShift();
      this.$router.go(path);
    }
  }
}
</script>
