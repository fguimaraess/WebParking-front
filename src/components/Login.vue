<template>
  <div>
    <h2>Login</h2>
    <p v-if="$route.query.redirect">
      You need to login first.
    </p>
    <form @submit.prevent="login">
      <label><input v-model="email" placeholder="email"></label>
      <label><input v-model="pass" placeholder="password" type="password"></label> (hint: password1)<br>
      <button type="submit">login</button>
      <p v-if="error" class="error">Bad login information</p>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: 'felipe',
      pass: '123',
      error: false
    }
  },
  methods: {
    login () {
      localStorage.set('userLogged', 'ok')
    }
  }
}
</script>

<style>
.error {
  color: red;
}
</style>
