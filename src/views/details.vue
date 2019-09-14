<template>
<div>
  <!-- 头部 -->
  <div class="collect_head">
    <div class="tip"></div>
    <div class="collect_title">
      <img src="../assets/cook/xz.png">
      <span style="margin-left:50px;">柠檬香煎鸡排</span>
      <span>
        <img src="../assets/cook/collect.png">
        <img src="../assets/cook/share.png" style="margin-left:50px;">
      </span>
    </div>
  </div>
  <!-- 商品详情的大图 -->
  <div class="imgshow">
    <img src="../assets/cook/details01.jpg">
  </div>
  <!-- 商品名字与属性 -->
  <div class="textname">
    <span>柠檬香煎鸡排</span>
    <span style="margin-left:25%;color:#76D1AE;">高蛋白 低脂 低碳 戒糖</span>
  </div>
  <!-- 能量 -->
  <div class="nengliang">
    <img src="../assets/cook/details_nengliang.png">
  </div>
  <!-- 食材 -->
  <div class="shicai">
    <span>
      <img src="../assets/cook/details_login_shicai.png">食材
    </span>
    <div class="spantext">
      <br>鸡胸肉 300g<br>
      青柠檬 半个<br>
      橄榄油 5g<br>
      黑胡椒 适量<br>
      辣椒面 适量<br>
      盐 适量<br>
    </div>
  </div>
  <!-- 烹饪步骤 -->
  <div class="steps">
    <span>
      <img src="../assets/cook/details_login_steps.jpg">烹饪步骤
    </span>
    <div class="stepstext">
      <br>1.鸡胸肉切片，撒上盐与黑胡椒腌制15分钟。
      <br>2.平底锅刷橄榄油，鸡肉片到微微发白，挤入柠檬汁。
      <br>3.至鸡肉泛金黄关火，如果喜辣，可以洒上适量胡椒面。
      <br>4.配上自己喜欢的蔬菜装盘（番茄、黄瓜、牛肉果等等，随意）
    </div>
  </div>
  <span style="color: #333">备注</span>
  <div  style="color: #333">无</div>
</div>
</template>
<style>
/* 头部样式 */
.collect_head{
  width: 100%;
  height: 75px;
  background:url("../assets/cook/titleback.png");
  background-size: 100% 75px;
  font-size: 15px;
  line-height: 15px;
  color:white;
  position: fixed;
  top:0;
}
.tip{
  width: 100%;
  height: 1px;
}
.collect_title{
  width: 90%;
  margin-top: 45px;
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
}
.collect_title img{
  width: 15px;
  height: 15px;
}
.imgshow{
  margin-top: 75px;
}
.imgshow img{
  width: 100%;
}
.textname{
  margin-top:15px;
  margin-bottom:15px;
  margin-left: 10px;
  justify-content: space-between;
}
/* 能量图片 */
.nengliang img{
  width: 100%;
}
/* 虚线样式 */
.nengliang,.steps{
  border-top:dotted;
  border-bottom: dotted;
  border-color: #999;
  border-width: 1px;
}
/* 食材图片样式 */
.shicai img{
  width:20px;
  height:20px;
  margin-left: 10px;
}
/* 食材span样式 */
.shicai span{
  font-size: 16px;
}
/* 食材文字样式 */
.spantext{
  text-align: center;
}
/* 烹饪步骤小图标样式 */
.steps img{
  width:20px;
  height:20px;
  margin-left: 10px;
}
/* 烹饪步骤文字样式 */
.stepstext{
  text-align: left;
  margin-left: 10px;
}
</style>