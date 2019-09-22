<template>
  <div>
    <!-- 引入全局头部组件 -->
    <my-header></my-header>
    <!-- 引入百度地图api -->
    <div id="allmap" ref="allmap"></div>
  </div>
</template>
<script>
import { MP } from "../../map.js";
export default {
  data() {
    return {
      //ak: "krgs7RUS9MBIlat5sNbAZuygFnXgPIX4"
      ak: "plgHAcbUSfCFFXIipNfyQaMFVbo5q3pO" //百度地图的密钥
    };
  },
  mounted() {
    this.$nextTick(() => {
      MP(this.ak).then(BMap => {
        //在此调用api
        this.map();
      });
    });
  },
  methods: {
    // //异步加载百度地图
    // loadJScript() {
    //   var script = document.createElement("script");
    //   script.type = "text/javascript";
    //   script.src =
    //     "//api.map.baidu.com/api?v=2.0&ak=plgHAcbUSfCFFXIipNfyQaMFVbo5q3pO&callback=init";
    //   document.body.appendChild(script);
    // },
    // init(){
    //   var map = new BMap.Map("allmap");            // 创建Map实例
    // var point = new BMap.Point(114.387165,30.512377); // 创建点坐标
    // map.centerAndZoom(point,30);
    // map.enableScrollWheelZoom();                 //启用滚轮放大缩小
    // },
    map() {
      // 百度地图API功能
      var map = new BMap.Map("allmap"); // 创建Map实例,并设置地图允许的最小/最大缩放级别
      //添加地图类型控件
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
      map.centerAndZoom(new BMap.Point(114.387165, 30.512377), 15); // 初始化地图,设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      // map.disableDragging(); //禁止拖拽
      setTimeout(function() {
        map.enableDragging(); //两秒后开启拖拽
        //map.enableInertialDragging();   //两秒后开启惯性拖拽
      }, 2000);
    }
  }
};
</script>
<style  scoped>
#allmap {
  top: 24px;
  width: 100%;
  margin: 0;
  overflow: hidden;
  min-height: 18rem;
}
</style>