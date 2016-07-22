import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'

import auth from './modules/auth'
import comment from './modules/comment'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    comment
  },
  middlewares: [createLogger()]
})
