<template>
<!-- 个人中心头像部分组件
    组件的使用
        <v-Avatar :bgImg="bgImg" :avatar="avatar" />
        @params  bgImg  顶部背景图
        @params  avatar  用户头像图
 -->
    <div class="info_top">
        <img class="bg_img" :src="bgImg" v-if="bgImg" />
        <div class="bg_avatar">
            <img :src="avatar" v-if="avatar" />
            <p>xxxx辅助系统</p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        bgImg:{
            type:String
        },
        avatar:{
            type:String
        }
    }
}
</script>
<style lang="stylus" scoped>
.info_top{
    position relative
    height 200px;
    box-shadow 5px 5px 5px #ccc
    .bg_img{
        width 100%;
        height 100%;
    }
    .bg_avatar{
        position absolute;
        left 50%;
        top 50%;
        transform translate(-50%,-50%)
        z-index 10
        img{
            width 80px;
            height 80px;
            border-radius 50%
        }
        p{
            color #ffffff
            font-size 18px
        }
    }
}
</style>