/**
 * 常量
 */
export const DELAYTIME = '1300'   // 延迟时间
export const APPNAME = '辅助教学系统'
export const SCHOOLANDPERSONS =  `Hi! EveryBody~ 欢迎光临。<br/><br/>
该项目由xxx学校xxx学院的学生开发<br/><br/>
该项目使用了Vant组件，是vue的一个组件库，里面不仅有一些漂亮的基础元素，还有一些实用的组件。
由于时间有限，更多功能会后期迭代。<br/><br/>更多功能敬请期待！！！`
// 问答
export const questionData = [
  {
    q:'1. 为什么我登录不了辅助教学平台？',
    a:`登录不了辅助教学平台有如下两种情况：<br/>
        1）辅助教学平台中没有相应的用户信息。<br/>
        2）用户名存在，但密码出错。用户更改初始密码后遗忘，辅助教学平台不提供查询密码的功能，只能联系管理员恢复初始密码，建议老师同学们在更改密码后自行保管新密码。`
  },
  {
    q:'2. 教师如何新增课程资源？',
    a:'教师联系管理员取得后台访问入口和相关权限，登录后台管理系统进行新增。'
  }
]
// 日志
export const logsData = [
  {
    time:'2019-12-12<br/><br/>  辅助教学平台v0.1.3版本上线完成',
    content:'上线内容：平台新版本上线，新增问答功能，教学辅助平台优化。'
  },
  {
    time:'2019-11-25<br/><br/>   辅助教学平台v0.1.2版本上线完成',
    content:'上线内容：平台新版本上线，修复课程表查询功能bug。'
  },
  {
    time:'2019-11-10<br/><br/>   辅助教学平台v0.1.1版本上线完成',
    content:'上线内容：平台新版本上线，新增文章资源查看功能，新增课程表查询功能。'
  },
  {
    time:'2019-09-15<br/><br/>   辅助教学平台v0.1.0版本上线完成',
    content:'上线内容：平台初级版本上线'
  }
]

// 技术支持
export const supportTxt = `该辅助教学平台由长春师范大学计算机学院技术部负责管理和维护，如果您在使用过程遇到了问题，请通过以下方式联系我们，我们将为您提供及时的帮助和支持。<br/><br/>
电话：0431-86168123 <br/>
邮箱：cs@163.com <br/>
QQ群：11111(仅教师及助教) <br/>
地址：长春市二道区长春师范大学`

/**
 * 页面的相关图片
 */
export const LBPICS = [require('@/assets/lb01.png'), require('@/assets/lb02.png'), require('@/assets/lb03.png')] // 首页轮播图
export const PIC = '' // 功能页  我的  上面的图片

/**
 * 功能页数据配置
 */
export const functionPage = [{
    icon: "description",
    txt: "课程",
    color: "#09bc9f",
    path: "/lesson"
  },
  {
    icon: "send-gift-o",
    txt: "教师课程表",
    color: "#ffb608",
    path: "/teacherlesson"
  },
  {
    icon: "apps-o",
    txt: "学生课程表",
    color: "#ff6f5e",
    path: "/studentlesson"
  },
  {
    icon: "description",
    txt: "技术支持",
    color: "#09bc9f",
    path: "/help"
  },
  {
    icon: "send-gift-o",
    txt: "问答",
    color: "#ffb608",
    path: "/question"
  },
  {
    icon: "apps-o",
    txt: "日志",
    color: "#ff6f5e",
    path: "/logs"
  },
  {
    icon: "description",
    txt: "版权",
    color: "#09bc9f",
    path: "/copy"
  },
  {
    icon: "send-gift-o",
    txt: "意见反馈",
    color: "#ffb608",
    path: "/suggest"
  },
  {
    icon: "apps-o",
    txt: "关于",
    color: "#ff6f5e",
    path: "/about"
  }
]

/**
 * tab栏的相关配置
 */
export const tabData = [{
    icon: "home-o",
    info: "",
    msg: "首页",
    path: "/tab1"
  },
  {
    icon: "friends-o",
    info: "",
    msg: "功能",
    path: "/tab3"
  },
  {
    icon: "setting-o",
    info: "",
    msg: "我的",
    path: "/tab4"
  }
]
