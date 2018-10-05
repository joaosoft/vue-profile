<template>
  <div class="monitor">
    <div class="holder">

       <!-- when there are no processes -->
       <p v-if="processes.length==0">there is no processes configured</p>

       <!-- list of processes -->
        <table>

            <th>Id</th>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Date from</th>
            <th>Date to</th>
            <th>Time from</th>
            <th>Time to</th>
            <th>Days off</th>
            <th>Monitor</th>
            <th>Status</th>
            <th>Updated at</th>
            <th>Created at</th>

            <tr v-for="process in processes">
                <td>{{process.id_process}}</td>
                <td>{{process.name}}</td>
                <td>{{process.type}}</td>
                <td>{{process.description}}</td>
                <td>{{process.date_from}}</td>
                <td>{{process.date_to}}</td>
                <td>{{process.time_from}}</td>
                <td>{{process.time_to}}</td>
                <td>{{process.days_off}}</td>
                <td>{{process.monitor}}</td>
                <td>{{process.status}}</td>
                <td>{{process.updated_at}}</td>
                <td>{{process.created_at}}</td>
            </tr>

        </table>

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
export default {
  data() {
      return {
          processes: [
              {
                  name: 'joao',
              }
          ],
          process: {}
      }
  },
    methods: {
        loadProcesses: function(){
            return this.$http.get('http://localhost:8001/api/v1/processes').then(function(response){
                this.processes = response.data;
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

                  this.$http.post('http://localhost:8001/api/v1/processes', this.process)
                    .then(function(){})
                    .catch(function (error) {
                        console.log(error);
                    });
              }
          });
      },
      removeProcess(id_process) {
        this.array.splice(id_process, 1);
      },
  },
    created: function(){
        this.loadProcesses();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
