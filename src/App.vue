<template>
  <div id="app">
    <nav>
      <router-link to="/">Profile</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
import Profile from '@/views/Profile.vue'

export default {
  name: 'app',
  components: {
    Profile
  }
}
</script>

<style src="./app.css"/>
