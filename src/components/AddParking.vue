<template>
<div id="add">
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-layout justify-center>
        <h1>Novo Estacionamento</h1>
      </v-layout>

      <v-layout>
        <v-flex xs3 md3></v-flex>
          <v-flex xs5 md6>
          <v-text-field
            v-model="parkingName"
            label="Nome do Estabelecimento"
            required
        ></v-text-field>
        </v-flex>
      </v-layout>

       <v-layout>
        <v-flex xs3 md3></v-flex>
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

      <v-layout>
        <v-flex xs2 md2></v-flex>
        <v-flex xs2 md2>Preços:</v-flex>
      </v-layout>

      <v-layout>
        <v-flex xs3 md3></v-flex>
          <v-flex xs2 md2>
          <v-text-field
            v-model="firstHour"
            label="Primeira hora"
            required
        ></v-text-field>
        </v-flex>

        <v-flex xs2 md2>
        <v-text-field
          v-model="everyHour"
          label="Demais horas"
          required
        ></v-text-field>
        </v-flex>

          <v-flex xs2 md2>
          <v-text-field
            v-model="daily"
            label="Diária"
            required
        ></v-text-field>
        </v-flex>

        <v-flex xs2 md2>
          <v-text-field
            v-model="monthly"
            label="Mensal"
            required
        ></v-text-field>
        </v-flex>
      </v-layout>

    </v-container>

    <v-layout justify-center> 
        <v-btn @click="submit">Salvar</v-btn>
    </v-layout>
  </v-form>
</div>
</template>

<script>
import axios from 'axios'
const config = { headers: { 'Content-Type': 'application/json' } }

export default {
  data: () => ({
    valid: false,
    locations: [],
    model: null,
    search: null,
    Endereco: '',
    parkingName: '',
    address: '',
    firstHour: '',
    everyHour: '',
    daily: '',
    monthly: ''
  }),

  computed: {
    fields () {
      if (!this.model) return []
      return Object.keys(this.model).map(key => {
        return {
          key: this.model['key'],
          value: this.model['value'] || 'n/a'
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
      if (val.length === 0) return

      if (val.length > 3) {
        axios.get('http://localhost:5001/api/Location/GetSuggestions/' + val)
          .then((result) => {
            result.data.forEach(location => {
              this.locations.push({
                key: location.locationId,
                value: `${location.district}, ${location.city}, ${location.state}`
              })
            })
          })
      }
    }
  },

  methods: {
    submit () {
      var data = {
        'parkingName': this.parkingName,
        'address': this.model.value,
        'price': {
          'FirstHour': this.firstHour,
          'EveryHour': this.everyHour,
          'Daily': this.daily,
          'Monthly': this.monthly
        },
        'coordinates': '',
        'hasDiscount': true,
        'locationId': this.model.key
      }

      axios.post('http://localhost:5001/api/Parking/add', JSON.stringify(data), config)
        .then((result) => {
          alert('Estacionamento cadastrado!')
          window.location.reload()
        })
    }
  }
}
</script>

<style scoped>
.container {
  padding: 0 !important;
  padding-top: 180px !important;
}

#add {
  margin-top: -150px !important;
}
</style>
