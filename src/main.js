import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import './assets/styles/main.css'

Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
