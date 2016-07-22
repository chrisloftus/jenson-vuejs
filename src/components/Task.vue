<template>
  <h1>{{ task.name }}</h1>
  <vue-markdown v-if="task.body">{{ task.body }}</vue-markdown>
  <ul v-if="task.comments">
    <li v-for="comment in task.comments.data">
      <blockquote>
        <p><vue-markdown>{{ comment.body }}</vue-markdown></p>
        <footer>{{ comment.user.data.name }}</footer>
      </blockquote>
    </li>
  </ul>
  <form @submit.prevent="addComment(newComment)">
    <div class="form-group">
      <textarea cols="30" rows="5" class="form-control" v-model="newComment.body" placeholder="Type your comment here..."></textarea>
    </div>
    <button class="btn btn-primary">Send</button>
  </form>
</template>

<script>
import Vue from 'vue'
import VueMarkdown from 'vue-markdown'
import { addComment } from '../modules/comment/actions'

Vue.component('vue-markdown', VueMarkdown)

export default {
  vuex: {
    actions: {
      addComment
    },
    getters: {
      task: {
        comments: state => state.all
      }
    }
  },

  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      task: {},
      newComment: {}
    }
  },

  ready () {
    this.$http.get('http://jenson.local/api/projects/' +
        this.$route.params.project_id + '/tasks/' + this.$route.params.task_id)
      .then((response) => {
        this.task = response.data.data
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
