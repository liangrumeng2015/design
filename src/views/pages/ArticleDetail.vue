<template>
    <div>
        <div class="title">{{conDetail.title}}</div>
        <div class="author_time">{{conDetail.auhtor}} {{conDetail.ctreatTime}}</div>
        <div class="con" v-html="conDetail.htmlcontent"></div>
    </div>
</template>

<script>
import {reqArticleById} from '../../config/api'
export default {
    data(){
        return{
            msg:'',
            conDetail:''
        }
    },
    mounted(){
        console.log()
        let id = this.$route.query.id
        this.getData(id)
    },
    methods:{
        async getData(id){
            const {msg,status,info} = await reqArticleById({id})
            if(status == 1){
                info.ctreatTime = (info.ctreatTime).trim().split(' ')[0]
                this.conDetail = info
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.title{
    text-align center;
    margin:20px auto;
    font-weight bold
}
.author_time{
    text-align right
    margin-right 20px
}
.con{
    padding:18px
}
</style>