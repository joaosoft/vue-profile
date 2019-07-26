<template>
  <div id="app">
    <section>
      <h1>Login</h1>
      <input type="text" name="username" v-model="input.username" placeholder="Username" />
      <input type="password" name="password" v-model="input.password" placeholder="Password" />
      <button type="button" v-on:click="login()">Login</button>
    </section>
  </div>
</template>

<script>
    export default {
        name: 'Login',
        data: () => ({
            input: {
                username: "",
                password: ""
            }
        }),
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>