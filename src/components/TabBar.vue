<template>
  <!-- 下方tab栏切换 -->
  <div class="tabbar">
    <van-tabbar v-model="active" active-color="#1989fa">
      <van-tabbar-item v-for="(item,idx) in tabData" :key="idx" :icon="item.icon" :info="item.info" @click="toChangeTab(item.path)">
          {{item.msg}}
      </van-tabbar-item>
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
  methods:{
    toChangeTab(path){
      this.$router.push(path)
    }
  }
};
</script>