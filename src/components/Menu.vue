<template>
  <v-navigation-drawer permanent>
    <v-toolbar flat>
      <v-list>
        <v-list-tile :to="{path: '/'}">
          <v-list-tile-title class="title">
            Parking Spot
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        :to="item.route">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>
            {{ item.title }}
            </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
      name: 'Menu',
    data () {
      return {
        items: [
          { title: 'Buscar', icon: 'search', route: 'SearchParking' },
          { title: 'Adicionar Estacionamento', icon: 'dashboard', route: 'AddParking' },
        ],
        right: null
      }
    }
  }
</script>