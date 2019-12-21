import Vue from 'vue'
import App from './App.vue'
import base from 'assets/css/base.css'
import router from './router/index.js'
import store from './store/index.js'
import Toast from 'components/common/Toast/index.js'

Vue.config.productionTip = false

Vue.use(Toast)

Vue.prototype.bus = {
  sayHI:'hello'
}

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
