<template>
  <div>

    <v-navigation-drawer :clipped="clipped" v-model="drawer" app absolute :temporary="drawer">
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
    
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
       <v-toolbar-title>Parking Spot</v-toolbar-title>
      <v-spacer></v-spacer>      
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Menu',

  data () {
    return {
      drawer: false,
      clipped: false,
      items: [
        { title: 'Home', icon: 'home', route: 'Home' },
        { title: 'Buscar', icon: 'search', route: 'SearchParking' },
        { title: 'Adicionar Estacionamento', icon: 'dashboard', route: 'AddParking' }
      ],
      right: null
    }
  },

}
</script>

<style>
.container {
  margin: 0 !important;
}
/* #menu {
    position: relative;
    right: 9%;
} */
</style>
