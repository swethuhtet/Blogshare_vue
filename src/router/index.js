import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import CreateView from '@/views/CreateView.vue'
import EditView from '@/views/EditView.vue'
import BlogDetails from '../views/BlogDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/create',
      name:'create',
      component: CreateView
    },
    {
      path: '/edit/:id',
      name:'edit',
      component: EditView
    },
    {
      path: '/blogs/:id',
      name: 'blog-details',
      component: BlogDetails
    }
  ]
})

export default router
