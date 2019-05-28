import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Load someCSS Globally
import 'animate.css';
import './assets/common.css';

new Vue({
  render: h => h(App),
}).$mount('#app')
