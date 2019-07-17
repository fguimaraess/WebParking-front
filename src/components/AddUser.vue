<template>
<div id="add">
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-layout>
        <v-flex xs12 md 4><h1>Novo Usuário</h1></v-flex>
      </v-layout>

    <v-layout>
    <v-flex xs3 md3></v-flex>
        <v-flex xs5 md6>
        <v-text-field
        v-model="username"
        label="Nome"
        required
    ></v-text-field>
    </v-flex>
    </v-layout>
    
    <v-layout>
    <v-flex xs3 md3></v-flex>
        <v-flex xs5 md6>
        <v-text-field
        v-model="email"
        label="E-mail"
        required
    ></v-text-field>
    </v-flex>
    </v-layout>

    <v-layout>
    <v-flex xs3 md3></v-flex>
        <v-flex xs5 md6>
        <v-text-field
        v-model="password"
        :append-icon="show1 ? 'visibility' : 'visibility_off'"
        :type="show1 ? 'text' : 'password'"
        label="Senha"
        @click:append="show1 = !show1"
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
import axios from 'axios'
const config = { headers: { 'Content-Type': 'application/json' } };

  export default {
      name: 'AddUser',
    data: () => ({
        show1: false,
        valid: false,
        model: null,
        search: null,
        username: '',
        email: '',
        password: '',
    }),
    methods: {
      submit() {
        var data = {
            "username": this.username,
            "email": this.email,
            "password" : this.password
        }
        
        axios.post('https://parkingspot-back.herokuapp.com/api/User/add', JSON.stringify(data), config)
        .then((result) => {
          alert("Usuário cadastrado!")
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