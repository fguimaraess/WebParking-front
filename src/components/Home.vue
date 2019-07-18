<template>
  <div class="container">
    Bem vindo ao <strong>Parking Spot!</strong> <br/>
    
    Pare de ficar perdido e encontre o estacionamento mais próximo do seu destino.
  </div>
</template>

<script>
import Menu from './Menu'

export default {
  name: 'ParkingSpot',
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
