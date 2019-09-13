<template>
    <div>
        <!-- 头部 -->
        <div class="collect_head">
            <div class="tip"></div>
            <div class="collect_title">
                <img src="../../assets/home/xz.png" @click="backmain()">
                <span>意见反馈</span>
                <span @click="success()">回复</span>
            </div>
        </div>
        <!-- 输入内容 -->
        <div class="advice_input">
            <div class="advice_title">健身食谱与你共同见证更好的自己</div>
            <textarea cols="2" rows="6" class="input_1" placeholder="在这里留下您的需求和建议"></textarea>
            <input class="input_2" type="texterae" placeholder="(选填)请输入联系方式">
            <button class="button_1">提交</button>
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
<style>
/* 头部 */
.collect_head{
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
.collect_title{
    width: 90%;
    margin-top: 45px;
    margin-left:5%; 
    display: flex;
    justify-content: space-between;
}
.collect_title img{
    width: 15px;
    height: 15px;
}
/* 输入内容 */
.advice_input{
    margin-top: 75px;
    width: 100%;
    box-sizing: border-box;
    padding: 30px 20px;
    font-size: 16px;
    letter-spacing: 1px;
}
.input_1,.input_2{
    width: 100%;
    border:1px solid #dee1e2;
    font-size: 15px;
    padding: 5px;
    box-sizing: border-box;
}
.input_1{
    height: 150px;
    margin: 18px 0;
}
.input_2{
    height: 50px;
    margin-bottom: 40px;
}
.button_1{
    width: 100%;
    height: 50px;
    border: 0;
    background:#67caa1;
    color: white;
    font-size: 16px;
    border-radius: 40px;
}
</style>