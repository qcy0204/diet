<template>
    <div class="data_container">
        <!-- 头部 -->
        <div class="data_head">
            <div class="tip"></div>
            <div class="data_title">
                <span @click="backmain()">取消</span>
                <span>我的数据</span>
                <span @click="backmain()">完成</span>
            </div>
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
            this.$router.push("/main")
        }
    }
}
</script>
<style>
.data_container{
    width: 100%;
    height: 800px;
    background: #f9f9f9;
}
/* 头部 */
.data_head{
    width: 100%;
    height: 75px;
    background: url("../../assets/home/titleback.png");
    background-size: 100% 75px;
    color: white;
    font-size: 15px;
    position: fixed;
    top: 0;
}
.tip{
    width: 100%;
    height: 1px;
}
.data_title{
    width: 90%;
    margin-top: 45px;
    margin-left:5%; 
    display: flex;
    justify-content: space-between;
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