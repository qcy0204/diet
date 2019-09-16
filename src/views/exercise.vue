<template>
<div>
  <div class="TopStyle">
    <p>健康运动</p>
  </div>
  <div class="PicturePage">
      <img src="../assets/exercise/exercise1.jpg">
      <img src="../assets/exercise/exercise2.jpg">
      <img src="../assets/exercise/exercise3.jpg">
      <img src="../assets/exercise/exercise4.jpg">
      <img src="../assets/exercise/exercise5.jpg">
      <img src="../assets/exercise/exercise6.jpg">
      <img src="../assets/exercise/exercise7.jpg">
  </div>
</div>
</template>
<style>
body{
  padding: 0;
  margin: 0;
}
.TopStyle{
  width: 100%;
  background:#35CE9F;
  padding:10px 0 ;
  color: #fff;
  font-size:14px;
}
.AdStyle{
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