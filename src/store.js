// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {

//   },
//   mutations: {

//   },
//   actions: {

//   }
// })
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null, //当前用户
    islogin:false,   //是否登录
  },
  getters: {
    currentUser :state => state.currentUser,
    //isLogin :state => state.isLogin
  },
  mutations: {
    userStatus:(state, user) => {  //定义一个用户状态
      if (user) {
        state.currentUser = user
        //state.isLogin = true
      } else if (user == null) {
        //退出的时候清空sessionStorage里的东西
        sessionStorage.setItem('userName', null);
        //  sessionStorage.setItem('userToke','');
        state.currentUser = null;
        //state.isLogin = false;
      }
    }
  },
  actions: {
    setUser : ({ commit }, user) => {
      commit('userStatus', user)
    }
  }
}
  )
