<template>
  <div class="data_container">
    <!-- 头部 -->
    <my-header></my-header>
    <!-- <div class="data_header">
<img src="../../assets/home/xz.png" alt="" @click="backmain()">
<span>我的数据</span>
<span></span>
    </div>-->
    <van-nav-bar title="我的数据" left-text="返回" left-arrow @click-left="onClickLeft" class="top" />
    <!-- 数据 -->
    <div class="data_model">
      <div class="data_box" >
          <span>性别</span>
          <span  @click="chose" v-text="msg"></span>
        <van-popup v-model="show" position="bottom">
          <van-picker
            show-toolbar
            title="请选择性别"
            :columns="columns"
            @cancel="onCancel"
            @confirm="onConfirm"
            @change="onChange"
          ></van-picker>
        </van-popup>
      </div>
      <!-- <div class="data_box">
<span>性别</span>
<span>女</span> 
     <select class="select-sex">
      <option v-for=" item of this.list" :key="item.id" :value="item.id">{{item.sex}}</option>
     </select> 
      </div>-->

      <div class="data_box">
        <span>身高</span>
        <span>168cm</span>
      </div>
      <div class="data_box" @click="changeAge">
        <span>年龄</span>
        <span ></span>
      </div>
      <div class="data_box">
        <span>体重</span>
        <span>40kg</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      columns: ["男", "女", "保密"],
      msg:"男"
      // list:[{id:1,sex:"男"},{id:1,sex:"女"},{id:1,sex:"保密"}]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("./");
    },
    chose(){
        this.show=true;
    },
   onCancel(){
       this.show=false;
   },
   onConfirm(){
       this.show=false;
   },
    onChange(picker,value,index){
        this.msg=value;
        console.log(value);
    },
    changeAge() {}
  }
};
</script>
<style scoped>

/* 头部 */
.top {
  top: 24px;
  background: #35ce9f;
}
.van-nav-bar__title {
  max-width: 60%;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
}

/* .data_header{
    width: 100%;
    background: #35ce9f;
    position: fixed;
    top:24px;
    color: white;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    padding: 7px 20px;
    box-sizing: border-box;
}
.data_header img{
    width: 14px;
    height: 14px;
} */

/* 数据 */
.data_model{
    margin-top:24px;
}
.data_box {
  width: 100%;
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 10px;
  font-size: 15px;
  background: white;
}
</style>