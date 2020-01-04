<template>
    <div class="page_userinfo">
        <!-- 用户头像 -->
        <v-Avatar :bgImg="bgImg" :avatar="avatar" />
        <!-- 用户信息 -->
        <div class="userInfo">
            <v-TitleBar leftIcon="smile-o" leftMsg="柠檬" iconName="arrow" rightMsg="" bgColor="#fff" />
            <v-TitleBar leftIcon="thumb-circle-o" leftMsg="女" iconName="arrow" rightMsg="" bgColor="#fff" />
            <v-TitleBar leftIcon="label-o" leftMsg="1234567" iconName="arrow" rightMsg="" bgColor="#fff" />
            <v-TitleBar leftIcon="bookmark-o" leftMsg="软件工程" iconName="arrow" rightMsg="" bgColor="#fff" />
        </div>

    </div>
</template>
<script>
import Avatar from '../../components/Avator'
import TitleBar from '../../components/TitleBar'
export default {
    data(){
        return{
            msg:'123',
            bgImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578137094187&di=72ef807422fbd6fd2fbbffc1fa4731f7&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1255219096%2C3394049953%26fm%3D214%26gp%3D0.jpg',
            avatar:'http://placehold.it/100'
        }
    },
    components:{
        'v-Avatar':Avatar,
        'v-TitleBar':TitleBar
    }
}
</script>
<style lang="stylus" scoped>
.page_userinfo{
    background #fefefe
    min-height 100vh
    .userInfo{
        margin 0 10px
        margin-top 20px
        border-radius 10px
        padding:8px
    }
    .title_bar{
        height 40px
        line-height 40px
        border-bottom 1px solid #f6f6f6
    }
}


</style>
