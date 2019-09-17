<template>
    <div class="collect_container">
        <!-- 头部 -->
         <my-header></my-header>
         <div class="collect_header">
           <img src="../../assets/home/xz.png" alt="" @click="backmain()">
           <span>我的数据</span>
           <span></span>
       </div>
        <!-- 数据 -->
        
        <div class="collect_model">
            <div class="collect_box">
                <img src="../../assets/home/swy.jpg" alt="">
                <div class="box_word">
                   <div class="word_title">金枪鱼蔬菜蛋饼</div>
                   <div class="word_detil">烤制的蛋饼避免了过多油脂的加入，并且融合了鸡蛋的香气和金枪鱼的鲜美多汁。并且融合了鸡蛋的香气和金枪鱼的鲜美多汁。</div>
                </div>
            </div>
            <div class="collect_box">
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
        backmain(){
            this.$router.push("/")
        }
    }
}
</script>
<style scoped>
.collect_container{
    width: 100%;
    height: 500px;
    background: white;
    
}
/* 头部 */
.collect_header{
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
.collect_header img{
    width: 14px;
    height: 14px;
}

/* 数据 */
.collect_model{
    margin-top: 82px;
    padding: 0 10px;
}
.collect_box{
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    /* margin-bottom: 10px ;  */
}
.collect_box img{
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