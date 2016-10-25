<template lang="html">
  <div class="login-content submit-content">
    <div class="yo-list">
      <label class="item item-input username">
          <div class=""><input type="text" class="yo-input" v-model="username" v-on:change="uChange" placeholder="请输入手机号" /></div>
      </label>
      <label class="item item-input yanzheng">
          <input type="text" class="yo-input" v-model="valiCode" v-on:change="vChange"  placeholder="请输入验证码" />
          <span :class="vali? 'active':''" v-on:click="getVali">{{valiText}}</span>
      </label>
      <label class="item item-input newPassword">
          <div class=""><input type="password" class="yo-input" v-model="password" v-on:change="pChange" placeholder="请输入新密码(6-20位字母或数字)" /></div>
      </label>
    </div>
    <div class="submitBtn">
      <button class="yo-btn yo-btn-login">提交</button>
    </div>
  </div>
</template>

<script>
import Vue from '../libs/vue.js';
import VueRouter from '../libs/vue-router.js';
import VueResource from '../libs/vue-resource.js';
import {Vali} from '../util/commonUtil.js';
import {setUser} from '../vuex/actions.js';
import VuexSet from '../vuex/actions.js';
import VuexGet from '../vuex/getters.js';
Vue.use(VueResource);
Vue.use(VueRouter);
export default {
  data(){
    return {
      vali: false,
      valiText: '获取验证码',
      valiCode: '',
      valiCodeback: '',
      valiTimer: 0,
      username: '',
      password: '',
      loginBtn: 0
    }
  },
  vuex: {
    actions: {
      setUser,
      loginPrePathShift: VuexSet.loginPrePathShift
    },
    getters:{
      getLoginPrePath: VuexGet.loginPrePath
    }
  },
  methods: {
    uChange(){
      if(!Vali.username(this.username)){
        console.log("手机号格式错误");
      }else{
        this.$http.get('/zhixiao/username',{username:this.username}).then(
          (res)=>{
            if(res.data.code){
              this.vali = true;
            }else{
              console.log('该用户不存在');
            }
          },(res)=>{
            console.log('网络错误，请稍后重试');
          });
        this.loginBtn = 1;
      }
    },
    getVali(){
      var that = this;
      if(this.vali){
        that.vali =false;
        var i = 60;
        that.valiTimer = setInterval(()=>{
          i--;
          that.valiText = i;
          if(i===0){
            clearInterval(that.valiTimer);
          }
        },1000);

        that.$http.get('/zhixiao/vali').then(
          (res)=>{
            if(res.data.code){
              that.valiCodeback = res.data.message.toString();
              console.log(res.data.message);
            }
          },(res)=>{
            
            console.log('网络错误，请稍后重试');
        });
      }
    },
    vChange(){
      if(this.loginBtn === 1){
        if(this.valiCode !== this.valiCodeback){
          this.valiText ='验证码错误';
        }else{
          this.valiText ='验证码正确';
          clearInterval(this.valiTimer);
          this.loginBtn =2;
        }
      }else{
        //用户名未验证
        console.log('请填写用户名');
      }
    },
    pChange(){
      if(this.loginBtn === 2){
        if(!Vali.password(this.password)){
          console.log("密码为6-18位数字、字母和下划线，且以字母开头");
        }else{
          setTimeout(()=>{
            console.log("修改密码成功，正在跳转登录页面");
            var path = this.getLoginPrePath[0].path;
            this.loginPrePathShift();
            this.$router.go(path);
          },1500);
        }
      }else{
        //验证码未验证
        console.log('请填写验证码');
      }
    }
  }
}
</script>
