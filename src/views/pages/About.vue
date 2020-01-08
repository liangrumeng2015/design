<template>
    <div class="about_wrap">
        <h4>关于{{APPNAME}}</h4>
        <div class="con" v-html="SCHOOLANDPERSONS"></div>
    </div>
</template>
<script>
import {APPNAME,SCHOOLANDPERSONS} from '../../config/constant'
export default {
    data(){
        return{
            APPNAME,
            SCHOOLANDPERSONS
        }
    }
}
</script>
<style lang="stylus" scoped>
.about_wrap{
    width 95%;
    margin:30px auto;
    border-radius 8px
    padding 20px
    box-sizing:border-box
    box-shadow 5px 5px 5px #efefef,-5px -5px 5px #efefef;
    color #666666
    h4{
        margin 0;
        text-align center
        margin-bottom 20px
    }
}
</style>