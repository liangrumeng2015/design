import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {
        path: '/grade',
        name: 'grade',
        component: () => import('../views/Grade.vue')
      },
      {
        path: '/addgrade',
        name: 'addgrade',
        component: () => import('../views/addGrade.vue')
      },
      {
        path: '/timetable',
        name: 'timetable',
        component: () => import('../views/TimeTable.vue')
      },
      {
        path: '/usermanagement',
        name: 'usermanagement',
        component: () =>import('../views/UserManagement.vue')
      },
      {
        path: '/editor',
        name: 'editor',
        component: () =>import('../views/editor.vue')
      },
      {
        path: '/articlelist',
        name: 'articlelist',
        component: () =>import('../views/ArticleList.vue')
      },
      {
        path: '/addtimetable',
        name: 'addtimetable',
        component: () =>import('../views/AddTimeTable.vue')
      }

    ]
  },
  
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
