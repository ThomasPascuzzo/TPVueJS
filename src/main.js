// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import store from './store.js'

Vue.config.productionTip = false

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});


window.axios = axios.create({
  baseURL: 'http://coop.api.netlor.fr/api/',
  params: {
    token: false
  },
  headers: { Authorization: 'Token token=1d82127364e7470ab6693b0d9f1a5686' }
});

window.bus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  beforeCreate () {
    this.$store.commit('initialiseStore');
  },
  template: '<App/>',
  components: { App }
})
