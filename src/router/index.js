import { createRouter, createWebHistory } from 'vue-router'
// Layout
import AdminLayout from '../layout/AdminLayout.vue'
import UserLayout from '../layout/UserLayout.vue'
//Page
import BossDashboard from '../views/admin/BossDashboard.vue'
import ContactView from '../views/ContactView.vue'
import NotFound from '../views/NotFound.vue'
import WorksView from '../views/WorksView.vue'

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
               component: ()=>import('../views/HomeView.vue'),
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
            {
               path:'works',
               name:'works',
               component:WorksView,
            },
         ],
      },
      // adminLayout
      {
         path: '/boss',
         component: AdminLayout,
         children: [{ path: '', name: 'boss', component: BossDashboard }],
      },
      { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
   ],
})

export default router
