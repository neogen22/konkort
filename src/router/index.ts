import { createRouter, createWebHistory } from 'vue-router'
import KonkortAbout from '@/components/KonkortAbout.vue'
import KonkortTV from '@/components/KonkortTV.vue'
import KonkortContacts from '@/components/KonkortContacts.vue'
import KonkortMain from '@/components/KonkortMain.vue'
import KonkortTVPodkluchenie from '@/components/KonkortTVPodkluchenie.vue'
import KonkortTVMain from '@/components/KonkortTVMain.vue'
import KonkortTVChannels from '@/components/KonkortTVChannels.vue'
import KonkortTVAdvertising from '@/components/KonkortTVAdvertising.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: KonkortMain
    },
    {
      path: '/about',
      name: 'about',
      component: KonkortAbout
    },
    {
      path: '/tv',
      component: KonkortTV,
      children: [
        {
          path: '',
          component: KonkortTVMain
        },
        {
          path: 'podkl',
          name: 'podkl',
          component: KonkortTVPodkluchenie
        },
        {
          path: 'channels',
          name: 'channels',
          component: KonkortTVChannels
        },
        {
          path: 'advertising',
          name: 'advertising',
          component: KonkortTVAdvertising
        }
      ]
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      /* component: () => import('../views/AboutView.vue') */
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: KonkortContacts
    }
  ]
})

export default router
