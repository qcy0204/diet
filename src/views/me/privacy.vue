<template>
    <div>
        <!-- 头部 -->
        <div class="collect_head">
            <div class="tip"></div>
            <div class="collect_title">
                <img src="../../assets/home/xz.png" @click="backmain()">
                <span>隐私声明</span>
                <span></span>
            </div>
        </div>
        <!-- 输入内容 -->
        <div class="privacy_word">
            <div class="privacy_title">隐私声明</div>
            <p>我们是健康食谱的开发者(以下简称“我们”)，深知个人信息对您的重要性，我们将按法律要求，采取相应安全保护措施尽力保护您的个人信息安全可控。鉴此，我们制定了本《隐私权政策》(以下简称“本政策”)并提醒您：</p>
            <p>本政策适用于健康食谱产品或服务，请在使用我们产品(或)服务前，仔细阅读并了解本《隐私政策》。</p>
            <p>1、我们如何收集和使用您的个人信息</p>
            <p>2、我们如何共享。转让。公开披露您的个人信息</p>
            <p>3、我们如何保护您的个人信息</p>
            <p>4、您的数据主体权利</p>
            <p>5、我们如何处理未成年人信息</p>
            <p>6、本声明如何更新</p>
            <p>7、如何联系我们</p>
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
.privacy_word{
    margin-top: 95px;
    padding: 0 15px;
}
.privacy_title{
    width: 100%;
    text-align: center;
    font-size: 20px;
    letter-spacing: 1px;
    color: #999;
    margin-bottom: 20px;
}
.privacy_word p{
    font-size: 14px;
    text-indent:30px;
    line-height: 20px;
    margin-bottom: 15px;
}
</style>