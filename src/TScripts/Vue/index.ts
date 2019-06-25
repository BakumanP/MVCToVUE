import Vue from 'vue'

import App from './Tsx.vue'
new Vue({
  render(h:Function) {
    return h(App)
  },
}).$mount('#root');