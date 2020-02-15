import Vue from 'vue'
import { Message } from 'element-ui';
Vue.prototype.$message = Message;
// 封装常用的

// message提示
export const messageTip = (status,txt)=>{
    Message[status]({
        message:txt
    })
}
