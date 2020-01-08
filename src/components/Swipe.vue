<template>
<!-- 轮播图组件 -->
  <div>
    <van-swipe :autoplay="3000" indicator-color="#efefef">
      <van-swipe-item v-for="(item,index) in imgArr" :key="index"><img :src="item" /></van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
    props:{
      imgArr:{
        type:Array
      }
    }
}
</script>
<style scoped>
.van-swipe-item{
  width: 100%;
  height: 180px!important;
}
</style>