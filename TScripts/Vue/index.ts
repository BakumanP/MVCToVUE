import Vue from 'vue'
new Vue({
  el:'#app',
  created(){
    console.log('我引入了!');
    console.info(this);
  },
  data(){
    return {
      name: 'is Vue!'
    }
  },
  methods: {
    
  },
});