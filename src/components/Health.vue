<template>
  <div>
    <!-- 1.顶部 -->
   <mt-header>
     
   </mt-header>
    <!-- 2.面板 -->
    <mt-tab-container v-model="active">
       <mt-tab-container-item id="home">首页页面</mt-tab-container-item>
       <mt-tab-container-item id="recipe">食谱页面</mt-tab-container-item>
       <mt-tab-container-item id="sports">运动页面</mt-tab-container-item>
        <mt-tab-container-item id="me">我的页面</mt-tab-container-item>
    </mt-tab-container>
    <!-- 3.底部 -->
     <mt-tabbar fixed v-model="active">
       <mt-tab-item id="home">
         <img slot="icon" src="../assets/img/01-1.png" v-show="active=='home'?true:false"/>
         <img slot="icon" src="../assets/img/01.png" v-show="active=='home'?false:true"/>
         首页
       </mt-tab-item>
        <mt-tab-item id="recipe">
         <img slot="icon" src="../assets/img/02-1.png" v-show="active=='recipe'?true:false"/>
         <img slot="icon" src="../assets/img/02.png" v-show="active=='recipe'?false:true"/>
         食谱
       </mt-tab-item>
        <mt-tab-item id="sports">
         <img slot="icon" src="../assets/img/03-1.png" v-show="active=='sports'?true:false"/>
         <img slot="icon" src="../assets/img/03.png" v-show="active=='sports'?false:true"/>
         运动
       </mt-tab-item>
        <mt-tab-item id="me">
         <img slot="icon" src="../assets/img/04-1.png" v-show="active=='me'?true:false"/>
         <img slot="icon" src="../assets/img/04.png" v-show="active=='me'?false:true"/>
         我的
       </mt-tab-item>
     </mt-tabbar>
  </div>
</template>

<script>
export default {
    data() {
      return {
        active:"tab1"
      }
    },
}
</script>

<style  scoped>

</style>