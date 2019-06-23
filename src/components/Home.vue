<template>

  <div class="container">
    <Menu />
    <h1>{{ msg }}</h1>

    <AddPark />
  </div>
</template>

<script>
import Menu from './Menu'
import AddPark from './AddPark'

export default {
  name: 'ParkingSpot',
  components: {
    Menu,
    AddPark
  },
  data () {
    return {
      msg: 'Parking Spot'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
