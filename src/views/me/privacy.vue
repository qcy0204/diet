<template>
    <div>
        <!-- 头部 -->
        <my-header></my-header>
        <div class="privacy_header">
           <img src="../../assets/home/xz.png" alt="" @click="backmain()">
           <span>隐私声明</span>
           <span></span>
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
<style scoped>
/* 头部 */
.privacy_header{
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
.privacy_header img{
    width: 14px;
    height: 14px;
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