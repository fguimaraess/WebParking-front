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
          <v-autocomplete
          v-model="model"
          :items="items"
          :search-input.sync="search"
          item-text="Description"
          item-value="location"
          label="Endereço"
          placeholder="Digite para buscar um endereço"
          return-object
      ></v-autocomplete>
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
      locations: [],
      model: null,
      search: null,
      Endereco: '',
      parkingName: '',
      address: '',
      addressRules: [
        v => !!v || 'Preencha o endereço!'
      ],
    }),

computed: {
      fields () {
        if (!this.model) return []
        return Object.keys(this.model).map(key => {
          return {
            key: this.model["key"],
            value: this.model["value"] || 'n/a'
          }
        })
      },
      items () {
        return this.locations.map(entry => {
          const Description = entry.value.length > 0
            ? entry.value + '...'
            : entry.value

          return Object.assign({}, entry, { Description })
        })
      }
    },

    watch: {
      search (val) {
        if (this.locations.length > 0) return

        if(val.length > 3){
          axios.get('http://localhost:5001/api/Location/GetSuggestions/'+val)
          .then((result) => {
            result.data.forEach(location => {
              this.locations.push({
                key: location.locationId,
                value: `${location.city}, ${location.state}, ${location.country}`
              });
            });
          });
        }
      }
    },

    methods: {
      submit() {
        var data = {
          "code": Math.floor(Math.random() * 1000000000000).toString(),
          "parkingName": this.parkingName,
          "address": this.address,
          "price": 0,
          "coordinates": "",
          "hasDiscount": true,
          "locationId": this.model.key
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