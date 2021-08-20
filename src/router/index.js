import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import CreateDocForm from '../components/Dahsboard/CreateDocForm';
import FormCategory from '../components/Dahsboard/FormCategory'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
    {
      path: '/dashboard',
      name: 'Dashboard',
      
      component: function () {
        return import('../views/Dashboard.vue')
      },
  },
  {
    path: '/createdoc',
    name: 'CreateDocForm',
    
    component: function () {
      return import('../../src/components/Dahsboard/CreateDocForm.vue')
    },
},
{
  path: '/formcategory',
  name: 'FormCategory',
  
  component: function () {
    return import('../../src/components/Dahsboard/FormCategory.vue')
  },
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
