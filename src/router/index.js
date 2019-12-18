import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/tab1',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children:[
      {
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
  },{
    path:'/searchpage',
    name:'searchpage',
    component:()=>import('../views/SearchPage')
  }
]

const router = new VueRouter({
  routes
})

export default router
