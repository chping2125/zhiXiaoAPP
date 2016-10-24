<template>
  <div class="my-container">
    <div class="yo-header yo-header-normal">
      <h2 class="title">{{title}}</h2>
    </div>
    <div class="content">
      <div>
        <div class="first one">
          <div class="left">
            <div><img src="/images/my/user_notlogin_head.png" alt="" /></div>
            <span>未登录</span>
          </div>
          <div class="right">
            <button v-on:click="goLogin">登陆/注册</button>
          </div>
        </div>
        <div class="two">
          <div class="left">
            <span><img src="/images/my/user_invite.png" alt="" /></span>
            <i>邀请好友</i>
          </div>
          <div class="right">
            <span></span>
          </div>
        </div>
      </div>
      <div>
        <div class="first">
          <div class="left">
            <span><img src="/images/my/user_news.png" alt="" /></span>
            <i>我的消息</i>
          </div>
          <div class="right">
            <span></span>
          </div>
        </div>
        <div  class="two">
          <div class="left">
            <span><img src="/images/my/user_collect.png" alt="" /></span>
            <i>我的收藏</i>
          </div>
          <div class="right">
            <span></span>
          </div>
        </div>
        <div class="three">
          <div class="left">
            <span><img src="/images/my/user_history.png" alt="" /></span>
            <i>阅读历史</i>
          </div>
          <div class="right">
            <span></span>
          </div>
        </div>
      </div>
      <div>
        <div class="first">
          <div class="left">
            <span><img src="/images/my/user_task.png" alt="" /></span>
            <i>任务中心</i>
          </div>
          <div class="right">
            <span></span>
          </div>
        </div>
        <div  class="two">
          <div class="left">
            <span><img src="/images/my/user_exchange.png" alt="" /></span>
            <i>兑换中心</i>
          </div>
          <div class="right">
            <span></span>
          </div>
        </div>
        <div class="three">
          <div class="left">
            <span><img src="/images/my/user_income.png" alt="" /></span>
            <i>收支明细</i>
          </div>
          <div class="right">
            <span></span>
          </div>
        </div>
      </div>
      <div>
        <div class="first">
          <div class="left">
            <span><img src="/images/my/user_feedback.png" alt="" /></span>
            <i>有奖反馈</i>
          </div>
          <div class="right">
            <span></span>
          </div>
        </div>
        <div  class="two">
          <div class="left">
            <span><img src="/images/my/user_setting.png" alt="" /></span>
            <i>设置</i>
          </div>
          <div class="right">
            <span></span>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from '../libs/vue.js';
  import VueRouter from '../libs/vue-router.js';
  import Vuex from '../vuex/actions.js';
  Vue.use(VueRouter);
  export default {
    vuex: {
      actions: {
        setLoginPrePath: Vuex.loginPrePath
      }
    },
    data(){
      return {
        title:'我的'
      }
    },
    methods:{
      goLogin(){
        this.setLoginPrePath({path:this.$route.path,title:'登录'});
        this.$router.go({ name: 'login'})
      }
    }
  }
</script>
