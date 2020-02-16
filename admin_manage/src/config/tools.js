import Vue from 'vue'
import { Message,Loading } from 'element-ui';
Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading;
// 封装常用的

// message提示
export const messageTip = (status,txt)=>{
    Message[status]({
        message:txt
    })
}
// loading提示   关闭提示loadingTip().close()
export const loadingTip = (txt) =>{
    return Loading.service({
        lock: true,
        text: txt,
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}
