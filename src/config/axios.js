/**
 * 发送异步请求
 */
 import axios from 'axios';
 import qs from 'qs';
 import Vue from 'vue'
 import {Toast} from 'vant'
 Vue.use(Toast)

function Axios(url,data={},method = 'get'){
    var that = this;
    return new Promise((resolve,reject)=>{
        let promise;
        if(method == 'get'){
            promise = axios.get(url,{
                params:data
            })
        }else{
            promise = axios.post(url,qs.stringify(data))
        }
        Toast.loading({
            message:'加载中...',
        })
        promise.then((res)=>{
            Toast.clear()
            resolve(res.data);
        }).catch((error)=>{
            Toast(error.message)
        })
    })
}
export default Axios;