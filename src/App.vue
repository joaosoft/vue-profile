<template>
  <div id="app">
    <div id="menu">
      <nav>
        <router-link to="/">Profile</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </div>
    <div id="footer">
    </div>

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
