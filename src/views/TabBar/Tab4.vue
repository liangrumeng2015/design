<template>
    <div class="page_userinfo" v-if="userAllInfo">
        <!-- 用户头像 -->
        <v-Avatar :bgImg="bgImg" :avatar="userAllInfo.sex == 1?imgBoy:imgGirl"  :title='APPNAME'/>
        <!-- 用户信息 -->
        <div class="userInfo">
            <v-TitleBar leftIcon="smile-o" :leftMsg="userAllInfo.userName" iconName="arrow" rightMsg="" bgColor="#fff" />
            <v-TitleBar leftIcon="thumb-circle-o" :leftMsg="userAllInfo.sex == 1?'男':'女'" iconName="arrow" rightMsg="" bgColor="#fff" />
            <v-TitleBar leftIcon="label-o" :leftMsg="userAllInfo.stuNumber" iconName="arrow" rightMsg="" bgColor="#fff" />
            <v-TitleBar leftIcon="bookmark-o" :leftMsg="userAllInfo.majorName" iconName="arrow" rightMsg="" bgColor="#fff" />
            <v-TitleBar leftIcon="bookmark-o" :leftMsg="userAllInfo.className" iconName="arrow" rightMsg="" bgColor="#fff" />
            <van-button type="primary" size="large" class="login_out" @click="toLoginOut">退出登录</van-button>
        </div>
    </div>
</template>
<script>
var that;
import Avatar from '../../components/Avator'
import TitleBar from '../../components/TitleBar'
import {reqLoginOut,reqGetUserInfo} from '../../config/api'
import {DELAYTIME,APPNAME} from '../../config/constant'
import imgBoy from '@/assets/avatar_boy.jpeg'
import imgGirl from '@/assets/avatar_girl.jpeg'

export default {
    data(){
        return{
            msg:'123',
            bgImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578137094187&di=72ef807422fbd6fd2fbbffc1fa4731f7&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1255219096%2C3394049953%26fm%3D214%26gp%3D0.jpg',
            userAllInfo:'',   // 用户所有信息
            imgBoy,
            imgGirl,APPNAME
        }
    },
    components:{
        'v-Avatar':Avatar,
        'v-TitleBar':TitleBar
    },
    created(){
        this.getUserInfo()
    },
    methods:{
        // 退出登录
        async toLoginOut(){
            that = this;
            const {msg,status} = await reqLoginOut();
            if(status == 1){
                that.$toast({
                    message:msg
                })
                that.$cookie.delete('userInfo');
                setTimeout(()=>{
                    that.$router.push({path:'/login'})
                },DELAYTIME)
            }
        },
        // 获取用户信息
        async getUserInfo(){
            that = this;
            var data = {
                userId:JSON.parse(this.$cookie.get('userInfo')).userId
            }
            const {msg,status,info} = await reqGetUserInfo(data);
            console.log(msg,status,info)
            if(status == 1){
                that.userAllInfo = info
            }
        }
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
    .login_out{
        width 100%;
        margin-top:30px
        border-radius:8px
    }
}


</style>
