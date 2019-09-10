import Vue from 'vue'
import Router from 'vue-router'
// 面板与 底部导航栏
import Health from './components/Health.vue'
// 功能一：登陆
import Login from './views/common/login.vue'
// 手机登陆
import loginPhone from './views/common/loginPhone.vue'
// qq登陆
import loginqq from './views/common/loginqq.vue'
//支付宝登陆
import loginzfb from './views/common/loginzhifubao.vue'
// 微信登陆
import loginvx from './views/common/loginvx.vue'

// 功能二： 食谱组件

import Cook from "./views/cookbook.vue"
// 功能三： 运动组件
import Exerice from "./views/exercise.vue"

/// 功能四：我的
import Home from "./views/home/mine.vue"
import MyData from "./views/home/myData.vue"

Vue.use(Router)

export default new Router({
  routes: [
  {path:"/",component:Health},
  // 功能一：登陆
  {path:"/login",component:Login},
  {path: '/loginPhone', component: loginPhone,},
  {path: '/loginqq', component: loginqq,},
  {path: '/loginzfb', component: loginzfb,},
  {path: '/loginvx', component: loginvx,},
  // 功能二：食谱 
  {path:"/cook",component:Cook},
  // 功能二：运动  
  {path:"/exercise",component:Exerice},
  // 功能四：我的
  {path:"/home",component:Home},
  {path:"/home_data",component:MyData}
  ]
})
