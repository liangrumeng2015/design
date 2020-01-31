import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/tab1',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children: [{
        path: '/tab1',
        name: 'tab1',
        component: () => import('../views/TabBar/Tab1.vue')
      },
      {
        path: '/tab2',
        name: 'tab2',
        component: () => import('../views/TabBar/Tab2.vue')
      },
      {
        path: '/tab3',
        name: 'tab3',
        component: () => import('../views/TabBar/Tab3.vue')
      },
      {
        path: '/tab4',
        name: 'tab4',
        component: () => import('../views/TabBar/Tab4.vue')
      },
    ]
  },
  {
    path: '/searchpage',
    name: 'searchpage',
    component: () => import('../views/SearchPage')
  },
  {
    path: '/logs',
    name: 'logs',
    component: () => import('../views/pages/Logs')
  },
  {
    path: '/teacherlesson',
    name: 'teacherlesson',
    component: () => import('../views/pages/TeacherLesson')
  },
  {
    path: '/studentlesson',
    name: 'studentlesson',
    component: () => import('../views/pages/StudentLesson')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/pages/About')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/Test')
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base:'/myprojectname/',
  routes
})

// 重写路由的push方法
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  console.log('挂载路由导航的', getCookie('userInfo'));
  if(to.path == '/login') return next()
  if(!getCookie('userInfo')) return next('/login')
  next();

  // 获取cookie的
  function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null;
  }
})



export default router
