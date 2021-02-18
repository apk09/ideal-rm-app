<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: "app",
  components: {
    Header
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  letter-spacing: 0.5px;
  margin: 0;
  padding: 0;
}
</style>
