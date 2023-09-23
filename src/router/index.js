import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DetailView from '../views/DetailView.vue'
import PricingView from '../views/PricingView.vue'
import SuccessView from '../views/SuccessView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: DetailView 
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: PricingView 
    },
    {
      path: '/success',
      name: 'Success',
      component: SuccessView 
    }
  ]
})

export default router
