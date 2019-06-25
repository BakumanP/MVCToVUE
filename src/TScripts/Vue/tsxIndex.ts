import Vue from 'vue'
import App from './home'
new Vue({
  render(h:Function) {
    return h(App)
  },
}).$mount('#root');