<template>
  <div class="bg-img">
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="container">
      <div>
        <img src="../../assets/icon/zhifubao1.png" alt />
      </div>
      <div class="top-span">
        <span class="top-span-first">支付宝</span>
      </div>
      <div class="md-span">
        <span>登录后将获得以下权限</span>
      </div>
      <div class="floor-span">
        <span>获得您的公开信息(昵称、头像、地区以及性别)</span>
      </div>
      <van-button color="#FF8D1A">登录</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.push("/login");
    }
  }
};
</script>
<style  scoped>
.bg-img {
  width: 100%;
  min-height: 736px;
  position: absolute;
  background-color: rgba(168, 229, 247, 0.5);
  /* background-image: url("../../assets/img/backgroun-login.jpg");
  background-repeat: no-repeat;*/
  z-index: -2;
}

.container {
  width: 72%;
  padding:0 50px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 160px;
}
.container img {
  width: 60px;
  margin-bottom: 3%;
  z-index: 33;
}

.top-span {
  color: #666;
  font-size: 16px;
  display: block;
  z-index: 33;
  border-bottom: 1px solid #aaa;
}
.top-span-first {
  display: block;
  margin-bottom: 7%;
}
.md-span {
  margin-top: 5%;
  font-size: 14px;
  color: #333;
  margin-bottom: 5%;
}
.floor-span > span {
  display: block;
  font-size: 10px;
  margin-bottom: 10%;
}
</style>