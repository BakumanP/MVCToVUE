<template>
  <div>
    <input v-model="msg">
    <p>msg: {{ msg }}</p>
    <p>computed msg: {{ computedMsg }}</p>
    <button @click="greet">Greet</button>
    <Button/>
  </div>
</template>
 

<script lang="ts">
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator';
  import Button from './home'; 
  type IssueTicket = {
    Id: number, 
    Name: string,
  }

  @Component({
    components:{

    }
  })
  export default class App extends Vue {
    /** 信息*/
    msg: number = 123
    /** 年限 */
    year: Date  = new Date
    /** 名称 */
    name: string = null
    
    ticket: IssueTicket = null
    // 声明周期钩子
    mounted () {
      this.greet();
    }
 
    // 计算属性
    get computedMsg () {
      return 'computed ' + this.msg
    }
    // 方法
    greet () {
      alert('greeting: ' + this.msg)
    }
    
  }
</script>

