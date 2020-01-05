import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookie from 'vue-cookie';
Vue.config.productionTip = false

import {
  Button,
  Tabbar,
  TabbarItem,
  Search,
  Icon,
  Swipe, 
  SwipeItem, 
  Step, 
  Steps,
  RadioGroup, 
  Radio,Field,
  CellGroup,Toast
} from 'vant';
Vue.use(Button).use(Tabbar).use(TabbarItem).
use(Search).use(Icon).use(Swipe).use(SwipeItem).use(Step).use(Steps)
.use(RadioGroup).use(Radio).use(Field).use(CellGroup).use(Toast)

Vue.use(VueCookie)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
