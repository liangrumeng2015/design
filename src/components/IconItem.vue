<template>
<!-- 首页课程icon  
  组件使用  <v-IconItem :dataItem="dataItem" @iconItemFn="iconItemFn" />
  @params :dataItem  组件里面的内容，是个数组  {icon: "description",txt: "课程",color: "#09bc9f"},
  @params  @iconItemFn="iconItemFn"   组件的事件方法
-->
  <div class="icon_item">
    <li v-for="(item,idx) in dataItem" :key="idx" @click="iconItemFn(item,idx)">
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
        dataItem:Array,
    },
    methods:{
      iconItemFn(item,idx){
        var data = {
          item,
          idx
        }
        this.$emit('iconItemFn',data)
      }
    }
}
</script>
<style lang="stylus" scoped>
.icon_item {
  list-style: none;
  display: flex;
  flex-wrap wrap 
  text-align: center;
  padding-bottom:20px
  justify-content center;
  align-items center
}

.icon_item li {
  width 33%
  padding 10px 0;
  align-items center
  border-right 1px solid #f5f5f5
  border-bottom 1px solid #f5f5f5
}
.icon_item li:nth-child(3n){
  border-right none
}

.icon_item li .txt {
  font-size: 14px;
  color: #2f2f2f;
}

.icon_item li .icon {
  font-size: 30px;
}
</style>