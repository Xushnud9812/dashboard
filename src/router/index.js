import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: "/",
    component: () => import('../layouts/admin.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('../pages/dashboard.vue')
      },
      {
        path: '/users',
        name: 'users',
        component: () => import('../pages/users/user-list.vue')
      },
      {
        path: '/create-user',
        name: 'create-user',
        component: () => import('../pages/users/create-user.vue')
      },
      {
        path: '/edit-user/:id',
        name: 'edit-user',
        component: () => import('../pages/users/edit-user.vue')
      },

    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router