<template lang="html">
  <div class="login-content">
    <div class="yo-list">
      <label class="item item-input username">
          <div class=""><input type="text" class="yo-input" placeholder="手机号" /></div>
      </label>
      <label class="item item-input password">
          <input type="password" class="yo-input" placeholder="密码" />
          <span v-on:click="forget">忘记密码？</span>
      </label>
    </div>
    <div class="loginBtn">
      <button class="yo-btn yo-btn-login">登录</button>
    </div>
    <div class="registerBtn">
      <button class="yo-btn yo-btn-regiter" v-link="{path:'/index2/register',query:{path:this.$route.path,title:'注册'}}">注册新用户</button>
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
      title:this.$route.params.title,
      curPath:this.$route.path,
      prePath:this.$route.query.path
    }
  },
  computed: {},
  mounted () {},
  methods: {
    forget(){
      this.$router.go({
        path:'/index2/forget',
        query:{
          title:'忘记密码',
          path:this.$route.path
        }
      });
    }
  },
  components: {}
}
</script>
