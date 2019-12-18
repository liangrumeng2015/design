<template>
    <div class="title_bar">
        <div v-if="leftMsg">{{leftMsg}}</div>
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
        rightMsg:String,
        iconName:String
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