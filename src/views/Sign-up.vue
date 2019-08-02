<template>
  <div id="app">
    <section>
      <form v-on:submit.prevent="onSubmit()">
        <h1>Login</h1>
        <input type="text" name="first_name" v-model="user.first_name" placeholder="First name" />
        <input type="text" name="last_name" v-model="user.last_name" placeholder="Last name" />
        <input type="text" name="email" v-model="user.email" placeholder="Email" />
        <input type="password" name="password" v-model="user.password" placeholder="Password" />
        <input type="password" name="password_confirm" v-model="user.password_confirm" placeholder="Confirm Password" />
        <button>Sign in</button>
      </form>
    </section>
  </div>
</template>

<script>
  import AuthService from '@/api/api.service.auth'

  export default {
    name: 'Login',
    data () {
      return {
        user: {
          first_name: null,
          last_name: null,
          email: null,
          password: null,
          password_confirm: null,
        },
        data: null,
      }
    },
    methods: {
      onSubmit () {
        AuthService.signUp(this.user).then(response => {
          this.data = response.data;
        });
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>