<template>
    <div class="container">
        <Menu/>
        <div id="router">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Menu from './Menu'

export default {
  name: 'Layout',
  components: {
    Menu
  },
  data () {
    return {
      msg: 'Parking Spot'
    }
  }
}
</script>

<style>
#router {
    padding-top: 50px;
}
</style>