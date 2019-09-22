import Vue from 'vue'
import Router from 'vue-router'
// 面板与 底部导航栏
import Health from './components/Health.vue'
// 功能一：登陆
import Login from './views/login/Login.vue'
// 手机登陆
import LoginPhone from './views/login/LoginPhone.vue'
// qq登陆
import Loginqq from './views/login/Loginqq.vue'
//支付宝登陆
import Loginzfb from './views/login/Loginzhifubao.vue'
// 微信登陆
import Loginvx from './views/login/Loginvx.vue'

// 功能二：首页
import Home from './views/home/Home.vue'
// 功能二： 食谱组件
import Cook from "./views/Cookbook.vue"
import Details from "./views/details.vue"
// 功能三： 运动组件
import Exerice from "./views/Exercise.vue"

/// 功能四：我的
import Mine from "./views/me/Mine.vue"
import MyData from "./views/me/MyData.vue"
import Mycollect from "./views/me/myCollect.vue"
import Advice from "./views/me/advice.vue"
import CopyRight from "./views/me/copyright.vue"
import Privacy from "./views/me/privacy.vue"
import map from './views/map/Map.vue';

Vue.use(Router)

export default new Router({
  routes: [
  {path:"/",component:Health},
  {path:"/home",component:Home},
  // 功能一：登陆
  {path:"/login",component:Login},
  {path: '/loginPhone', component: LoginPhone,},
  {path: '/loginqq', component: Loginqq,},
  {path: '/loginzfb', component: Loginzfb,},
  {path: '/loginvx', component: Loginvx,},
  // 功能二：食谱 
  {path:"/cook",component:Cook},
  {path:"/details",component:Details},
  // 功能二：运动  
  {path:"/exercise",component:Exerice},
  // 功能四：我的
  {path:"/mine",component:Mine},
  {path:"/me_data",component:MyData},
  {path:"/me_collect",component:Mycollect},
  {path:"/me_advice",component:Advice},
  {path:"/me_copyright",component:CopyRight},
  {path:"/me_privacy",component:Privacy},
  //功能五:百度地图
  {path:"/map",
  name:"map",
  component:map},
  ]
})