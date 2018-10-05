<template>
  <div id="app">
   <nav>
     <router-link to="/">Home</router-link>
       <router-link to="/monitor">Monitor</router-link>
     <router-link to="/about">About</router-link>
   </nav>

    <router-view />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style src="./app.css"/>
