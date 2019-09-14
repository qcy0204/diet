<template>
    <div class="container_main">
        <!-- 登录 -->
        <div class="login_model">
           <div class="login_title">我的</div>
           <img src="../../assets/home/loginimg.png" class="login_img">
           <div class="login_state" @click="Login">未登录</div>
        </div>
        <!-- 我的数据 我的收藏 一个广告 -->
        <div class="middle_model">
            <!-- 我的收藏 -->
            <div class="mine_model">
                <div class="myshuju" @click="mydata">
                    <img src="../../assets/home/mydata.png" alt=""> 
                    <span>我的数据</span>
                </div>
                <div class="myshuju" @click="mycollect">
                    <img src="../../assets/home/mysc.png" alt=""> 
                    <span>我的收藏</span>
                </div>
            </div>
            <!-- 广告 -->
            <div class="health_question">
                <img src="../../assets/home/minesdv.png" alt="">
            </div>
        </div>
        <!-- n多选项 -->
        <div class="chose_medel">
            <div class="chose_item">
                <div class="item_box" @click="myadvice">
                    <img src="../../assets/home/advice.png" alt="">
                    <span>意见反馈</span>
                </div>
                <img src="../../assets/home/xy.png" alt="">
            </div>
            <div class="chose_item">
                <div class="item_box" @click="mycopyright">
                    <img src="../../assets/home/sm.png" alt="">
                    <span>版权说明</span>
                </div>
                <img src="../../assets/home/xy.png" alt="">
            </div>
            <div class="chose_item">
                <div class="item_box" @click="myprivacy">
                    <img src="../../assets/home/ys.png" alt="">
                    <span>隐私声明</span>
                </div>
                <img src="../../assets/home/xy.png" alt="">
            </div>
            <div class="chose_item">
                <div class="item_box">
                    <img src="../../assets/home/fx.png" alt="">
                    <span>分享给好友</span>
                </div>
                <img src="../../assets/home/xy.png" alt="">
            </div>
            <div class="chose_item">
                <div class="item_box">
                    <img src="../../assets/home/bb.png" alt="">
                    <span>版本更新</span>
                </div>
                <img src="../../assets/home/xy.png" alt="">
            </div>
            <div class="chose_item">
                <div class="item_box">
                    <img src="../../assets/home/tc.png" alt="">
                    <span>退出登录</span>
                </div>
                <img src="../../assets/home/xy.png" alt="">
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
        Login(){
this.$router.push("/login")
        },
        mydata(){
            this.$router.push("/me_data")
        },
         mycollect(){
           this.$router.push("/me_collect")
         },
         myadvice(){
             this.$router.push("/me_advice")
         },
         mycopyright(){
             this.$router.push("/me_copyright")
         },
         myprivacy(){
             this.$router.push("/me_privacy")
         }
    }
}
</script>
<style >
*{
    margin: 0;
    padding: 0;
}
.container_main{
    width: 100%;
    height: 800px;
    background:#f9f9f9;
    display: flex;
    flex-direction: column;
}
/* 登录 */
.login_model{
    width: 100%;
    height: 225px;
    text-align: center;
    background-image:url("../../assets/home/loginback.png");
    background-size: 100% 225px;
    color:white;
    font-size: 15px;
    letter-spacing: 2px;
}
.login_title{
    margin-top: 60px;
}
.login_img{
    width: 75px;
}
.login_title,.login_img{
    margin-bottom: 10px;
}
/* 我的收藏 我的数据 */
.middle_model{
    width: 100%;
    height: 150px;
    padding: 0 22px;
    box-sizing: border-box;
    background: white;
}
.mine_model{
    display: flex;
    justify-content: space-between;
    padding: 18px 0;
}
.myshuju{
    width:135px;
    height: 45px;
    background:white;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    box-shadow: 2px 2px 7px rgb(238, 236, 236);
    font-size: 15px;
}
.mine_model img{
    width: 20px;
    height: 20px;
    padding: 5px;
}
/* 广告 */
.health_question img{
    width: 100%;
    display: block; 
}
/* 选项 */
.chose_medel{
    width: 100%;
    background: #f9f9f9;
    display: flex;
    flex-direction: column;
}
.chose_item{
    width: 100%;
    height: 50px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #040706;
    margin-top: 10px;
    padding: 0 30px;
    box-sizing: border-box;
    font-size: 15px;
}
.chose_item img{
    width: 20px;
    height: 20px;
}
.item_box{
    width: 110px;
    height: 50px;
    display: flex;
    align-items: center;
    line-height: 18px;
}
.item_box img{
    width: 18px;
    height: 20px;
    margin-right: 15px;
}
</style>