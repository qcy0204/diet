<template>
    <div>
        <!-- 1.顶部 -->
       <my-header></my-header>
       <div class="advice_header">
           <img src="../../assets/home/xz.png" alt="" @click="backmain()">
           <span>意见反馈</span>
           <span>回复</span>
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
<style scoped>
/* 头部 */
.advice_header{
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
.advice_header img{
    width: 14px;
    height: 14px;
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
    background:#35ce9f;
    color: white;
    font-size: 16px;
    border-radius: 40px;
}
</style>