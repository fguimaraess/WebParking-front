<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import Layout from '@/components/Layout'

export default {
  name: 'App',
  components: {
    Menu
  }
}

</script>

<style>
#app {
  background-color: whitesmoke;
  font-family: 'Verdana';
  height: 100%;
  /* text-align: center; */
  color: #2c3e50;
}

html, body
{
    width: 100%;
    height: 100%;
}
</style>
