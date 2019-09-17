<template>
  <div>
    <my-header></my-header>
    <van-nav-bar title="登录" left-text="返回" left-arrow @click-left="onClickLeft" class="top"/>
    <van-cell-group >
      <van-field class="info-lg" v-model="username" label="用户名" placeholder="请输入用户名" maxlength=12 />
      <van-field class="info-lg" type="password" v-model="password" label="密码" placeholder="请输入密码"
      maxlength=12 />
      <!-- <van-field v-model="phone" label="手机号" placeholder="请输入手机号" error-message="手机号格式错误" /> -->
      <!-- <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>-->
    </van-cell-group>
    <van-button @click.stop="login" type="primary" class="btn-lg">登录</van-button>
    <div>
      <p>
        <router-link to="" class="a-font" @click.native="logpho">点击使用手机号登录</router-link>
      </p>
      <div></div>
    </div>
    <div>
      <p>—————使用第三方账号登录—————</p>
      <div>
        <router-link to="" @click.native="toqq">
          <img class="img-icon" src="../../assets/icon/qq.png" alt />
        </router-link>
        <router-link to="" @click.native="tovx">
          <img class="img-icon" src="../../assets/icon/weixin.png" alt />
        </router-link>
        <router-link to="" @click.native="tozfb">
          <img class="img-icon" src="../../assets/icon/zhifubao.png" alt />
       </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      //alert("123")
      let txt = /^[a-z0-9_-]{3,16}$/i;
      let uname = this.username;
      let upwd = this.password;
      if (!txt.test(uname)) {
        this.$toast("用户名格式错误");
        return;
      }
      if (!txt.test(upwd)) {
        this.$toast("密码格式错误");
        return;
      }
      var obj = { uname: uname, upwd: upwd };
      this.axios
        .get("login", { params: obj })
        .then(result => {
          console.log(result.data.code);
          var code = result.data.code;
          if (code == -1) {
            this.$messagebox("提示", "您的用户名或者密码有误");
          } else {
            this.$router.push("/");
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    logpho(){
      this.$router.push("./loginPhone")
    },
    toqq(){
      this.$router.push("./loginqq")
    },
    tovx(){
      this.$router.push("./loginvx")
    },
    tozfb(){
      this.$router.push("./loginzfb")
    },
    onClickLeft() {
      this.$router.push("./")
    }
  }
};
</script>
<style  scoped>
.top{
  top: 28px;
}
.info-lg {
  margin-top: 8%;
  margin-left: 10%;
  width: 80%;
  border: 0.5px solid #aaa;
  border-radius: 24px;
}
.btn-lg {
  margin-top: 8%;
  width: 80%;
  border: none;
  border-radius: 24px;
}
.a-font {
  color: #aaa;
  margin-top: 2%;
  font-size: 14px;
  display: block;
  text-decoration: none;
  margin: 5% 0;
}
.img-icon {
  width: 30px;
  margin-right: 3%;
  margin-top: 7%;
}
</style>