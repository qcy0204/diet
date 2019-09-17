<template>
    <div class="data_container">
        <!-- 头部 -->
        <my-header></my-header>
        <div class="data_header">
           <img src="../../assets/home/xz.png" alt="" @click="backmain()">
           <span>我的数据</span>
           <span></span>
       </div>
        <!-- 数据 -->
        <div class="data_model">
            <div class="data_box">
                <span>性别</span>
                <span>女</span>
            </div>
            <div class="data_box">
                <span>身高</span>
                <span>168cm</span>
            </div>
            <div class="data_box">
                <span>年龄</span>
                <span>24</span>
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
            
        }
    },
    methods: {
        backmain(){
            this.$router.push("/")
        }
    }
}
</script>
<style scoped>
.data_container{
    width: 100%;
    height: 800px;
    background: #f9f9f9;
}
/* 头部 */
.data_header{
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
}

/* 数据 */
.data_model{
    margin-top: 75px;
}
.data_box{
    width: 100%;
    height: 55px;
    padding: 0 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 10px ; 
    font-size: 15px;
    background: white;
}
</style>