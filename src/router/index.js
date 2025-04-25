import { createRouter, createWebHistory } from 'vue-router'
// Layout
import AdminLayout from '@/layout/AdminLayout.vue'
import UserLayout from '@/layout/UserLayout.vue'
//Page
import HomeView from '../views/HomeView.vue'
import BossDashboard from '@/views/admin/BossDashboard.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      // userLayout
      {
         path: '/',
         component: UserLayout,
         children: [
            {
               path: '',
               name:'home',
               component: HomeView,
            },
            {
               path: 'about',
               name: 'about',
               component: () => import('../views/AboutView.vue'),
            },
            {
               path:'contact',
               name:'contact',
               component:ContactView,
            },
         ],
      },
      // adminLayout
      {
         path: '/boss',
         component: AdminLayout,
         children: [{ path: '', name: 'boss', component: BossDashboard }],
      },
   ],
})

export default router
