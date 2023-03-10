import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Blog from '../views/blog/index.vue'
import Show from '../views/blog/Show'
import Create from '../views/blog/Create'
import Edit from '../views/blog/Edit'
import PageNotFound from '../views/blog/PageNotFound'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
   // redirect:'/blog'
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  }, 
  {
    path: '/blog/:id/:slug',
    name: 'post-show',
    component: Show,
    props:true
  },
  {
    path: '/new',
    name:'New',
    component: Create
   
  },
  {
    path: '/edit/:id',
    name:'post-edit',
    component: Edit,
    props:true
  },
  {
    path: '/posts',
    redirect:'/blog'
  },
  {
    path: '/:catchAll(.*)',
    component:PageNotFound
  
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
