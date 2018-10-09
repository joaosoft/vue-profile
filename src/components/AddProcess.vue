<template>
  <div class="monitor">
    <div class="holder">
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
          process: {}
      }
  },
    methods: {
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
                        .then(function(){});
                }
            });
        },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 300px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
