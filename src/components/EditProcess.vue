<template id="add-process">
    <div>
        <v-card>
            <v-card-title>
                <span class="headline">Process</span>
            </v-card-title>

            <v-card-actions>
                <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
                <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
            </v-card-actions>

            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model="process.name" label="Name"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model="process.type" label="Type"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model="process.description" label="Description"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-select
                                    v-model="process.status"
                                    :items="status"
                                    label="Status"
                            ></v-select>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import MonitorService from '@/api/api.service.monitor'

    export default {
      props: {
        mode: String,
        item: Object,
        index: Number,
        processes: Array,
      },
      data() {
          return {
              process: {
                  id_process: this.$uuid.v4(),
                  name: '',
                  type: '',
                  description: '',
                  status: '',
              },
              status: [
                  'stopped',
                  'running',
              ],
          }
      },
        methods: {
            save(e) {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        e.preventDefault();

                        if (this.mode == 'new') {
                            MonitorService.create(this.process);
                            this.processes.push(this.process);
                        } else {
                            MonitorService.update(this.process.id_process, this.process);

                            this.processes[this.index].name = this.process.name;
                            this.processes[this.index].type = this.process.type;
                            this.processes[this.index].description = this.process.description;
                            this.processes[this.index].status = this.process.status;
                        }

                        this.close();
                    }
                });
            },
            close() {
                this.$emit('close')
            }
        },
        created () {
            if (this.mode == 'edit') {
              this.process.id_process = this.item.id_process;
              this.process.name = this.item.name;
              this.process.type = this.item.type;
              this.process.description = this.item.description;
              this.process.status = this.item.status;
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
