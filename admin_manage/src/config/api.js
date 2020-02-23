/**
 * 所有接口的api   1  男   0  女
 */
import Axios from './axios'
const httpURL = '/wypapi'
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
export const reqFindUserAll = (data) => Axios(httpURL + '/teachtool/userinfo/findUserAll',data,'post')

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


/**
 * 查询所有专业
 * 无参数
 */
export const reqFindMajorAll = (data) => Axios(httpURL + '/teachtool/major/findMajorAll',data,'post')

/**
 * 查询班级
 * @params {majorId}
 */
export const reqFindMajorById = (data) => Axios(httpURL + '/teachtool/major/findMajorById',data,'post');

/**
 * 所有专业信息查询
 * 
 */
export const reqFindMajorInfoAll = (data) => Axios(httpURL + '/teachtool/major/findMajorInfoAll',data,'post');

/**
 * 所有班级信息
 */
export const reqFindClassAll = (data) => Axios(httpURL + '/teachtool/major/findClassAll',data,'post');

/**
 * 通过用户名查询课程信息
 * username
 */
export const reqFindName = (data) =>Axios(httpURL + '/teachtool/findTeacherLessonsByUserName',data,'post');

/**
 * 查询个人课表
 * @param {id} 用户标识，登录接口里面会返回
 */
export const reqFindLessonByUserId = (data) => Axios(httpURL + '/teachtool/lessonstable/findLessonsByUserId',data,'POST')


export const reqInsertArticle = (data) =>Axios(httpURL + '/teachtool/article/insertArticle',data,'POST')

export const reqArticleAll = (data) =>Axios(httpURL + '/teachtool/article/articleAll',data,'POST')

export const reqFindArtcleAById = (data) =>Axios(httpURL + '/teachtool/article/findArtcleAById',data,'POST')

export const reqUpdateArticle = (data) =>Axios(httpURL + '/teachtool/article/updateArticle',data,'POST')

export const reqDeleteArticle = (data) =>Axios(httpURL + '/teachtool/article/deleteArticle',data,'post')

export const reqUploadImgApi = httpURL + '/teachtool/article/uploadimg'

export const reqInsertLessons = (data) =>Axios(httpURL + '/teachtool/lessonstable/insertLessons',data,'post')

export const reqFindLessonsAll = (data) =>Axios(httpURL + '/teachtool/lessonstable/findLessonsAll',data,'post')

export const reqFindLessonsById = (data) =>Axios(httpURL + '/teachtool/lessonstable/findLessonsById',data,'post')

export const reqInsertMajor = (data) =>Axios(httpURL + '/teachtool/major/insertMajor',data,'post')

export const reqUpdateMajorById = (data) =>Axios(httpURL + '/teachtool/major/updateMajorrById',data,'post');