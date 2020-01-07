<template>
<!--搜索组件 -->
  <div class="search_part">
    <el-input v-model="inputVal" :placeholder="placeholder"></el-input>
    <el-button type="primary" @click="searchBtnFn">{{btnName}}</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      inputVal: ""
    };
  },
  props: {
    btnName: {
      type: String
    },
    placeholder: {
      type: String,
      default: "请输入要搜索的内容"
    }
  },
  methods: {
    searchBtnFn() {
      this.$emit("searchBtnFn", this.inputVal);
    }
  }
};
</script>
<style lang="stylus" scoped>
.search_part {
  width: 40%;
  display: flex;

  .el-button {
    margin-left: 10px;
  }
}
</style>