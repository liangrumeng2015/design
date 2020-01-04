<template>
  <div class="pages">
    <img
      class="top_img"
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578133002649&di=5e301e02fd9ce9232c1222dded728df0&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FRHD8Us3aZiyx%3DlxCR4f5IHtA%3D2p7vwu1DasjZE%3D4Jcu8n1543549554760.jpeg"
    />
    <v-IconItem :dataItem="dataItem" @iconItemFn="iconItemFn"/>
  </div>
</template>
<script>
import IconItem from "../../components/IconItem";
export default {
  data() {
    return {
      msg: "123",
      dataItem: [
        {
          icon: "description",
          txt: "课程",
          color: "#09bc9f",
          path:'/lesson'
        },
        {
          icon: "send-gift-o",
          txt: "教师课程表",
          color: "#ffb608",
          path:'/resource'
        },
        {
          icon: "apps-o",
          txt: "学生课程表",
          color: "#ff6f5e",
          path:'/rules'
        },
        {
          icon: "description",
          txt: "帮助",
          color: "#09bc9f",
          path:'/help'
        },
        {
          icon: "send-gift-o",
          txt: "问答",
          color: "#ffb608",
          path:'question'
        },
        {
          icon: "apps-o",
          txt: "日志",
          color: "#ff6f5e",
          path:'/log'
        },
        {
          icon: "description",
          txt: "版权",
          color: "#09bc9f",
          path:'/copy'
        },
        {
          icon: "send-gift-o",
          txt: "意见反馈",
          color: "#ffb608",
          path:'/suggest'
        },
        {
          icon: "apps-o",
          txt: "关于",
          color: "#ff6f5e",
          path:'/about'
        }
      ]
    };
  },
  components: {
    "v-IconItem": IconItem
  },
  methods:{
      iconItemFn(data){
          if(data.item.path == '/copy'){   // 版权页面
            this.$router.push({path:'/copy'})
          }
      }
  }
};
</script>
<style lang="stylus" scoped>
.pages{
  min-height 100vh
}
img.top_img {
  width: 100%;
  height: 200px;
}
</style>