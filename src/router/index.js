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
      {
        path: '/products',
        name: 'products',
        component: () => import('../pages/products/products-list.vue')
      },
      {
        path: '/create-product',
        name: 'create-product',
        component: () => import('../pages/products/create-product.vue')
      },
      {
        path: '/edit-product/:id',
        name: 'edit-product',
        component: () => import('../pages/products/edit-product.vue')
      },

    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router