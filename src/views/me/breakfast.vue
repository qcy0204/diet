<template>
    <div class="break_container">
        <!-- 头部 -->
        <div class="break_head">
            <div class="tip"></div>
            <div class="break_title">
                <img src="../../assets/home/xz.png" >
                <span>减脂-早餐</span>
                <span></span>
            </div>
        </div>
        <!-- 数据 -->
        <div class="break_model">
            <div class="break_box">
                <img src="../../assets/home/swy.jpg" alt="">
                <div class="box_word">
                   <div class="word_title">金枪鱼蔬菜蛋饼</div>
                   <div class="word_detil">烤制的蛋饼避免了过多油脂的加入，并且融合了鸡蛋的香气和金枪鱼的鲜美多汁。并且融合了鸡蛋的香气和金枪鱼的鲜美多汁。</div>
                </div>
            </div>
            <div class="break_box">
                <img src="../../assets/home/swy.jpg" alt="">
                <div class="box_word">
                   <div class="word_title">金枪鱼蔬菜蛋饼</div>
                   <div class="word_detil">烤制的蛋饼避免了过多油脂的加入，并且融合了鸡蛋的香气和金枪鱼的鲜美多汁。并且融合了鸡蛋的香气和金枪鱼的鲜美多汁。</div>
                </div>
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
    //     backmain(){
    //          this.$router.push("/")
    //     }
    }
}
</script>
<style>
.break_container{
    width: 100%;
    height: 500px;
    background: white;
    
}
/* 头部 */
.break_head{
    width: 100%;
    height: 75px;
    background: url("../../assets/home/titleback.png");
    background-size: 100% 75px;
    font-size: 15px;
    line-height: 15px;
    color: white;
    position: fixed;
    top: 0;
}
.tip{
    width: 100%;
    height: 1px;
}
.break_title{
    width: 90%;
    margin-top: 45px;
    margin-left:5%; 
    display: flex;
    justify-content: space-between;
}
.break_title img{
    width: 15px;
    height: 15px;
}
/* 数据 */
.break_model{
    margin-top: 82px;
    padding: 0 10px;
}
.break_box{
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    /* margin-bottom: 10px ;  */
}
.break_box img{
    width: 100px;
}
.box_word{
    width: 500px;
    height: 75px;
    margin-left: 10px;
}
.word_title{
    font-size: 15px;
    line-height: 30px;
}
.word_detil{
    width: 99%;
    height: 35px;
    margin-top: 5px;
    color: #999;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>