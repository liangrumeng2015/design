<template>
  <div class="pages">
    <img
      class="top_img"
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578133002649&di=5e301e02fd9ce9232c1222dded728df0&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FRHD8Us3aZiyx%3DlxCR4f5IHtA%3D2p7vwu1DasjZE%3D4Jcu8n1543549554760.jpeg"
    />
    <v-IconItem :dataItem="dataItem" @iconItemFn="iconItemFn" />
  </div>
</template>
<script>
import IconItem from "../../components/IconItem";
import { Toast } from "vant";
import { functionPage } from "../../config/constant";
export default {
  data() {
    return {
      msg: "123",
      dataItem: functionPage
    };
  },
  components: {
    "v-IconItem": IconItem
  },
  methods: {
    iconItemFn(data) {
      const { roleId } = JSON.parse(this.$cookie.get("userInfo"));
      if (data.item.path == "/logs") {
        // 版权页面
        this.$router.push({ path: "/logs" });
      } else if (data.item.path == "/teacherlesson") {
        //教师课表    roleId  1可以进入
        if (roleId == 1) {
          this.$router.push({ path: "/teacherlesson" });
        } else {
          Toast({
            message: "您没有权限查看该课表",
            position: "top"
          });
        }
      } else if (data.item.path == "/studentlesson") {
        // 学生课表
        if (roleId == 0) {
          this.$router.push({ path: "/studentlesson" });
        } else {
          Toast({
            message: "您没有权限查看该课表"
          });
        }
      } else if (data.item.path == "/about") {
        // 关于页面
        this.$router.push({path:'/about'})
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.pages {
  min-height: 100vh;
}

img.top_img {
  width: 100%;
  height: 200px;
}
</style>