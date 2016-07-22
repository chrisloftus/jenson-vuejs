import Vue from 'vue'
import VuexRouterSync from 'vuex-router-sync'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes, redirects } from './routes'
import store from './store'

Vue.use(VueRouter)
Vue.use(VueResource)

store.dispatch('CHECK_AUTHENTICATION')

var router = new VueRouter({
  history: true
})

router.map(routes)

router.redirect(redirects)

router.beforeEach((transition) => {
  if (transition.to.auth && !store.state.auth.authenticated) {
    transition.redirect('/login')
  } else if (transition.to.guest && store.state.auth.authenticated) {
    transition.redirect('/dashboard')
  } else {
    transition.next()
  }
})

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

VuexRouterSync.sync(store, router)
Vue.router = router

router.start(App, '#app')
