<template>
  <nav class="navbar navbar-dark navbar-fixed-top bg-inverse">
    <button type="button" class="navbar-toggler hidden-sm-up"
      data-toggle="collapse" data-target="#navbar" aria-expanded="false"
      aria-controls="navbar">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand" v-link="{ path: '/' }">Jenson</a>
    <div id="navbar">
      <form class="pull-xs-right">
        <input type="text" class="form-control" placeholder="Search...">
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  padding-top: 50px;
}
/*
 * Top navigation
 * Hide default border to remove 1px line.
 */
.navbar-fixed-top {
  border: 0;
}
</style>
