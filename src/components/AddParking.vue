<template>
<div id="add">
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-layout>
        <v-flex xs12 md 4><h1>Novo Estacionamento</h1></v-flex>
      </v-layout>

      <v-layout>
        <v-flex xs4 md4></v-flex>
          <v-flex xs4 md4>
          <v-text-field
            v-model="parkingName"
            label="Nome"
            required
        ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex xs2 md2></v-flex>
        <v-flex xs5 md6>
          <v-text-field
            v-model="address"
            :rules="addressRules"
            label="Endereço"
            required
        ></v-text-field>
        </v-flex>

        <v-flex xs5 md6>
          <v-text-field
            v-model="coordinates"
            :rules="coordinateRules"
            label="Coordenadas"
            required
        ></v-text-field>
        </v-flex>
      </v-layout>
      
    </v-container>
    <v-btn @click="submit">Salvar</v-btn>
  </v-form>
</div>
</template>


<script>
import axios from '../../../node_modules/axios'
const config = { headers: { 'Content-Type': 'application/json' } };

  export default {
    data: () => ({
      valid: false,
      parkingName: '',
      address: '',
      addressRules: [
        v => !!v || 'Preencha o endereço!'
      ],
      coordinates: '',
      coordinateRules: [
        v => !!v || 'Preencha as coordenadas!'
      ],
    }),
    
    methods: {
      submit() {
        var data = {
          "code": Math.floor(Math.random() * 1000000000000).toString(),
          "parkingName": this._data.parkingName,
          "adress": this._data.address,
          "price": 0,
          "coordinates": [
            this._data.coordinates
          ],
          "hasDiscount": true
        }
        axios.post('http://localhost:5001/api/Parking/add', JSON.stringify(data), config)
        .then((result) => {
          alert("Estacionamento cadastrado!")
          window.location.reload()
        })
      }
    }
  }
</script>

<style scoped>
body {
  background-color: black;
}

#add {
  margin-top: -150px !important;
}
</style>