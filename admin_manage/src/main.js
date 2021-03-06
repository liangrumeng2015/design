import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookie from 'vue-cookie';
import './config/elementUI'

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(VueCookie);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
