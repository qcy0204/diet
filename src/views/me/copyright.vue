<template>
  <div>
    <!-- 头部 -->
    <my-header></my-header>
    <!-- <div class="copy_header">
           <img src="../../assets/home/xz.png" alt="" @click="backmain()">
           <span>版权说明</span>
           <span></span>
    </div>-->
    <van-nav-bar title="版权声明" left-text="返回" left-arrow @click-left="onClickLeft" class="top" />
    <!-- 输入内容 -->
    <div class="copyright_box">
      <div class="part_1">
        <b>本应用的发展离不开用户的支持和帮助，我们的撑住地邀请光大用户踊跃投稿。</b>
      </div>
      <div class="part_2">声明</div>
      <div class="part_3">
        <p>本应用所有内容均为用户提供，属个人行为，不代表本应用立场，本应用不因此而承担法律责任。</p>
        <p>各位用户提供的内容，请勿勤奋他人的知识产权及相关权利。</p>
        <p>本应用反对任何违反中华人民共和国有关知识产权的法律法规的行为，如果广大用户发现用户提供的内容有侵犯他人权利的情形，请通过邮箱告知我们。</p>
      </div>
      <div class="part_4">Email:daiwofei1234@163.com</div>
    </div>
  </div>
</template>
<script scoped>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.push("./");
    }
  }
};
</script>
<style scoped>
.top {
  top: 24px;
  background: #35ce9f;
}
.van-nav-bar__title {
  max-width: 60%;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
}
.copyright_container {
  width: 100%;
  height: 600px;
  background: url("../../assets/home/bqback.png");
}
/* 头部 */

.copy_header {
  width: 100%;
  background: #35ce9f;
  position: fixed;
  top: 24px;
  color: white;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  padding: 7px 20px;
  box-sizing: border-box;
}
.copy_header img {
  width: 14px;
  height: 14px;
}
.copyright_box {
  width: 100%;
  height: 600px;
  margin-top: 75px;
  padding: 25px;
  box-sizing: border-box;
  background: url("../../assets/home/bqback.png");
  background-size: 100% 700px;
}

.part_1 {
  margin-top: 35px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1px;
}
.part_2 {
  margin-top: 25px;
  font-size: 18px;
}
.part_3 {
  font-size: 15px;
  letter-spacing: 1px;
  margin: 15px 0 10px 30px;
  line-height: 25px;
}
.part_3 p {
  margin-bottom: 11px;
}
.part_4 {
  margin-top: 60px;
  font-size: 16px;
  font-weight: 700;
}
</style>