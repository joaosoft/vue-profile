<template>
    <div id="app">
        <v-app id="inspire">
            <modals-container></modals-container>
            <v-card>
                <v-card-title>
                    Processes
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
                        :items="processes"
                        :search="search"
                >
                    <template slot="items" slot-scope="props">
                        <td class="text-xs-left">{{ props.item.name }}</td>
                        <td class="text-xs-left">{{ props.item.type }}</td>
                        <td class="text-xs-left">{{ props.item.description }}</td>
                        <td class="text-xs-left">{{ props.item.status }}</td>
                        <td class="text-xs-left layout px-0">
                            <v-icon
                                    small
                                    class="mr-2"
                                    @click="editItem('edit', props.item)"
                            >
                                edit
                            </v-icon>
                            <v-icon
                                    small
                                    @click="deleteItem(props.item)"
                            >
                                delete
                            </v-icon>
                        </td>
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
    import MonitorService from '@/api/api.service.monitor'
    import EditProcessComponent from '../components/EditProcess.vue'

    export default {
        data: () => ({
            headers: [
                { text: 'Name', value: 'name' },
                { text: 'Type', value: 'type' },
                { text: 'Description', value: 'description' },
                { text: 'Status', value: 'status' },
            ],
            search: '',
            processes: [],
        }),
        created () {
            this.initialize()
        },

        methods: {
            initialize () {
                MonitorService.query().then(response => {
                    this.processes = response.data;
                });
            },

            editItem (mode, item) {
                const index = this.processes.indexOf(item)
                this.$modal.show(EditProcessComponent, {
                        mode: mode,
                        item: item,
                        index: index,
                        processes: this.processes,
                });
            },

            deleteItem (item) {
                const index = this.processes.indexOf(item)
                if (confirm('Are you sure you want to delete this item?')) {
                    MonitorService.delete(this.processes[index].id_process);
                    this.processes.splice(index, 1)
                }
            },
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
