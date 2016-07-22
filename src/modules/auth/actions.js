import Vue from 'vue'
import * as types from './mutation-types'

export const login = ({ dispatch }, user) => {
  Vue.http.post('http://jenson.local/api/authenticate', user)
    .then(
      ({ data }) => {
        dispatch(types.LOGIN_SUCCESSFUL, data.token)
        Vue.router.go({
          name: 'dashboard.show'
        })
      },
      () => {
        // Login failed
      }
    )
}

export const logout = ({ dispatch }) => {
  dispatch(types.LOGOUT)
  Vue.router.go({
    name: 'login.index'
  })
}

export const checkAuthentication = ({ dispatch }) => {
  dispatch(types.CHECK_AUTHENTICATION)
}
