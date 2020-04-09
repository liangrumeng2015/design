<template>
    <div class="suggest">
        <textarea rows="5" placeholder="请输入反馈内容" v-model="message" />
        <van-button type="primary" class="btn_submit" @click="toSubmit">提交反馈</van-button>
    </div>
</template>
<script>

export default {
    data(){
        return{
            message:''
        }
    },
    methods:{
        toSubmit(){
            if(this.message == ''){
               this.$toast({
                    message:'请输入反馈内容'
                })
            }else{  // 提交
                
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
.suggest{
    width 100%
    min-height 100vh
    box-sizing border-box
    background #efefef
}
textarea{
    width 100%
    box-sizing border-box
    resize none
    border-radius 5px
    border none
}
.btn_submit{
    width 80%
    position absolute
    left 50%
    top 140px
    transform translateX(-50%)
}
</style>