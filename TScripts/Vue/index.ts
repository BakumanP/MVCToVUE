import Vue from 'vue'
import App from './app.vue'
new Vue({
  created(){
    console.log('创建成功!');
  },
  mounted: function () {
    console.log('挂载成功!')
  },
  render(h:Function) {
    return h(App)
  },
}).$mount('#root');