// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
//
// Vue.config.productionTip = false
//
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

import routes from './router/index';

export default {
  name: 'test',
  routes,
  beforeEach(from, to, next) {
    console.log('test:', from.path, to.path);
    next();
  },
  init() { },
}
