import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import echarts from 'echarts'

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
