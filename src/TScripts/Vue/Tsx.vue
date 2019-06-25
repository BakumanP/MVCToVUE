<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Container name={666}>123abc</Container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Container from '../../components/Container';
@Component({
  components: {
    Container
  }
})
export default class App extends Vue {}
</script>

<style>
</style>