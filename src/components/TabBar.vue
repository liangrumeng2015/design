<template>
  <!-- 下方tab栏切换 -->
  <div class="tabbar">
    <van-tabbar v-model="active" active-color="#1989fa" @change="changeTab(active)">
      <van-tabbar-item
        v-for="(item,idx) in tabData"
        :key="idx"
        :icon="item.icon"
        :info="item.info"
        @click="toChangeTab(item.path)"
      >{{item.msg}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      active: 0
    };
  },
  props: {
    tabData: Array
  },
  methods: {
    toChangeTab(path) {
      this.$router.push(path);
    },
    changeTab(active) {
      console.log("active", active);
      this.$cookie.set("tabActive", active);
      this.active = active;
    }
  }
};
</script>