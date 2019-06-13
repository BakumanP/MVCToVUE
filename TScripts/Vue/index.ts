import Vue from 'vue'
console.info(document.getElementById('root'));
new Vue({
  created(){
    console.log('创建成功!');
  },
  mounted: function () {
    console.log('挂载成功!')
  },
  data:() =>{
    return {
      hello:'你好啊这个世界'
    }
  },
  render(h:Function) {
    return h('h1',this.hello);
  },
}).$mount('#root');