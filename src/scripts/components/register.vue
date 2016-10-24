<template lang="html">
  <div class="login-content submit-content regiter-content">
    <div class="yo-list">
      <label class="item item-input username">
          <div class=""><input type="text" class="yo-input" placeholder="请输入手机号" /></div>
      </label>
      <label class="item item-input yanzheng">
          <input type="text" class="yo-input" placeholder="请输入验证码" />
          <span v-on:click="forget">获取验证码</span>
      </label>
      <label class="item item-input newPassword">
          <div class=""><input type="password" class="yo-input" placeholder="请输入新密码(6-20位字母或数字)" /></div>
      </label>
    </div>
    <div class="userProtocol">
      <span class="">
        <input type="checkbox" name="project" checked />
        <!-- <span class="type"></span> -->
      </span>
      <span class="text">已阅读并同意<a href="https://www.baidu.com">《用户协议》</a></span>
    </div>
    <div class="submitBtn">
      <button class="yo-btn yo-btn-login">注册</button>
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
