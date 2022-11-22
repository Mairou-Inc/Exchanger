import { createRouter, createWebHistory } from 'vue-router'

import menu from './views/menu.vue'
import index from './views/index.vue'
import converter from './views/converter.vue'

import NotFound from './views/404.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [


    { path: '/', component: index },
    { path: '/menu', component: menu },
    { path: '/converter', component: converter },

    {
      // path: "*",
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
  }  
  
  ]
})

export default router
