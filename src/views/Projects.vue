<template>
    <div id="app">
        <v-app id="inspire">
            <modals-container></modals-container>
            <v-card>
                <v-card-title>
                    Projects
                    <v-spacer></v-spacer>
                    <v-btn @click.native="editItem('new', {})" color="primary" dark class="mb-2">New Item</v-btn>
                    <v-text-field
                            v-model="search"
                            append-icon="search"
                            label="Search"
                            single-line
                            hide-details
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                        :headers="headers"
                        :items="sections"
                        :search="search"
                >
                    <template slot="items" slot-scope="props">
                        <td class="text-xs-left">{{ props.item.key }}</td>
                        <td class="text-xs-left">{{ props.item.content }}</td>
                    </template>
                    <v-alert slot="no-results" :value="true" color="error" icon="warning">
                        Your search for "{{ search }}" found no results.
                    </v-alert>
                </v-data-table>
            </v-card>
        </v-app>
    </div>
</template>

<script>
    import ProfileService from '@/api/api.service.profile'

    export default {
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
                ProfileService.query().then(response => {
                    this.sections = response.data;
                });
            },
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
