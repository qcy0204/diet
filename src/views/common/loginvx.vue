<template>
  <div class="bg-img">
    <div class="bg-img-before">
      <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" />
      <div class="container">
        <div>
          <img src="../../assets/icon/weixin1.png" alt />
        </div>
        <div class="top-span">
          <span>微信</span>
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
  background-image: url("../../assets/img/backgroun-login.jpg");
  background-repeat: no-repeat;
  z-index: -2;
}
.bg-img::after {
  content: "";
  background-color: rgba(207, 206, 206, 0.2);
  clear: both;
  height: 736px;
  z-index: -1;
}
.container {
  width: 72%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 160px;
}
.container img {
  width: 60px;
  margin-bottom: 3%;
}
.container span {
  color: #aaa;
  font-size: 16px;
  display: block;
  margin-bottom: 5%;
}
.top-span {
  border-bottom: 1px solid #aaa;
}
.md-span {
  font-size: 14px;
  color: #555;
}
</style>