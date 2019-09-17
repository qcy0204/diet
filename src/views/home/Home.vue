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
    <div class="row1">
    <div class="carousel">
      <van-swipe :autoplay="3000" class="swipe">
        <van-swipe-item>
          <img src="../../assets/img/car1.png" class="img_a" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/car2.png" class="img_a" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/car3.png" class="img_a" />
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
    </div>
    <!-- 今日饮食 -->
    <div class="today">
      <img src="../../assets/img/pic.png" class="today_pic" />
    </div>
    <!-- 今日推荐 -->
    <div class="daily">
      <p>今日推荐</p>
      <!-- <ul class="daily_recommend">
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
        <li>
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
      </ul> -->
      <div id="slider" class="slider">
         <img v-for="(src,index) in imgSrc" :key="index" :src="imgSrc[index].urim" 
         @touchstart="touchstart"
         @touchmove="touchmove" class="slider_img"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
       imgSrc:[
        {urim:require('../../assets/daily/egg_cakes.jpg')},
        {urim:require('../../assets/daily/cherry_tomato.jpg')},
        {urim:require('../../assets/daily/milk.jpg')},
        {urim:require('../../assets/daily/beef.jpg')}
      ],
      startPointX: 0,
      changePointX: 0,
      showIndex: 0,

    };
  },
  methods:{
    show(index){
      this.changePointX=this.startPointX;
      let slider = document.getElementById('slider');
      slider.style.marginLeft=`-${120*index}px`;
    },
    touchstart(e){
      this.startPointX = e.changedTouches[0].pageX;
    },
    touchmove(e){
      if(this.startPointX==this.changePointX){
        return ;
      }
      let currPointX = e.changedTouches[0].pageX;
      let leftSlide = this.startPointX-currPointX;
      if(leftSlide>30&&this.showIndex<this.imgSrc.length-1){
        this.show(++this.showIndex)
      }else if(leftSlide<-30&&this.showIndex>0){
        this.show(--this.showIndex)
      }
    },
  }
};
</script>


<style scoped>
.slider{overflow:hidden;white-space:nowrap;transition:1s;}
.slider img{width:170px;margin-right:10px}

.row{
  top:24px;
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
  color:white;
  font-size: 14px;
}
.com_weight .weight {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}
.com_weight .weights {
  display: flex;
  justify-content: space-around;
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
.row1{
  position: relative;
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
  top: 75%
  
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
  width: 90%;
  border-radius: 25px;
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
  justify-content: space-around;
  margin-top: 20px
}
.daily_recommend div{
  width: 90%;
  text-align: left;
}
.daily_recommend span{
  font-size: 12px;
}
.daily_img {
  width: 100%;
  border-radius: 10px;
}
</style>