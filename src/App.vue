<template>
  <div id="app">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row">
        <sidebar></sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import store from './store'

export default {
  store,

  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style>
body {
  padding-top: 50px;
}
.main {
  padding: 20px;
}
@media (min-width: 768px) {
  .main {
    padding-right: 40px;
    padding-left: 40px;
  }
}
.main .page-header {
  margin-top: 0;
}

</style>
