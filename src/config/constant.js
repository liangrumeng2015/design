/**
 * 常量
 */
export const DELAYTIME = '1300'
export const APPNAME = '辅助教学系统'
export const SCHOOLANDPERSONS =  `Hi! EveryBody~ 欢迎光临。<br/><br/>
该项目由xxx学校xxx学院的学生开发<br/><br/>
该项目使用了Vant组件，是vue的一个组件库，里面不仅有一些漂亮的基础元素，还有一些实用的组件。
由于时间有限，更多功能会后期迭代。<br/><br/>更多功能敬请期待！！！`

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
    txt: "帮助",
    color: "#09bc9f",
    path: "/help"
  },
  {
    icon: "send-gift-o",
    txt: "问答",
    color: "#ffb608",
    path: "question"
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
