import {
  ADD_COMMENT
} from './mutation-types'

export const mutations = {
  [ADD_COMMENT] (state, comment) {
    state.all.push(comment)
  }
}
