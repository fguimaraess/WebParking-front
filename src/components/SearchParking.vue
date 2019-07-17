<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>

        <v-toolbar color="teal" dark>
          <v-toolbar-title>Estacionamentos</v-toolbar-title>
        </v-toolbar>

        <v-list>
          <v-list-group
            v-for="item in items"
            :key="item.id"
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
          >

          <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.parkingName }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
          </template>

            <v-list-tile-content style="padding: 15px">
              <v-list-tile-title><strong>Detalhes:</strong> </v-list-tile-title>
              <v-list-tile-title><strong>Endereço:</strong> {{ item.address }}</v-list-tile-title>
              <v-list-tile-title><strong>Possui desconto:</strong> {{ item.hasDiscount }}</v-list-tile-title>
              <br/>
              <v-list-tile-title><strong>Preços:</strong> </v-list-tile-title>
              <v-list-tile-title>1ª Hora: R${{ item.price.firstHour}} </v-list-tile-title>
              <v-list-tile-title>Após 1 hora: R${{ item.price.everyHour }}</v-list-tile-title>
              <v-list-tile-title>Diária: R${{ item.price.daily }}</v-list-tile-title>
              <v-list-tile-title>Mensal: R${{ item.price.monthly }}</v-list-tile-title>
            </v-list-tile-content>


            


          </v-list-group>
          </v-list>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
 export default {
     name: 'Search',
    data: () => ({
      items : []
    }),
    created() {
          this.getAll(this._data.items)
    },
    methods: {
      getAll(items) {
        axios.get('https://parkingspot-back.herokuapp.com/api/Parking/all')
        .then((result) => {
            if(result.data.length > 0) {
                result.data.forEach(parking => {
                  if(parking.hasDiscount)
                    parking.hasDiscount = "Sim"
                  else
                    parking.hasDiscount = "Não"

                  items.push(parking);
                });
            } else {
              items.push("Nenhum estacionamento encontrado!")
            }
        })
      }
    }
  }
</script>