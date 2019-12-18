<template>
  <div>
    <v-TabBar :tabData="tabData" />

    <router-view  />
  </div>
</template>
<script>
import TabBar from "../components/TabBar";
export default {
  data() {
    return {
      msg: "",
      tabData: [
        {
          icon: "home-o",
          info: "",
          msg: "首页",
          path: "/tab1"
        },
        {
          icon: "search",
          info: "2",
          msg: "消息",
          path: "/tab2"
        },
        {
          icon: "friends-o",
          info: "",
          msg: "笔记",
          path: "/tab3"
        },
        {
          icon: "setting-o",
          info: "",
          msg: "我",
          path: "/tab4"
        }
      ]
    };
  },
  components: {
    "v-TabBar": TabBar
  }
};
</script>