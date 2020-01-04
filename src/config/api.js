/**
 * 所有的请求接口
 */
import Axios from './axios'
const httpURL = '/api';

// 登录接口
/**
 * @param {stuNumber} 账号
 * @param {password} 密码 
 */
export const reqLogin = (data) => Axios(httpURL + '/teachtool/login/loginstate',data,'post');