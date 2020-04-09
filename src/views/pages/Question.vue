<template>
    <div>
        <ul class="qa_part">
            <li v-for="(item,idx) in questionData" :key="idx">
                <div>{{item.q}}</div>
                <span v-html="item.a"></span>
            </li>
        </ul>
    </div>
</template>
<script>
import {questionData} from '../../config/constant'
export default {
    data(){
        return{
            msg:'',
            questionData
        }
    }
}
</script>
<style scoped>
.qa_part{
    padding: 10px;
    padding-top: 20px;
    min-height: 100vh;
    box-sizing: border-box;
}
.qa_part li{
    padding-bottom: 10px;
}
.qa_part li>div{
    font-size: 16px;
    font-weight: bold;
}
.qa_part li>span{
    font-size: 14px;
    color: #666;
}
</style>