<template>
    <div class="support_txt" v-html="supportTxt"></div>
</template>
<script>
import {supportTxt} from '../../config/constant'
export default {
    data(){
        return{
            supportTxt
        }
    }
}
</script>
<style scoped>
.support_txt{
    padding:20px;
    box-sizing: border-box;
    font-size: 14px;
    color: #666;
}
</style>