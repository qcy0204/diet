<template>
  <div >
    <div class="top">
      <div class="left">
        <img src="../assets/icon/phonexinhao.png" alt class="left-img" />
        <span>中国移动</span>
        <span class="left-span">4G</span>
        <!-- <img src="../assets/icon/wifi.png" alt class="left-wifi" > -->
      </div>
      <div class="time">
        <span>
          {{netspd}}
        </span>
        <span>{{this.hh>12?"下午":"上午"}}{{hh+":"+mm}}</span>
      </div>
      <div class="battery">
        <span>{{num}}</span>
        <img src="../assets/icon/battery.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      netspd:"",
      hh: "",
      mm: "",
      active: "tab1",
      num:'100%',
    };
  },
  created() {
    this.getTime();
    this.getNetSpd();
  },
  mounted() {
    this.getTime();
  },
  methods: {
    getNetSpd(){
    let times=  setInterval(() => {
        let spd=Math.floor(Math.random()*1000);
        this.netspd=spd+" "+"kb"+"/"+"s";
      }, 1000);
    },
    getTime() {
     let date= setInterval(() => {
        //new Date() new一个data对象，当前日期和时间
        //toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。
        this.hh = parseFloat(new Date().getHours());
        this.mm = parseFloat(new Date().getMinutes());
        this.hh= (this.hh< 10) ? '0' + this.hh: this.hh= this.hh;
        this.mm= (this.mm< 10) ? '0' + this.mm: this.mm= this.mm;
      }, 1000);
    }
  },
  beforeDestroy(){
    clearInterval(this.times);
    clearInterval(this.date);
  }
};
</script>
<style scoped>
.top{
  width: 100%;
  min-height: 24px;
  background: #35CE9F;
  position: fixed;
  top:0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
  font-size:10px;
  line-height: 24px;
}
.left-img,.battery img{
  width: 20px;
}
.left-span{
  display: block;
  padding-right:30px ;
}
.left-img{
  margin-left: 8px;
}
.left,.battery,.time{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.left,.time{
  width:40%;
}
.battery{
  width: 18%;
}
</style>




