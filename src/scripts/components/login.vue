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
      <button class="yo-btn yo-btn-login" v-on:click="login">登录</button>
    </div>
    <div class="registerBtn">
      <button class="yo-btn yo-btn-regiter" v-on:click="register">注册新用户</button>
    </div>
  </div>
</template>

<script>
import Vue from '../libs/vue.js';
import VueRouter from '../libs/vue-router.js';
import VueResource from '../libs/vue-resource.js';
import Vuex from '../vuex/actions.js';
Vue.use(VueRouter);
Vue.use(VueResource);
export default {
  vuex: {
    actions: {
      setLoginPrePath: Vuex.loginPrePath
    }
  },
  methods: {
    forget(){
      this.setLoginPrePath(this.$route.path);
      this.$router.go({path:'/index2/forget'});
    },
    register(){
      this.setLoginPrePath(this.$route.path);
      this.$router.go({path:'/index2/register'});
    },
    login(){
      this.$http.get("/zhixiao/user").then(
        (res)=>{
          console.log(res);
        }
      )
    }
  }
}
</script>
