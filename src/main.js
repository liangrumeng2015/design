import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import {
  Button,
  Tabbar,
  TabbarItem,
  Search,
  Icon
} from 'vant';
Vue.use(Button).use(Tabbar).use(TabbarItem).use(Search).use(Icon)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
