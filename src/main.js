import Vue from 'vue'
import App from './App.vue'
// 自适应改变html字体大小
import 'amfe-flexible'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
