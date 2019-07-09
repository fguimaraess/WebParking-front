<template>
<v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.parkingName">
        <v-list-tile-content>
          <v-list-tile-title>
                {{ item }}
            </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
</template>

<script>
import axios from '../../../node_modules/axios'
 export default {
     name: 'Search',
    data: () => ({
      items : {}
    }),
    created() {
          this.getAll(this._data.items)
    },
    methods: {
      getAll(items) {
        axios.get('http://parkingspot-back.herokuapp.com/api/Parking/all')
        .then((result) => {
            if(result.data.length > 0) {
                items = result.data;
            }
        })
      }
    }
  }
</script>