<template>
    <table class="table table-striped table-hover tasks">
      <thead>
        <tr>
          <th>Name</th>
          <th>Assigned To</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks">
          <td>
            <a v-link="{ path: '/projects/' + task.project_id + '/tasks/' + task.id }">{{ task.name }}</a>
          </td>
          <td>
            <span v-for="user in task.users.data">
              {{ user.name }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
  export default {
    data () {
      return {
        tasks: []
      }
    },

    ready () {
      this.$http.get('http://jenson.local/api/tasks?include=users').then((response) => {
        this.tasks = response.data.data
      }, (response) => {
        // error
      })
    }
  }
</script>

<style scoped>
  .table td:first-child {
    padding: 0;
  }
  .table td:first-child a {
    display: block;
    padding: .75rem;
  }
  a {
    text-decoration: none;
  }
</style>