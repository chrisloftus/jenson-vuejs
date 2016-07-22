export const routes = {
  '/dashboard': {
    name: 'dashboard.show',
    component (resolve) {
      require(['./components/Dashboard.vue'], resolve)
    },
    auth: true
  },
  '/login': {
    name: 'login.index',
    component (resolve) {
      require(['./components/Login.vue'], resolve)
    },
    guest: true
  },
  '/tasks': {
    name: 'tasks.index',
    component (resolve) {
      require(['./components/Tasks.vue'], resolve)
    },
    auth: true
  },
  '/projects/:project_id/tasks/:task_id': {
    name: 'tasks.show',
    component (resolve) {
      require(['./components/Task.vue'], resolve)
    },
    auth: true
  }
}

export const redirects = {
  '/': '/dashboard'
}
