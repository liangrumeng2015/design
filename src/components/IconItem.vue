<template>
<!-- 首页课程icon  -->
  <div class="icon_item">
    <li v-for="(item,idx) in dataItem" :key="idx">
      <div class="icon" :style="{color:item.color}">
        <van-icon :name="item.icon" />
      </div>
      <div class="txt">{{item.txt}}</div>
    </li>
  </div>
</template>
<script>
export default{
    props:{
        dataItem:Array
    }
}
</script>
<style lang="stylus" scoped>
.icon_item {
  margin-top: 62px;
  list-style: none;
  display: flex;
  text-align: center;
  padding-bottom:20px
}

.icon_item li {
  flex: 4;
}

.icon_item li .txt {
  font-size: 14px;
  color: #2f2f2f;
}

.icon_item li .icon {
  font-size: 30px;
}
</style>