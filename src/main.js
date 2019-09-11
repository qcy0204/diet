import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUi from 'mint-ui'
import'mint-ui/lib/style.css'
//引入我们的第三方库 移动端组件更多样式的vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
// import qs from 'qs'
//设置全局组件 页头部分 在任何页面可以重复使用
// import MyHeader from "./components/myHeader"
// Vue.component("my-header",MyHeader);

//单页面开发 组件组件中间切换url地址跳转不会更改title名字
//设置这个可以更改你的名字
import axios from 'axios'
// 设置属性发送ajax请求保存的数据
axios.defaults.withCredentials=true;
axios.defaults.baseURL="http://127.0.0.1:8080/";
Vue.prototype.axios=axios;


Vue.config.productionTip = false


Vue.use(MintUi)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')