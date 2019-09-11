<template>
  <div class="row">
    <van-search placeholder="搜索" v-model="value" shape="round"></van-search>
    <!-- 用户信息 -->
    <div class="complete">
      <div class="com_weight">
        <div class="weight">
          <h4>
            当前体重：
            <span>未知</span>
          </h4>
          <h4>
            目标体重：
            <span>未知</span>
          </h4>
        </div>
        <div class="weights">
          <h4>
            基础代谢：
            <span>未知</span>
          </h4>
          <h4>
            体重指数：
            <span>未知</span>
          </h4>
        </div>
      </div>
      <!-- 编辑 -->
      <div class="compile">
        <div class="edit">
          <img src="../../assets/img/none.png" />
        </div>
      </div>
    </div>

    <!-- 轮播 -->
    <div class="carousel">
      <van-swipe :autoplay="3000" class="swipe">
        <van-swipe-item>
          <img src="../../assets/img/car1.jpg" class="img_a" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/car2.jpg" class="img_a" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/car3.jpg" class="img_a" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/car4.jpg" class="img_a" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 食物库  分类 注意  测一测 -->
    <div class="nav">
      <div>
        <div class="cle cle_color_c1">
          <img src="../../assets/img/Box.png" class="nav_img" />
        </div>
        <h5 class="nav_font">食物库</h5>
      </div>
      <div>
        <div class="cle cle_color_c2">
          <img src="../../assets/img/coffee.png" class="nav_img" />
        </div>
        <h5 class="nav_font">轻食分类</h5>
      </div>
      <div>
        <div class="cle cle_color_c3">
          <img src="../../assets/img/bell.png" class="nav_img" />
        </div>
        <h5 class="nav_font">饮食注意</h5>
      </div>
      <div>
        <div class="cle cle_color_c4">
          <img src="../../assets/img/dumbbell.png" class="nav_img" />
        </div>
        <h5 class="nav_font">测一测</h5>
      </div>
    </div>
    <!-- 今日饮食 -->
    <div class="today">
      <img src="../../assets/img/pic.png" class="today_pic" />
    </div>
    <!-- 今日推荐 -->
    <div class="daily">
      <p>今日推荐</p>
      <ul class="daily_recommend">
        <li>
          <div>
            <img src="../../assets/daily/egg_cakes.jpg" class="daily_img" />
            <h5>金枪鱼蔬菜蛋饼</h5>
            <span>417Kcal</span>
          </div>
          <div>
            <img src="../../assets/daily/cherry_tomato.jpg" class="daily_img" />
            <h5>圣女果</h5>
            <span>0Kcal</span>
          </div>
        </li>
        <li class>
          <div>
            <img src="../../assets/daily/milk.jpg" class="daily_img" />
            <h5>牛奶</h5>
            <span>0Kcal</span>
          </div>

          <div>
            <img src="../../assets/daily/beef.jpg" class="daily_img" />
            <h5>懒人微波炉牛肉干</h5>
            <span>636Kcal</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>


<style scoped>
.row{
  background:url("../../assets/img/bg_color.png");
  background-size: 100% 200px;
  background-repeat: no-repeat
}
.van-search{
  background-color: transparent !important
}
.complete {
  width: 100%;
  padding: 0 0 0 12px;
  display: flex;
  box-sizing: border-box;
}
.com_weight {
  width: 80%;
}
.com_weight .weight {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.com_weight .weights {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.compile {
  width: 20%;
}
.compile .edit {
  width: 50px;
  height: 35px;
  background: rgb(190, 241, 220);
  margin-top: 17px;
  float: right;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.edit img {
  width: 25px;
  height: 25px;
  margin-top: 5px;
}

/* 轮播 */
.carousel {
  margin-top: 10px;
  padding: 0 12px;
}
.swipe {
  width: 100%;
  border-radius: 5px;
}
.img_a {
  width: 100%;
  height: 100%;
}
/* 导航栏 */
.nav {
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  box-shadow: 0 5px 15px #e9f4f8;
  box-sizing: border-box;
  padding: 20px 0;
  background: #fff;
  width: 90%;
  margin: 0 5%;
  position: absolute;
  top: 330px;
}

.nav .cle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
/* 原的颜色 */
.nav .cle_color_c1 {
  background: #94e7d8;
}
.nav .cle_color_c2 {
  background: #a2eec0;
}
.nav .cle_color_c3 {
  background: #b7d7f6;
}
.nav .cle_color_c4 {
  background: #9ee2f1;
}

.nav_img {
  width: 60%;
  margin-top: 9px;
}
.nav_font {
  font-size: 14px;
  margin-top: 6px;
}
/* 今日饮食 */
.today {
  width: 100%;
  margin-top: 90px;
}
.today_pic {
  width: 100%;
}
/* 今日推荐 */
.daily {
  width: 90%;
  margin: 10px auto 100px; /* 测试   */
}
.daily p {
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 2px;
}
.daily_recommend {
  display: flex;
  justify-content: space-between;
}

.daily_img {
  width: 100%;
}
</style>