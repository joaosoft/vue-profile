<template>
  <div id="app">
    <section>
      <form v-on:submit.prevent="onSubmit()">
        <h1>Sign up</h1>
        <input type="text" name="email" v-model="user.email" placeholder="Email" />
        <input type="password" name="password" v-model="user.password" placeholder="Password" />
        <button>Sign in</button>
      </form>
    </section>
  </div>
</template>

<script>
  import AuthService from '@/api/api.service.auth'

  export default {
    name: 'Sign-up',
    data () {
      return {
        user: {
          email: null,
          password: null,
        },
        data: {
          token: null,
          refresh_token: null,
        },
      }
    },
    methods: {
      onSubmit () {
        AuthService.getToken(this.user).then(response => {
          this.data = response.data;
        });
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>