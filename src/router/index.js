import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'index',
      component: (resolve) => require(['@/views/index.vue'], resolve)
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: (resolve) => require(['@/views/aboutUS.vue'],resolve)
    },
    {
      path: '/project',
      name: 'project',
      component: (resolve) => require(['@/views/project.vue'],resolve)
    },
    {
      path: '/events',
      name: 'events',
      component: (resolve) => require(['@/views/events.vue'],resolve)
    },
    {
      path: '/contact',
      name: 'contact',
      component: (resolve) => require(['@/views/contact.vue'],resolve)
    }
  ]
})
