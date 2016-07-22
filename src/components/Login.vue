<template>
  <form @submit.prevent="login(user)">
    <div class="form-group">
      <input type="email" class="form-control" v-model="user.email" placeholder="Email">
    </div>
    <div class="form-group">
      <input type="password" class="form-control" v-model="user.password" placeholder="Password">
    </div>
    <button class="btn btn-primary">Login</button>
  </form>
</template>

<script>
import { login } from '../modules/auth/actions'

export default {
  vuex: {
    actions: {
      login
    }
  },

  data () {
    return {
      user: {
        email: null,
        password: null
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
