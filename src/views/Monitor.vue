<template>
    <div class="monitor">
        <div class="holder">

            <!-- list of processes -->
            <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-fixed-header>
                <md-table-toolbar>
                    <div class="md-toolbar-section-start">
                        <h1 class="md-title">Processes</h1>
                    </div>

                    <md-field md-clearable class="md-toolbar-section-end">
                        <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
                    </md-field>
                </md-table-toolbar>

                <md-table-row slot="md-table-row" v-for="(item, index) in searched" :key="index">
                    <md-table-cell md-label="ID" md-sort-by="id_process" md-numeric>{{ item.id_process }}</md-table-cell>
                    <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
                    <md-table-cell md-label="Type" md-sort-by="type">{{ item.type }}</md-table-cell>
                    <md-table-cell md-label="Description" md-sort-by="description">{{ item.description }}</md-table-cell>
                    <md-table-cell md-label="Status" md-sort-by="status">{{ item.status }}</md-table-cell>
                    <md-table-cell><i class="fa fa-minus-circle" v-on:click="removeProcess(index)"></i></md-table-cell>
                </md-table-row>

                <md-table-empty-state
                        md-label="No processes found"
                        :md-description="`No processes found for this '${search}' query. Try a different search term or create a new process.`">
                    <md-button class="md-primary md-raised" @click="addProcess">Create New Process</md-button>
                </md-table-empty-state>
            </md-table>


            <!-- add new -->
            <form @submit.prevent="addProcess">
                <table>
                    <!-- id_process -->
                    <tr>
                        <th>Id:</th>
                        <td>
                            <input type="text" placeholder="Enter the id" v-model="process.id_process" v-validate="'required:true'" name="id_process">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <p class="alert" v-if="errors.has('id_process')"> {{ errors.first('id_process') }}</p>
                        </td>
                    </tr>

                    <!-- name -->
                    <tr>
                        <th>Name:</th>
                        <td>
                            <input type="text" placeholder="Enter the name" v-model="process.name" v-validate="'required:true'" name="name">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <p class="alert" v-if="errors.has('name')"> {{ errors.first('name') }}</p>
                        </td>
                    </tr>

                    <!-- type -->
                    <tr>
                        <th>Type:</th>
                        <td>
                            <input type="text" placeholder="Enter the type" v-model="process.type" v-validate="'required:true'" name="type">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <p class="alert" v-if="errors.has('type')"> {{ errors.first('type') }}</p>
                        </td>
                    </tr>

                    <!-- description -->
                    <tr>
                        <th>Description:</th>
                        <td>
                            <input type="text" placeholder="Enter the description" v-model="process.description" name="description">
                        </td>
                    </tr>

                    <tr>
                        <!-- date_from -->
                        <th>Date from:</th>
                        <td>
                            <input type="text" placeholder="Enter the date from" v-model="process.date_from" name="date_from">
                        </td>

                        <!-- date_to -->
                        <th>Date to:</th>
                        <td>
                            <input type="text" placeholder="Enter the date to" v-model="process.date_to" name="date_to">
                        </td>
                    </tr>

                    <tr>
                        <!-- time_from -->
                        <th>Time from:</th>
                        <td>
                            <input type="text" placeholder="Enter the time from" v-model="process.time_from" name="time_from">
                        </td>
                        <!-- time_to -->
                        <th>Time to:</th>
                        <td>
                            <input type="text" placeholder="Enter the time to" v-model="process.time_to" name="time_to">
                        </td>
                    </tr>

                    <!-- days_off -->
                    <tr>
                        <th>Days off:</th>
                        <td>
                            <input type="text" placeholder="Enter the days off" v-model="process.days_off" name="days_off">
                        </td>
                    </tr>

                    <!-- monitor -->
                    <tr>
                        <th>Monitor:</th>
                        <td>
                            <input type="text" placeholder="Enter the monitor" v-model="process.monitor" name="monitor">
                        </td>
                    </tr>

                    <!-- submit -->
                    <button v-on:click="addProcess">New</button>
                </table>
            </form>
        </div>
    </div>
</template>

<script>
    import MonitorService from '@/api/api.service.monitor'

    const toLower = text => {
        return text.toString().toLowerCase()
    }

    const searchByName = (items, term) => {
        if (term) {
            return items.filter(item => toLower(item.name).includes(toLower(term)))
        }

        return items
    }

    export default {
        data() {
            return {
                search: null,
                searched: [],
                processes: [],
                process: {}
            }
        },
        methods: {
            loadProcesses: function(){
                MonitorService.query().then(response => {
                    this.processes = response.data;
                    this.searched = this.processes;
                });
            },
            addProcess(e) {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.processes.push({
                            id_process: this.process.id_process,
                            name: this.process.name,
                            type: this.process.type,
                            description: this.process.description,
                            date_from: this.process.date_from,
                            date_to: this.process.date_to,
                            time_from: this.process.time_from,
                            time_to: this.process.time_to,
                            days_off: this.process.days_off,
                            monitor: this.process.monitor,
                            status: 'stopped',
                        });
                        e.preventDefault();

                        MonitorService.create(this.process);
                    }
                });
            },
            removeProcess(index) {
                MonitorService.delete(this.searched[index].id_process);
                this.searched.splice(index, 1);
            },
            searchOnTable () {
                this.searched = searchByName(this.processes, this.search)
            }
        },
        created: function(){
            this.loadProcesses();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
