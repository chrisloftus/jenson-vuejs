import Vue from 'vue'
import VuexRouterSync from 'vuex-router-sync'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import authService from './services/auth'
import { routes, redirects } from './routes'
import store from './store'

Vue.config.debug = false

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.interceptors.push((request, next) => {
  next((response) => {
    // If the token is invalid
    if (response.status === 401) {
      authService.logout()
    }
  })
})

store.dispatch('CHECK_AUTHENTICATION')

const Router = new VueRouter({
  history: true
})

Router.map(routes)

Router.redirect(redirects)

Router.beforeEach((transition) => {
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

VuexRouterSync.sync(store, Router)
window.router = Router

Router.start(App, '#app')
