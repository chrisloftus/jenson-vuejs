import Vue from 'vue'
import store from '../../store'
import { login } from '../../modules/auth/actions'

const success = ({ data }) => {
  login(store, data.token)
  window.router.go({
    name: 'dashboard'
  })
}

const failed = () => {
    //
}

export default (user) => {
  Vue.http.post('auth', user).then(success, failed)
}
