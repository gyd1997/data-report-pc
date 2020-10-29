import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './style/index.css'
import './plugins/vcharts'
import echarts from 'echarts'
import vueEcharts from 'vue-echarts'

// import 'echarts/map/js/china.js'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.component('v-charts', vueEcharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
