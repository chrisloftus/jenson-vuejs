import store from '../../store'
import { logout } from '../../modules/auth/actions'

export default () => {
  logout(store)
  window.router.go({
    name: 'login.index'
  })
}
