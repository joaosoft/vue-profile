<template>
  <div id="app">

    <section>
      <h1>{{ section.name }}</h1>

      <div v-for="content in section.contents" :key="content.key">
        <h2>{{ content.content.title }}</h2>
        <div class="section-body">
          <p>{{ content.content.description }}</p>
          <a v-bind:href="content.content.url"> {{ content.content.url }} </a>
          <p><img v-bind:src="content.content.build"></p>
        </div>

      </div>

    </section>

  </div>
</template>

<script>
    import ProfileService from '@/api/api.service.profile'

    export default {
        name: 'Profile',
        data: () => ({
            headers: [
                { text: 'Key', value: 'key' },
                { text: 'Content', value: 'content' },
            ],
            search: '',
            section: {},
        }),
        created () {
            this.initialize()
        },

        methods: {
            initialize () {
                ProfileService.contents('about').then(response => {
                    this.section = response.data;
                });
            },
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>