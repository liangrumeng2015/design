<template>
<!-- 轮播图组件 -->
  <div>
    <van-swipe :autoplay="3000" indicator-color="red">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
    data(){
        return{
            msg:''
        }
    }
}
</script>
<style scoped>
.van-swipe-item{
  width: 100%;
  height: 180px!important;
  background: pink;
}
</style>