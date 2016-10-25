<template lang="html">
  <div class="login-content">
    <div class="yo-list">
      <label class="item item-input username">
          <div class=""><input type="text" class="yo-input" v-model="username" v-on:change="uChange" placeholder="手机号" /></div>
      </label>
      <label class="item item-input password">
          <input type="password" class="yo-input" v-model="password" v-on:change="pChange" placeholder="密码" />
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
import {setUser} from '../vuex/actions.js';
Vue.use(VueRouter);
Vue.use(VueResource);
export default {
  data(){
    return {
      username: '',
      password: '',
      loginBtn: 0
    }
  },
  vuex: {
    actions: {
      setLoginPrePath: Vuex.loginPrePath,
      setUser
    }
  },
  methods: {
    uChange(){
      console.log('用户名验证');
      var rex = /^1(3|4|5|7|8)\d{9}$/;
      if(!rex.test(this.username)){
        console.log("手机格式错误");
      }else{
        this.loginBtn = 1;
      }
    },
    pChange(){
      if(this.loginBtn === 1){
        console.log('密码验证');
        var rex = /^[a-zA-Z]\w{5,17}$/;
        if(!rex.test(this.password)){
          console.log("密码为6-18位数字、字母和下划线，且以字母开头");
        }else{
          this.loginBtn =2;
        }
      }else{
        //用户名未验证
        console.log('请填写用户名');
      }
    },
    forget(){
      this.setLoginPrePath({path:this.$route.path,title:'忘记密码'});
      this.$router.go({path:'/index2/forget'});
    },
    register(){
      this.setLoginPrePath({path:this.$route.path,title:'用户注册'});
      this.$router.go({path:'/index2/register'});
    },
    login(){
      if(this.loginBtn===2){
        this.loginBtn = 0;
        this.$http.get("/zhixiao/user",{username:this.username,password:this.password}).then(
          (res)=>{//  success callback
            //mock数据部分 start
            var userData = [];
            var loginTag = false;
            if(res.data.code){
              userData = res.data.data;
              loginTag = userData.some((item)=>{
                return item.username===this.username&&item.password===this.password
              });
            }
            //mock数据部分 end

            if(loginTag){
              //登陆成功
              console.log(66666);
              this.setUser({"username":this.username,"img":"136.jpg"});
              this.username='';
              this.password='';
              this.$router.go({path:'/my'});
            }else{
              //用户名或密码错误
              console.log('用户名或密码错误');
              this.username='';
              this.password='';
            }
          },(res)=>{// error callback
            console.log('网络错误，请稍后重试');
            this.username='';
            this.password='';
          }
        );
      }else if(this.loginBtn===1){
        //密码未验证
        console.log('请填写密码');
      }else{
        //未填写用户名密码
        console.log('请填写用户名密码');
      }
    }
  }
}
</script>
