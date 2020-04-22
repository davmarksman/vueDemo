import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:5000' // same as the Url the server listens to
Vue.prototype.$http = axios

Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


