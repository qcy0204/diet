<template>
  <div>
    <!-- 1.顶部 -->
   <!-- <mt-header>
     
   </mt-header> -->
    <!-- 2.面板 -->
    <mt-tab-container v-model="active">
       <mt-tab-container-item id="home">
         <!-- 首页页面 -->
         <my-home></my-home>
       </mt-tab-container-item>
       <mt-tab-container-item id="recipe">
         <!-- 食谱页面 -->
         <my-cook></my-cook>
        </mt-tab-container-item>
       <mt-tab-container-item id="sports">
         <!-- 运动页面 -->
         <my-exercise></my-exercise>
        </mt-tab-container-item>
        <mt-tab-container-item id="me">
          <!-- 我的页面 -->
          <my-me></my-me>
        </mt-tab-container-item>
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
// 引入首页页面组件
import Home from '../views/home/Home'
// 引入食谱页面组件
import Cook from '../views/Cookbook'
// 引入运动页面组件
import Exercise from '../views/Exercise'
// 引入我的页面组件
import Me from '../views/me/Mine'
export default {
    data() {
      return {
        active:"home",
      }
    },
    components:{
      // 首页
      "my-home":Home,
      // 食谱
      "my-cook":Cook,
      // 运动
      "my-exercise":Exercise,
      // 我的
      "my-me":Me
    }
}
</script>

<style  scoped>

</style>