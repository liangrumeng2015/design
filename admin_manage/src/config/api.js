/**
 * 所有接口的api
 */
import Axios from './axios'
const httpURL = '/api'

/**登录接口
 * @param {stuNumber} 账号
 * @param {password} 密码 
 * @param {roleId} 角色  学生 教师 管理员分别是0 1 2
 */
export const reqLogin = (data) => Axios(httpURL + '/teachtool/login/loginstate',data,'post');


/**
 * 用户信息全量查询
 * 
 */
export const reqFindUserAll = () => Axios(httpURL + '/teachtool/userinfo/findUserAll',{},'post')

/**
 * 用户信息模糊查询带分页
 * 以下参数都是非必填
 * @param {pageNum}  从第几页开始查询
 * @param {pageSize} 每页显示几条
 * @param {stuNumber} 学号
 * @param {userName}   真实姓名
 */
export const reqFindUserByQuery = (data) => Axios(httpURL + '/teachtool/userinfo/findUserByPage',data,'post')


/**
 * 通过id查询用户信息
 * @param {userId} 用户标识
 */
export const reqFindUserById = (data) => Axios(httpURL + '/teachtool/userinfo/findUserById',data,'post')


/**
 * 添加用户信息
 * @param {userName} 用户名称
 * @param {stuNumber} 学号
 * @param {password} 登录密码
 * @param {sex} 性别
 * @param {roleId} 角色id
 * @param {majorId} 专业id
 * @param {classId} 班级id
 * @param {state} 状态，默认添加0
 */
export const reqInsertUser = (data) => Axios(httpURL + '/teachtool/userinfo/insertUser',data,'post')


/**
 * 修改用户信息
 * 以下信息非必填
 * @param {userName} 用户名称
 * @param {stuNumber} 学号
 * @param {password} 登录密码
 * @param {sex} 性别
 * @param {roleId} 角色id
 * @param {majorId} 专业id
 * @param {classId} 班级id
 * @param {state} 状态，默认添加0
 */
export const reqUpdateUser = (data) => Axios(httpURL + '/teachtool/userinfo/updateUserById',data,'post')


/**
 * 删除用户信息
 * @param {userId} 用户标识
 */
export const reqDeleteUser = (data) => Axios(httpURL + '/teachtool/userinfo/deleteUserById',data,'post')


