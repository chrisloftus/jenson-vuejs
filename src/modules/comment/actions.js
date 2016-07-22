import Vue from 'vue'
import * as types from './mutation-types'

export const addComment = ({ dispatch, state }, comment) => {
  Vue.http.post('http://jenson.local/api/projects/' +
    state.route.params.project_id + '/tasks/' + state.route.params.task_id +
    '/comments', comment)
    .then(
      ({ data }) => {
        dispatch(types.ADD_COMMENT, comment)
      },
      () => {
        // Failed
      }
    )
}
