<template lang="html">
  <div class="box">
    <div class="index-container">
      <div class="yo-header yo-header-normal">
        <h2 class="title">{{title}}</h2>
        <span class="regret" v-on:click="forback">
            <i class="yo-ico">&#xf07d;</i>
            返回
        </span>
    </div>
      <div class="content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import VueRouter from '../libs/vue-router.js';
import Vue from '../libs/vue.js';
Vue.use(VueRouter);
export default {
  data () {
    return {
      title:this.$route.query.title,
      curPath:this.$route.path,
      prePath:this.$route.query.path
    }
  },
  props: ['loginTitle'],
  computed: {},
  mounted () {},
  methods: {
    forback(){
      console.log(this.$route.query.path);
      this.$router.go(this.$route.query.path);
    }
  },
  components: {}
}
</script>
