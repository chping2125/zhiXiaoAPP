<template lang="html">
  <div class="login-content submit-content">
    <div class="yo-list">
      <label class="item item-input username">
          <div class=""><input type="text" class="yo-input" placeholder="请输入手机号" /></div>
      </label>
      <label class="item item-input yanzheng">
          <input type="text" class="yo-input" placeholder="请输入验证码" />
          <span>获取验证码</span>
      </label>
      <label class="item item-input newPassword">
          <div class=""><input type="password" class="yo-input" placeholder="请输入新密码(6-20位字母或数字)" /></div>
      </label>
    </div>
    <div class="submitBtn">
      <button class="yo-btn yo-btn-login">提交</button>
    </div>
  </div>
</template>

<script>
import VueRouter from '../libs/vue-router.js';
import Vue from '../libs/vue.js';
Vue.use(VueRouter);
export default {
  methods: {

  }
}
</script>
