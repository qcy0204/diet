<template>
<div>
  <div class="topStyle">
    <img src="../assets/cook/ad.jpg" class="adStyle">
  </div>
  <div class="PicturePage">
      <img src="../assets/cook/cookbook_01breakfast.jpg">
      <img src="../assets/cook/cookbook_02lunch.jpg">
      <img src="../assets/cook/cookbook_03dinner.jpg">
      <img src="../assets/cook/cookbook_04.jpg">
      <img src="../assets/cook/cookbook_05.jpg">
      <img src="../assets/cook/cookbook_06.jpg">
      <img src="../assets/cook/cookbook_07.jpg">
      <img src="../assets/cook/cookbook_08.jpg">
      <img src="../assets/cook/cookbook_09.jpg">
      <img src="../assets/cook/cookbook_10.jpg">
      <img src="../assets/cook/cookbook_11.jpg">
      <img src="../assets/cook/cookbook_12.jpg">
      <img src="../assets/cook/cookbook_13.jpg">
      <img src="../assets/cook/cookbook_14.jpg">
  </div>
</div>
</template>
<style>
body{
  padding: 0;
  margin: 0;
}
.topStyle{
  width: 100%;
  height: 75px;
  background-image: url("../assets/cook/head.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: 100% 75px;
}
.adStyle{
  width: 23px;
  height: 23px;
  margin-left: 90%;
  margin-top: 9%;
}
.PicturePage{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 3%;
}
.PicturePage img{
  width: 100%;
  margin-bottom:10px;
}
</style>