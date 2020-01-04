<template>
<!-- 
    组件的使用
    <v-TitleBar leftMsg="推荐" iconName="exchange" rightMsg="换一换" />
    @params leftMsg  左上角的名称
    @params  iconName  右边的图标  
    @params  rightMsg  右边显示的文字
    @params  bgColor   背景色  默认是 #f4f7fc颜色
 -->
    <div class="title_bar" :style="{background:bgColor}">
        <!-- <div v-if="leftMsg">{{leftMsg}}</div> -->
        <div v-if="leftMsg">
            <van-icon :name="leftIcon" class="icon" style="margin-right:5px" />
            <span>{{leftMsg}}</span>
        </div>
        <div>
            <van-icon :name="iconName" class="icon" />
            <span v-if="rightMsg">{{rightMsg}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        leftMsg:String,
        leftIcon:{
            type:String,
            default:''
        },
        rightMsg:String,
        iconName:String,
        bgColor:{
            type:String,
            default:'#f4f7fc'
        }
    },
}
</script>
<style lang="stylus" scoped>
.title_bar 
    display flex
    justify-content space-between
    font-size 14
    color #a4a4a4
    padding 5px 15px;
    background-color #f4f7fc
.title_bar .icon   
    vertical-align middle
</style>