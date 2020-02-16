/**
 * 所有的请求接口
 */
import Axios from './axios'
const httpURL = '/wypapi';

/**登录接口
 * @param {stuNumber} 账号
 * @param {password} 密码 
 * @param {roleId} 角色  学生 教师 管理员分别是0 1 2
 */
export const reqLogin = (data) => Axios(httpURL + '/teachtool/login/loginstate',data,'POST');

/**
 * 退出登录
 */
export const reqLoginOut = () =>Axios(httpURL + '/teachtool/login/logout','POST');


/**
 * 我的，用户个人信息
 * @param {userId} 用户标识
 * sex 1  男
 */
export const reqGetUserInfo = (data) =>Axios(httpURL + '/teachtool/userinfo/findUserInfoById',data,'POST');

/**
 * 查询个人课表
 * @param {id} 用户标识，登录接口里面会返回
 */
export const reqFindLessonByUserId = (data) => Axios(httpURL + '/teachtool/lessonstable/findLessonsByUserId',data,'POST')

/**
 * 根据用户名查询课程表  教师
 * @param {userName} 用户名
 */
export const reqFindTeacherLesson = (data) =>Axios(httpURL + '/teachtool/lessonstable/findTeacherLessonsByUserName',data,'POST');

export const reqArticleList = (data) =>Axios(httpURL + '/teachtool/article/articleAll',data,'post')

export const reqArticleById = (data) =>Axios(httpURL + '/teachtool/article/findArtcleAById',data,'post')