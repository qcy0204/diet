<template>
  <div>
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-field
        v-model="phone"
        label="手机号"
        placeholder="请输入手机号"
        maxlength="11"
        :error-message="errormessagePho"
      />
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
      <van-button slot="button" :disabled="time!=60" type="primary" @click="sendmsg">{{time==60?"获取验证码":`${time}s后可重新获取`}}</van-button>
      </van-field>
      <van-button size="large
      " type="primary" @click="gologin">点击登录</van-button>
    </van-cell-group>
  </div>
</template>
<script>
import { setInterval, clearInterval } from "timers";
export default {
  data() {
    return {
      phone: "",
      sms: "",
      errormessagePho: "",
      time: 60
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/login");
    },
    gologin() {
      let reg = /^1[3-9]\d{9}$/;
      let pho = this.phone;
      if (!reg.test(pho)) {
        this.$toast("手机格式不正确");
        return;
      }
    },
  sendmsg(){
      //如果还没有启动倒计时，才能执行后续操作
      if(this.time==60){
        //立刻将timer改为9，引发界面内容和样式的自动变化
        this.time=59;
        //启动定时器，并保存定时器序号
        //必须用箭头函数，因为希望定时器中也能用外部的Vue中的this！
        var n=setInterval(()=>{
          //如果倒计时还没有到0
          if(this.time>0){
            this.time--;//才能继续-1
          }else{//否则如果已经到0了
            this.time=60;//将timer重置回10，引发界面内容和样式回复原样！
            //在倒计时结束时，一定要停止本次定时器，否则再点第二次，第三次，会导致多个定时器叠加！同时操作this.timer!倒计时就不准了！
            clearInterval(n);
          }
        },1000)
      }
    }
  }
};
</script>
<style  scoped>
 a{
      padding:5px 10px;
      border:1px solid #aaa;
      text-decoration: none;
    }
    a.disabled{
      background-color:#aaa;
      color:#555;
    }
</style>