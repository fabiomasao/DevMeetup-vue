// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {store} from './store'

Vue.use(Vuetify, { theme: {
  primary: "#f44336",
  secondary: "#e57373",
  accent: "#9c27b0", 
  error: "#f44336",
  warning: "#ffeb3b", 
  info: "#2196f3", 
  success: "#4caf50"
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
