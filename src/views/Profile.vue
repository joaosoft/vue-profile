<template>
  <div id="app">

    <div v-for="section in sections" :key="section.key">

      <section>
        <h1>{{ section.name }}</h1>

        <div v-for="content in section.contents" :key="content.key">
          <b><b>{{ content.content.title }}</b></b>
          <p>{{ content.content.description }}</p>
          <p>{{ content.content.url }}</p>
          <p><img v-bind:src="content.content.build"></p>
        </div>

      </section>

    </div>

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
            sections: [],
        }),
        created () {
            this.initialize()
        },

        methods: {
            initialize () {
                ProfileService.sectionsContents().then(response => {
                    this.sections = response.data;
                });
            },
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>